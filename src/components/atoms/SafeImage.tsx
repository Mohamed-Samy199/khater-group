'use client';

import { useState, type ReactNode } from 'react';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';

interface SafeImageProps {
  src: AssetSource | null | undefined;
  alt?: string;
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'sync' | 'auto';
  ariaHidden?: boolean;
  fallback?: ReactNode;
}

export default function SafeImage({
  src,
  alt = '',
  className = '',
  fetchPriority,
  loading,
  decoding,
  ariaHidden,
  fallback = null,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <>{fallback}</>;
  }

  return (
    <img
      src={resolveAssetSrc(src)}
      alt={alt}
      fetchPriority={fetchPriority}
      loading={loading}
      decoding={decoding}
      aria-hidden={ariaHidden}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
