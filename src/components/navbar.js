"use client"
// components/NavBar.jsx
import { useState } from 'react';

export default function NavBar() {
  const [activePage, setActivePage] = useState('Home');

  const navItems = [
    'Home',
    'About Us',
    'Team',
    'Articles and Events',
    'Careers',
    'Contact',
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          onClick={() => setActivePage(item)}
          className={`${
            activePage === item ? 'text-green-500' : 'text-black'
          } hover:text-purple-600`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
