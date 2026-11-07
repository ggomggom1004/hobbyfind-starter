'use client';

import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>HobbyFind는 로그인 없이 18가지 취미를 둘러보는 탐색 서비스입니다.</p>
        <Link
          href="/"
          className="w-fit rounded-md font-medium text-foreground hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          홈으로
        </Link>
      </div>
    </footer>
  );
}
