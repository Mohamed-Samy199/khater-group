import type { StaticImageData } from 'next/image';

export type AssetSource = string | StaticImageData;

export function resolveAssetSrc(asset: AssetSource): string {
  return typeof asset === 'string' ? asset : asset.src;
}
