'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

function ChevronRight() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function NavRow({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.06] active:bg-white/[0.08]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-gray-300">{item.icon}</span>
      <span className="min-w-0 flex-1">{item.label}</span>
      <ChevronRight />
    </Link>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="px-3 pb-2 pt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 first:pt-4">{children}</p>
  );
}

const mainLinks: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/blog/how-to-create-account-login#create-account',
    label: 'Register',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    href: '/blog/how-to-create-account-login#login',
    label: 'Login',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
      </svg>
    ),
  },
];

const guideLinks: NavItem[] = [
  {
    href: '/blog/how-to-earn-money-teen-patti-spin',
    label: 'Earn Money',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/blog/is-teen-patti-spin-real-or-fake',
    label: 'Is It Real?',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    href: '/withdraw-money-from-teen-patti-spin',
    label: 'Withdrawal Proof',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    href: '/deposit-money-in-teen-patti-spin',
    label: 'Deposit Guide',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const moreLinks: NavItem[] = [
  {
    href: '/teen-patti-spin-for-pc',
    label: 'PC Version',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/about-us',
    label: 'About Us',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/contact-us',
    label: 'Contact Us',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = () => setIsOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center p-1 text-[#FFA500]"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {mounted && isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
              <button
                type="button"
                className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
                aria-label="Dismiss menu"
                onClick={close}
              />

              <div className="relative z-[1] flex h-full w-full max-w-[min(100%,20rem)] flex-col bg-[#121214] shadow-2xl">
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3.5">
                  <Link href="/" className="flex min-w-0 items-center gap-3" onClick={close}>
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 to-teal-900 p-0.5 shadow-inner ring-1 ring-white/10">
                      <div className="relative h-full w-full rounded-[10px] bg-[#0c1512]">
                        <Image src="/teen-patti-spin.webp" alt="" fill className="object-contain p-0.5" sizes="44px" aria-hidden />
                      </div>
                    </div>
                    <span className="truncate text-lg font-bold tracking-tight text-white">Teen Patti Spin</span>
                  </Link>
                  <button
                    type="button"
                    onClick={close}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-white/[0.12]"
                    aria-label="Close menu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-4 pt-1">
                  <SectionLabel>Main</SectionLabel>
                  {mainLinks.map((item) => (
                    <NavRow key={item.href} item={item} onNavigate={close} />
                  ))}
                  <SectionLabel>Guides</SectionLabel>
                  {guideLinks.map((item) => (
                    <NavRow key={item.href} item={item} onNavigate={close} />
                  ))}
                  <SectionLabel>More</SectionLabel>
                  {moreLinks.map((item) => (
                    <NavRow key={item.href} item={item} onNavigate={close} />
                  ))}
                </nav>

                <div className="shrink-0 border-t border-white/[0.06] bg-[#121214] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
                  <Link
                    href="/download-teen-patti-spin"
                    onClick={close}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-emerald-900/30 transition-colors hover:bg-emerald-500 active:bg-emerald-700"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Now
                  </Link>
                  <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-500">
                    54 MB · Android 5.0+ · v1.652(0) <span className="text-gray-600">(2026 update)</span>
                  </p>
                </div>
              </div>

              {/* Accent on viewport right edge (drawer border looked “mid-screen” on narrow panels) */}
              <div
                className="pointer-events-none fixed inset-y-0 right-0 z-[2] w-1 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.35)] md:hidden"
                aria-hidden
              />
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
