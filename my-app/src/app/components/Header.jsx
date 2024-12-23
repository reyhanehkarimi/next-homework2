'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Support', href: '/support' },
    { name: 'Store', href: '/store' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between">
        <h1 className="text-xl font-bold">Next App</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${
                    pathname === item.href ? 'active-link' : ''
                  } hover:text-blue-300`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
