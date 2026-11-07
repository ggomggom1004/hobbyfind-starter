'use client';

import { useState } from 'react';

import { CategoryFilter } from '@/features/hobby/components/category-filter';
import { HeroSection } from '@/features/hobby/components/hero-section';
import { HobbyGrid } from '@/features/hobby/components/hobby-grid';
import type { HobbyFilter } from '@/features/hobby/constants/hobbies';
import { filterHobbies } from '@/features/hobby/lib/filter-hobbies';

export function HomeView() {
  const [filter, setFilter] = useState<HobbyFilter>('all');
  const visibleHobbies = filterHobbies(filter);

  return (
    <main className="animate-in fade-in duration-500">
      <HeroSection
        title="당신만의 특별한 취미를 찾아보세요"
        description="운동형, 지능형, 예술형으로 나눈 18가지 취미를 카드로 둘러보세요."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CategoryFilter value={filter} onChange={setFilter} />
        </div>
        <HobbyGrid hobbies={visibleHobbies} />
      </section>
    </main>
  );
}
