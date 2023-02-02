import React from 'react';
import { navLinks } from '../constants';

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-primary text-white">
    <div>
      <h1 className="text-xl font-bold">Resume</h1>
    </div>
    <div className="flex">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="px-4 py-2 mx-2 font-medium text-white hover:bg-white hover:text-primary transition duration-300 ease-in-out"
        >
          {link.title}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;