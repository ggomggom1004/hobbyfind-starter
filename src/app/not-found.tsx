'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-muted-foreground">요청한 주소의 페이지가 없습니다.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand px-6 py-3 font-medium text-brand-foreground transition-colors hover:bg-brand-point focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
