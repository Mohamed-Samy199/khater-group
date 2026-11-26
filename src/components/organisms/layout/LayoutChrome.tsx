'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import ScrollToTop from './ScrollToTop';
import WhatsAppChat from './WhatsAppChat';

interface LayoutChromeProps {
  navbar: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export default function LayoutChrome({ navbar, footer, children }: LayoutChromeProps) {
  const pathname = usePathname() || '/';
  const isGateway = pathname === '/';
  const isKsa = pathname === '/ksa' || pathname.startsWith('/ksa/');

  if (isGateway) {
    return (
      <>
        <ScrollToTop />
        <main>{children}</main>
      </>
    );
  }

  if (isKsa) {
    return (
      <>
        <ScrollToTop />
        <main>{children}</main>
        <WhatsAppChat />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      {navbar}
      <main>{children}</main>
      {footer}
      <WhatsAppChat />
    </>
  );
}
