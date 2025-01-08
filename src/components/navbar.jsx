import React from 'react';

function Navbar() {
  return (
    <nav className="bg-light p-[25px] flex justify-between rounded-3xl mt-10 items-center max-w-5xl mx-auto"> 
      <h1 className="text-darker font-bold font-inter text-xl">port:folio</h1>
      <ul className="flex space-x-4 font-inter">
        <li>
          <a href="/" className="text-darker hover:text-darkest">Home</a>
        </li>
        <li>
          <a href="/about" className="text-darker hover:text-darkest">About</a>
        </li>
        <li>
          <a href="/contact" className="text-darker hover:text-darkest">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;