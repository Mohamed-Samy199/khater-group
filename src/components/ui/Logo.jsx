// // Khater "K" monogram, drawn from the brand construction.
// export function KMark({ className = '' }) {
//   return (
//     <svg viewBox="0 0 472 575" className={className} fill="currentColor" aria-hidden="true">
//       <polygon points="0,0 181,0 181,256 323,52 472,155 181,575 0,575" />
//       <polygon points="238,575 355,406 472,575" />
//     </svg>
//   );
// }

// // Primary horizontal logo. Always uses currentColor (white on dark, black on light).
// export default function Logo({ className = '' }) {
//   return (
//     <span className={`inline-flex items-center gap-3 ${className}`}>
//       <KMark className="h-7 w-auto" />
//       <span className="text-[19px] font-bold leading-[0.95] tracking-[-0.03em]">
//         Khater
//         <br />
//         Group
//         <sup className="ml-0.5 align-top text-[8px] font-light">®</sup>
//       </span>
//     </span>
//   );
// }

import { GROUP_LOGO } from '../../constants/site';

// Khater Group monogram (real logo file), rendered white for dark backgrounds.
// Remove `brightness-0 invert` if you add a white version of the logo.
export function GroupMark({ className = '' }) {
  return <img src={GROUP_LOGO} alt="" className={`w-auto object-contain brightness-0 invert ${className}`} />;
}

// Horizontal logo (monogram + wordmark on one line).
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <GroupMark className="h-8" />
      <span className="text-[26px] font-semibold leading-none tracking-[-0.04em]">
        Khater Group
      </span>
    </span>
  );
}