import React from 'react';

const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Irimia-Sorici Andrei ~ IA: Pro sau Contra.</p>
    </footer>
  );
};

export default Footer;
