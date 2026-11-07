'use client';

import { HobbyCard } from '@/features/hobby/components/hobby-card';
import type { Hobby } from '@/features/hobby/constants/hobbies';

type HobbyGridProps = {
  hobbies: Hobby[];
};

export function HobbyGrid({ hobbies }: HobbyGridProps) {
  if (hobbies.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center text-muted-foreground">
        표시할 취미가 없습니다.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hobbies.map((hobby) => (
        <li key={hobby.id}>
          <HobbyCard hobby={hobby} />
        </li>
      ))}
    </ul>
  );
}
