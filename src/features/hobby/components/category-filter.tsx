'use client';

import { hobbyFilters, type HobbyFilter } from '@/features/hobby/constants/hobbies';
import { cn } from '@/lib/utils';

type CategoryFilterProps = {
  value: HobbyFilter;
  onChange: (value: HobbyFilter) => void;
};

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="취미 카테고리 필터"
      className="flex flex-wrap gap-2"
    >
      {hobbyFilters.map((filter) => {
        const isSelected = value === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(filter.value)}
            className={cn(
              'min-h-11 rounded-full border px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
              isSelected
                ? 'border-brand bg-brand text-brand-foreground'
                : 'border-border bg-card text-foreground hover:border-brand hover:text-brand',
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
