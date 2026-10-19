'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '../atoms/Button';
import { EmailInput } from '../atoms/EmailInput';
import { Checkbox } from '../atoms/Checkbox';
import { GlowingCircularGrid } from '../atoms/GlowingCircularGrid';
import {
  EmailLink,
  FacebookLink,
  GitHubLink,
  InstagramLink,
  LinkedInLink,
  SOCIAL_LINKS,
} from '../atoms/socialLinks';

const footerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.08 },
  },
};

const footerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const courseLinks = [
  { name: 'Backend Development', href: '/courses/backend' },
  { name: 'Frontend Engineering', href: '/courses/frontend' },
  { name: 'Mobile Development', href: '/courses/mobile' },
  { name: 'Product Management', href: '/courses/product' },
];

const socialLinks = [
  { label: 'LinkedIn', Component: LinkedInLink },
  { label: 'GitHub', Component: GitHubLink },
  { label: 'Facebook', Component: FacebookLink },
  { label: 'Instagram', Component: InstagramLink },
  { label: 'Email', Component: EmailLink },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="relative w-full bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 72 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-x-0 -bottom-20 z-0 flex justify-center overflow-hidden"
        >
          <GlowingCircularGrid />
        </motion.div>

        <motion.div
          variants={footerStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 items-start justify-between gap-12 md:grid-cols-2">
            <motion.div variants={footerStaggerVariants} className="space-y-10">
              <div className="space-y-4">
                <motion.h3 variants={footerItemVariants} className="text-lg font-extrabold tracking-wider text-white uppercase">
                  COURSES
                </motion.h3>
                <motion.ul variants={footerStaggerVariants} className="space-y-3">
                  {courseLinks.map((course) => (
                    <motion.li key={course.name} variants={footerItemVariants}>
                      <Link href={course.href} className="text-base font-medium text-gray-300 transition-colors hover:text-white">
                        {course.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.form
                variants={footerStaggerVariants}
                onSubmit={handleNewsletterSubmit}
                className="max-w-md space-y-4 pt-2"
              >
                <motion.div variants={footerItemVariants}>
                  <EmailInput
                    id="newsletter-email"
                    label=""
                    placeholder="Don’t miss out updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-gray-800 bg-black text-white placeholder-gray-500 focus:border-blue-500"
                  />
                </motion.div>
                <motion.div variants={footerItemVariants}>
                  <Checkbox
                    id="newsletter-privacy"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="border-gray-700 bg-black text-blue-600 focus:ring-0"
                    label={
                      <span className="text-xs leading-relaxed text-gray-400">
                        I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
                      </span>
                    }
                  />
                </motion.div>
                <motion.div variants={footerItemVariants}>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!agreed || !email}
                    className="inline-flex items-center gap-2 rounded-5px bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700"
                  >
                    <span>Send</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            <motion.div variants={footerStaggerVariants} className="flex flex-col items-start gap-3 md:justify-self-end">
              <motion.h3 variants={footerItemVariants} className="mb-1 text-lg font-extrabold tracking-wider text-white uppercase">
                Contact Us
              </motion.h3>
              {socialLinks.map((item) => (
                <motion.div key={item.label} variants={footerItemVariants}>
                  <item.Component
                    showLabel
                    className="group flex items-center gap-5 text-base font-medium text-gray-300 transition-colors hover:text-white"
                    labelClassName="text-base font-medium text-gray-300 transition-colors group-hover:text-white"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-gray-200 bg-white text-slate-900">
        <motion.div
          variants={footerStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 items-center gap-8 text-sm md:grid-cols-3 md:gap-x-10 lg:gap-x-16">
            <motion.div variants={footerItemVariants} className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">REVIEWED ON</span>
                <Image src="/images/partners/clutch-logo.svg" alt="Clutch" width={77} height={22} className="mt-0.5" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-0.5 text-red-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-red-500 text-red-500" />
                  ))}
                </div>
                <div className="mt-0.5 text-[11px] font-bold text-slate-800 uppercase">31 REVIEWS</div>
              </div>
            </motion.div>

            <motion.div variants={footerItemVariants} className="text-sm leading-relaxed text-slate-700 md:border-l md:border-gray-200 md:pl-6">
              4, Penial Plaza, Ita Oniyan, Oyemekun Rd,<br />
              Akure 340212, Ondo
            </motion.div>

            <motion.div variants={footerItemVariants} className="space-y-2 text-sm leading-relaxed text-slate-700 md:border-l md:border-gray-200 md:pl-6">
              <div>T: 0703 793 4192</div>
              <div className="flex flex-wrap gap-x-1">E: <EmailLink className="break-all hover:text-blue-600">{SOCIAL_LINKS.emailAddress}</EmailLink></div>
            </motion.div>

          </div>

          <motion.div variants={footerItemVariants} className="mt-6 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
            © 2026 Enegxi Hub. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
