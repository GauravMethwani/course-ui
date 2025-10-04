import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react'; // We keep this for hamburger icon; if you want to remove this too, let me know

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="relative z-30 flex items-center justify-between px-6 py-4 md:px-16 md:py-6 border-b border-gray-100 bg-white">
      {/* Logo text only */}
      <div className="text-2xl font-bold text-gray-900">
        Landguru
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>

        {/* Dropdowns replaced with buttons + text arrow */}
        <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
          Adversite <span className="ml-1">▼</span>
        </button>

        <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
          Supports <span className="ml-1">▼</span>
        </button>

        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
      </div>

      {/* "Try for Free" Button (Desktop only) */}
      <button className="hidden md:inline-block px-8 py-3 bg-white text-orange-400 font-semibold rounded-md shadow-sm hover:shadow-md transition-shadow border border-orange-200">
        Try for Free
      </button>

      {/* Hamburger for Mobile */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-white p-6 flex flex-col space-y-6 md:hidden">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>

          <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center" onClick={() => setMobileMenuOpen(false)}>
            Adversite <span className="ml-1">▼</span>
          </button>

          <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center" onClick={() => setMobileMenuOpen(false)}>
            Supports <span className="ml-1">▼</span>
          </button>

          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>

          <button className="px-8 py-3 bg-white text-orange-400 font-semibold rounded-md shadow-sm hover:shadow-md border border-orange-200" onClick={() => setMobileMenuOpen(false)}>
            Try for Free
          </button>
        </div>
      )}
    </nav>
  );
}
