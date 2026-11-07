'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  categoryDetails,
  fallbackHobbyImage,
  type Hobby,
} from '@/features/hobby/constants/hobbies';

type HobbyCardProps = {
  hobby: Hobby;
};

export function HobbyCard({ hobby }: HobbyCardProps) {
  const [imageSrc, setImageSrc] = useState(hobby.imageUrl);
  const [showFallbackArea, setShowFallbackArea] = useState(false);
  const categoryLabel = categoryDetails[hobby.category].label;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] bg-muted">
        {showFallbackArea ? (
          <div className="flex h-full items-center justify-center bg-brand/10 px-4 text-center text-sm font-medium text-brand">
            {hobby.name}
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={hobby.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover"
            onError={() => {
              if (imageSrc !== fallbackHobbyImage) {
                setImageSrc(fallbackHobbyImage);
                return;
              }

              setShowFallbackArea(true);
            }}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-mint px-2.5 py-1 text-xs font-medium text-mint-foreground">
          {categoryLabel}
        </span>
        <h2 className="text-lg font-bold text-foreground">{hobby.name}</h2>
        <p className="text-sm leading-6 text-muted-foreground">{hobby.description}</p>
      </div>
    </article>
  );
}
