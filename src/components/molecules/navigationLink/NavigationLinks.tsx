import Link from 'next/link';

interface NavigationItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavigationItem[] = [
  { href: '/', label: '견적요청' },
  { href: '/', label: '전문가찾기' },
  { href: '/', label: '프로젝트찾기' },
  { href: '/', label: '스토어' },
  { href: '/', label: '커뮤니티' },
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
