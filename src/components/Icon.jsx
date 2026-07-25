/*
 * Icon — the kit rendered <i data-lucide="name"> against the lucide UMD build.
 * In production we use lucide-react, keeping the kebab-case names the design
 * uses so section markup stays a direct port.
 *
 * Instagram and Facebook are hand-rolled: lucide v1 dropped brand icons.
 */
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  CircleSlash,
  Ear,
  Eye,
  Gift,
  Globe,
  Infinity as InfinityIcon,
  Menu,
  Mail,
  MessageCircleQuestion,
  MessageSquareQuote,
  Minimize2,
  MousePointer2,
  Phone,
  X,
} from 'lucide-react';

function Instagram({ size, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Facebook({ size, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const ICONS = {
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'arrow-up-right': ArrowUpRight,
  'calendar-days': CalendarDays,
  check: Check,
  'chevron-down': ChevronDown,
  'circle-slash': CircleSlash,
  ear: Ear,
  eye: Eye,
  facebook: Facebook,
  gift: Gift,
  globe: Globe,
  infinity: InfinityIcon,
  instagram: Instagram,
  mail: Mail,
  menu: Menu,
  'message-circle-question': MessageCircleQuestion,
  'message-square-quote': MessageSquareQuote,
  'minimize-2': Minimize2,
  'mouse-pointer-2': MousePointer2,
  phone: Phone,
  x: X,
};

export default function Icon({ name, size = 20, color, style }) {
  const Cmp = ICONS[name];
  if (!Cmp) {
    if (import.meta.env.DEV) console.warn(`Icon: unknown name "${name}"`);
    return null;
  }
  return (
    <Cmp size={size} style={{ color, flexShrink: 0, ...style }} aria-hidden="true" />
  );
}
