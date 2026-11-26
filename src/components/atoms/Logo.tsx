import { GROUP_LOGO } from '@/constants/site';
import { resolveAssetSrc } from '@/lib/assets';

interface LogoProps {
  className?: string;
}

/**
 * Khater Group monogram (real logo file), rendered white for dark backgrounds.
 */
export function GroupMark({ className = '' }: LogoProps) {
  return (
    <img
      src={resolveAssetSrc(GROUP_LOGO)}
      alt=""
      className={`w-auto object-contain brightness-0 invert ${className}`}
    />
  );
}

/**
 * Horizontal logo (monogram + wordmark on one line).
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <GroupMark className="h-8" />
      <span className="text-[26px] font-semibold leading-none tracking-[-0.04em]">
        Khater Group
      </span>
    </span>
  );
}
