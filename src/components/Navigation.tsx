import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/"
              className="text-2xl font-bold text-primary hover:scale-105 transition-transform"
            >
              Freshneer
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <Link
              to="/distributorship"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Distributorship
            </Link>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <Link
              to="/policies"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Policies
            </Link>
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
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            >
              Home
            </button>
            <Link
              to="/distributorship"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            >
              Distributorship
            </Link>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            >
              About
            </button>
            <Link
              to="/policies"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            >
              Policies
            </Link>
            <Link
              to="/order"
              className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
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