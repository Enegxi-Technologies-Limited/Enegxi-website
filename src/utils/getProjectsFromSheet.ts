import type { Project } from '@/types/project';

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
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = '';
      continue;
    }
    cell += character;
  }
  if (cell.length || row.length) {
    row.push(cell);
    if (row.some((value) => value.trim())) rows.push(row);
  }
  return rows;
}

function normalizeHeader(value: string): string {
  return value.replace(/^\uFEFF/, '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

function splitValues(value: string | undefined, delimiter: RegExp): string[] {
  return (value ?? '')
    .split(delimiter)
    .map((part) => part.replace(/^[-*?\s]+/, '').trim())
    .filter(Boolean);
}

function toImageUrl(value: string): string {
  const imageUrl = value.trim();
  if (!imageUrl) return '';

  try {
    const parsed = new URL(imageUrl);
    if (parsed.hostname === 'drive.google.com') {
      const fileId = parsed.searchParams.get('id') ?? parsed.pathname.match(/\/file\/d\/([^/]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w1600`;
      }
    }
    return imageUrl;
  } catch {
    return imageUrl.startsWith('/') ? imageUrl : '';
  }
}

function slugify(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export async function getProjectsFromSheet(): Promise<Project[]> {
  const csvUrl = process.env.NEXT_PUBLIC_PROJECTS_SHEET_CSV_URL;
  if (!csvUrl) throw new Error('NEXT_PUBLIC_PROJECTS_SHEET_CSV_URL is not configured.');

  const response = await fetch(csvUrl, { next: { revalidate: 3600 } });
  if (!response.ok) throw new Error(`Projects sheet returned ${response.status} ${response.statusText}.`);

  const [headers, ...dataRows] = parseCsvRows(await response.text());
  if (!headers) return [];

  const normalizedHeaders = headers.map(normalizeHeader);
  const column = (...names: string[]) => normalizedHeaders.findIndex((header) => names.includes(header));
  const titleIndex = column('title', 'projecttitle');
  const descriptionIndex = column('description', 'projectdescription');
  const problemIndex = column('problemstatement', 'problem');
  const contributionIndex = column('teamcontribution', 'teamcontributions', 'contribution');
  const imageIndex = column('image', 'imageurl', 'projectimage');
  const techStackIndex = column('techstack', 'technologies');
  const trackIndex = normalizedHeaders.findIndex((header) => header === 'track' || header.startsWith('track'));
  const creatorsIndex = column('creators', 'creator', 'team');
  const demoIndex = column('livedemourl', 'livedemo', 'demourl');

  if (titleIndex < 0) throw new Error('Projects CSV is missing a Title column.');

  return dataRows.flatMap((columns, rowIndex) => {
    const title = columns[titleIndex]?.trim();
    if (!title) return [];

    const image = imageIndex >= 0 ? toImageUrl(columns[imageIndex] ?? '') : '';
    const techStack = techStackIndex >= 0 ? splitValues(columns[techStackIndex], /[,;|\n]+/) : [];
    const creators = creatorsIndex >= 0 ? splitValues(columns[creatorsIndex], /[,;|\n]+/) : [];
    const teamContributions = contributionIndex >= 0
      ? splitValues(columns[contributionIndex], /[;|\n]+/)
      : [];
    const liveDemoUrl = demoIndex >= 0 ? columns[demoIndex]?.trim() ?? '' : '';

    return [{
      id: slugify(title) || `project-${rowIndex + 1}`,
      title,
      description: descriptionIndex >= 0 ? columns[descriptionIndex]?.trim() ?? '' : '',
      problemStatement: problemIndex >= 0 ? columns[problemIndex]?.trim() ?? '' : '',
      teamContributions,
      image,
      liveDemoUrl,
      techStack,
      track: trackIndex >= 0 ? columns[trackIndex]?.trim() ?? '' : '',
      creators,
      featured: false,
    }];
  });
}
