'use client';

import { HeroSection } from '@/features/hobby/components/hero-section';
import { HobbyGrid } from '@/features/hobby/components/hobby-grid';
import type { HobbyCategory } from '@/features/hobby/constants/hobbies';
import { filterHobbies, getCategoryDetail } from '@/features/hobby/lib/filter-hobbies';

type CategoryViewProps = {
  category: HobbyCategory;
};

export function CategoryView({ category }: CategoryViewProps) {
  const detail = getCategoryDetail(category);
  const visibleHobbies = filterHobbies(category);

  return (
    <main className="animate-in fade-in duration-500">
      <HeroSection title={detail.label} description={detail.description} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <HobbyGrid hobbies={visibleHobbies} />
      </section>
    </main>
  );
}
