import Link from 'next/link';

interface NavigationItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavigationItem[] = [
  { href: '/commission/common/start', label: '견적요청' },
  { href: '/expert', label: '전문가찾기' },
  { href: '/commission', label: '프로젝트찾기' },
  { href: '/store', label: '스토어' },
];

export default function NavigationLinks() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-24">
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="block">
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
