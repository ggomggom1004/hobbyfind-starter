'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';

import { CategoryView } from '@/features/hobby/components/category-view';
import { getHobbyCategory } from '@/features/hobby/lib/filter-hobbies';

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params);
  const category = getHobbyCategory(slug);

  if (!category) {
    notFound();
  }

  return <CategoryView category={category} />;
}
