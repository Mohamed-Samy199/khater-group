'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Ensures that navigating between pages instantly places the user at the top (y = 0)
 * without triggering CSS smooth-scroll animations across pages.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const original = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    window.scrollTo(0, 0);

    const timer = window.setTimeout(() => {
      html.style.scrollBehavior = original;
    }, 60);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
