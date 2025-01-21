import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/"
              className="hover:opacity-90 transition-opacity"
            >
              <img 
                src="/lovable-uploads/98910343-c93b-41c3-9149-194ecee8927e.png" 
                alt="Freshneer Logo" 
                className="h-16 w-auto" // Increased from h-12 to h-16
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/manufacturing"
              className="text-white hover:text-primary transition-colors"
            >
              Manufacturing
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/distributorship"
              className="text-white hover:text-primary transition-colors"
            >
              Distributorship
            </Link>
            <Link
              to="/policies"
              className="text-white hover:text-primary transition-colors"
            >
              Policies
            </Link>
            <a
              href="https://freshneer.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              Enquiry
            </a>
            <Link
              to="/order"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Order Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/manufacturing"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Manufacturing
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/distributorship"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Distributorship
            </Link>
            <Link
              to="/policies"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Policies
            </Link>
            <a
              href="https://freshneer.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-white hover:text-primary hover:bg-white/5 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Enquiry
            </a>
            <Link
              to="/order"
              className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;