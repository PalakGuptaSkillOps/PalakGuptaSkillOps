import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-gray-800 text-white">
      <Link href="/">Logo</Link>
      <div>
        <Link href="/cart">Cart</Link>
        <Link href="/account">Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;