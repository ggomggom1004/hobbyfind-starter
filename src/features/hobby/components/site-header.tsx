'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { categoryOrder, categoryDetails } from '@/features/hobby/constants/hobbies';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link
          href="/"
          className="w-fit rounded-md text-2xl font-bold tracking-tight text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          HobbyFind
        </Link>
        <nav aria-label="카테고리" className="flex flex-wrap gap-1 sm:gap-2">
          {categoryOrder.map((category) => {
            const detail = categoryDetails[category];
            const isActive = pathname === detail.href;

            return (
              <Link
                key={category}
                href={detail.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:px-4',
                  isActive
                    ? 'bg-brand text-brand-foreground'
                    : 'text-foreground hover:bg-brand/10 hover:text-brand',
                )}
              >
                {detail.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
