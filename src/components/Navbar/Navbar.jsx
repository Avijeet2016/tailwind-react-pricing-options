import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    }

    return (
      <nav className="flex justify-between bg-gray-500 px-5 py-3">
        <div className="flex gap-1">
          <div onClick={() => handleMenu()} className="sm:hidden">
            {open ? <X></X> : <Menu></Menu>}
          </div>
          <ul
            className={`sm:hidden bg-amber-400 px-5 mx-5 hover:bg-amber-500 absolute ${open? "top-10" : "-top-40" } duration-1000`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
            <li>Media</li>
          </ul>
          <button className="flex">Website</button>
        </div>
        <div>
          <ul className="hidden sm:flex items-center gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
            <li>Media</li>
          </ul>
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </nav>
    );
};

export default Navbar;