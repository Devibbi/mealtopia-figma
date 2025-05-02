"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span
        className={`cursor-pointer px-3 py-1 rounded-md transition-colors duration-200 ${
          isActive
            ? 'text-green-400 font-semibold'
            : 'text-white text-opacity-70 hover:text-green-300'
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
