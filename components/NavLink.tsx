'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? 'nav-link active' : 'nav-link'}
      aria-current={pathname === href ? 'page' : 'false'}>
      {children}
    </Link>
  );
}

export default NavLink;
