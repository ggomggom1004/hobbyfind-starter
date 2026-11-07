'use client';

type HeroSectionProps = {
  title: string;
  description: string;
};

export function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-mint">HobbyFind</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
