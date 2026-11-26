import Link from 'next/link';
import Container from '@/components/atoms/Container';

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center bg-brand-black pt-24 pb-20 text-brand-white">
      <Container>
        <div className="max-w-xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-muted">
            404 — Page Not Found
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            This environment hasn&apos;t been built yet.
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-brand-muted">
            The page you requested may have moved or no longer exists. Explore Khater Group’s five specialized engineering sectors or return home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/eg"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-black transition hover:bg-white/90"
            >
              Khater Group Egypt
            </Link>
            <Link
              href="/ksa"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              Khater Sports KSA
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white hover:text-white"
            >
              Region Gateway
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
