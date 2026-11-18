'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const photos = [
  {
    id: 'live-coding-lab',
    src: '/images/gallary/cohort-sessions/cohortsession2.JPG?v=5',
    title: 'Live Coding Lab',
    alt: 'Enegxi students taking part in a live coding lab.',
  },
  {
    id: 'interactive-lecture',
    src: '/images/gallary/cohort-sessions/cohortsession3.JPG?v=5',
    title: 'Interactive Lecture',
    alt: 'Students learning together during an interactive Enegxi lecture.',
  },
  {
    id: 'sprint-kickoff',
    src: '/images/gallary/hackathons/hackaton1.jpg?v=5',
    title: 'Sprint Kickoff',
    alt: 'Enegxi students starting a collaborative hackathon sprint.',
  },
  {
    id: 'debugging',
    src: '/images/gallary/hackathons/hackaton4.jpg?v=5',
    title: 'Debugging Together',
    alt: 'A student team working through a coding challenge together.',
  },
  {
    id: 'practical-demo',
    src: '/images/gallary/workshops/workshop3.jpg?v=5',
    title: 'Practical Demo',
    alt: 'An instructor demonstrating practical software development skills.',
  },
  {
    id: 'community-hangout',
    src: '/images/gallary/workshops/workshop2.jpg?v=5',
    title: 'Community Hangout',
    alt: 'Enegxi students connecting during a community session.',
  },
];

const SWIPE_DISTANCE = 100;
const SWIPE_VELOCITY = 500;
const FIRST_PHOTO_ID = photos[0].id;

export function PhotoStack() {
  const [order, setOrder] = useState(photos);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const topPhoto = order[0];

  const sendToBack = () => {
    setOrder((current) => [...current.slice(1), current[0]]);
  };

  const bringToFront = () => {
    setOrder((current) => [current[current.length - 1], ...current.slice(0, -1)]);
  };

  const showPhoto = (id: string) => {
    setOrder((current) => {
      const targetIndex = current.findIndex((photo) => photo.id === id);
      if (targetIndex <= 0) return current;
      return [...current.slice(targetIndex), ...current.slice(0, targetIndex)];
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      sendToBack();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      bringToFront();
    }
  };

  return (
    <section className="bg-slate-50/70 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-blue-700 uppercase">
            Life at Enegxi
          </p>
          <h2 className="text-3xl leading-tight font-black tracking-tight text-[#0B132B] sm:text-4xl lg:text-5xl">
            See how our students are doing
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            A look at the teamwork, hands-on learning, and progress happening across our student community.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Swipe the top photo or use the controls to explore.
          </p>
          <Link
            href="/gallery"
            className="mt-6 inline-flex items-center justify-center rounded-5px bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            See More
          </Link>
        </div>

        <div
          role="region"
          aria-label="Student photo carousel"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="mx-auto w-full max-w-xl outline-none focus-visible:rounded-5px focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
        >
          <div className="relative mx-auto w-full pb-14">
            <div className="relative aspect-[4/3] w-full">
              {order.map((photo, position) => (
                <motion.figure
                  key={photo.id}
                  drag={position === 0 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  dragMomentum={false}
                  onDragEnd={(_, info) => {
                    if (
                      Math.abs(info.offset.x) > SWIPE_DISTANCE ||
                      Math.abs(info.velocity.x) > SWIPE_VELOCITY
                    ) {
                      sendToBack();
                    }
                  }}
                  animate={{
                    x: position * 2,
                    y: position * 12,
                    scale: 1 - position * 0.045,
                    rotate: position === 0 ? 0 : position % 2 === 0 ? -2 : 2,
                  }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 300, damping: 28 }
                  }
                  style={{ zIndex: order.length - position, transformOrigin: 'top center' }}
                  aria-hidden={position !== 0}
                  className="absolute inset-0 overflow-hidden rounded-5px border-4 border-white bg-slate-200 shadow-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 576px"
                    loading={photo.id === FIRST_PHOTO_ID ? 'eager' : 'lazy'}
                    draggable={false}
                    className="pointer-events-none select-none object-cover"
                  />
                </motion.figure>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3" aria-label="Photo controls">
            <button
              type="button"
              onClick={bringToFront}
              aria-label="Previous student photo"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center gap-2" aria-label="Choose a student photo">
              {photos.map((photo) => {
                const isActive = photo.id === topPhoto.id;

                return (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => showPhoto(photo.id)}
                    aria-label={`Show photo: ${photo.title}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`h-2.5 rounded-2xl transition-[width,background-color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                      isActive ? 'w-7 bg-blue-700' : 'w-2.5 bg-slate-300 hover:bg-slate-500'
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={sendToBack}
              aria-label="Next student photo"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
