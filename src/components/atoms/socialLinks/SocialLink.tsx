import React, { type ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
  external?: boolean;
}

export function SocialLink({
  href,
  label,
  icon,
  children,
  className = 'group flex flex-col items-center gap-1 text-slate-800 transition-colors hover:text-blue-600',
  iconClassName = 'transition-transform group-hover:scale-110',
  labelClassName = 'text-[11px] font-medium text-slate-700 group-hover:text-blue-600',
  showLabel = false,
  external = true,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {children ?? <span className={iconClassName}>{icon}</span>}
      {showLabel && <span className={labelClassName}>{label}</span>}
    </a>
  );
}
