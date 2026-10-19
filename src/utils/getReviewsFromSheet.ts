import type { Review } from '@/types/review';

function parseCsvRows(csvText: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let insideQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index];

    if (character === '"') {
      if (insideQuotes && csvText[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (character === ',' && !insideQuotes) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((character === '\n' || character === '\r') && !insideQuotes) {
      if (character === '\r' && csvText[index + 1] === '\n') index += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== '')) rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    cell += character;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    if (row.some((value) => value.trim() !== '')) rows.push(row);
  }

  return rows;
}

function normalizeHeader(header: string): string {
  return header.replace(/^\uFEFF/, '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

export async function getReviewsFromSheet(): Promise<Review[]> {
  const sheetCsvUrl = process.env.NEXT_PUBLIC_REVIEWS_SHEET_CSV_URL;

  if (!sheetCsvUrl) {
    console.warn('NEXT_PUBLIC_REVIEWS_SHEET_CSV_URL is missing in environment variables.');
    return [];
  }

  try {
    const response = await fetch(sheetCsvUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data: ${response.status} ${response.statusText}`);
    }

    const [headerRow, ...dataRows] = parseCsvRows(await response.text());
    if (!headerRow) return [];

    const headerIndexes = headerRow.map(normalizeHeader);
    const timestampIndex = headerIndexes.findIndex((header) => header === 'timestamp');
    const nameIndex = headerIndexes.findIndex((header) => header === 'fullname' || header === 'name');
    const reviewIndex = headerIndexes.findIndex((header) =>
      ['reviewfeedback', 'review', 'feedback'].includes(header)
    );
    const ratingIndex = headerIndexes.findIndex((header) => header === 'rating');

    if (nameIndex < 0 || reviewIndex < 0) {
      console.error('The published reviews CSV is missing a Full Name or Review / Feedback column.');
      return [];
    }

    return dataRows.flatMap((columns, index) => {
      const name = columns[nameIndex]?.trim();
      const reviewText = columns[reviewIndex]?.trim();
      const ratingValue = Number.parseInt(columns[ratingIndex] ?? '', 10);

      if (!name || !reviewText) return [];

      return [{
        id: `sheet-review-${index}`,
        name,
        reviewText,
        rating: Number.isFinite(ratingValue) && ratingValue >= 1 && ratingValue <= 5 ? ratingValue : 5,
        createdAt: timestampIndex >= 0 ? columns[timestampIndex]?.trim() : undefined,
      }];
    });
  } catch (error) {
    console.error('Error fetching reviews from Google Sheet:', error);
    return [];
  }
}
