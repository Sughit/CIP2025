import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Funcție pentru scroll smooth către secțiunea cu id-ul primit
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Închide meniul mobile după clic
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-800 text-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Titlu pe un singur rând */}
        <h1 className="text-2xl font-bold whitespace-nowrap">
          IA: Pro sau Contra
        </h1>
        {/* Butoanele pentru ecran desktop */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => handleNavClick('intro')} className="hover:text-green-300 focus:outline-none">
            Introducere
          </button>
          <button onClick={() => handleNavClick('pro')} className="hover:text-green-300 focus:outline-none">
            Pro
          </button>
          <button onClick={() => handleNavClick('contra')} className="hover:text-green-300 focus:outline-none">
            Contra
          </button>
          <button onClick={() => handleNavClick('concluzie')} className="hover:text-green-300 focus:outline-none">
            Concluzie
          </button>
        </div>
        {/* Meniu burger pentru ecrane mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              // Icon pentru închidere (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon pentru meniu burger
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Meniu mobil extins */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-2 p-4">
            <button onClick={() => handleNavClick('intro')} className="hover:text-green-300 text-left focus:outline-none">
              Introducere
            </button>
            <button onClick={() => handleNavClick('pro')} className="hover:text-green-300 text-left focus:outline-none">
              Pro
            </button>
            <button onClick={() => handleNavClick('contra')} className="hover:text-green-300 text-left focus:outline-none">
              Contra
            </button>
            <button onClick={() => handleNavClick('concluzie')} className="hover:text-green-300 text-left focus:outline-none">
              Concluzie
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
