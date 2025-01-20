import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-primary hover:scale-105 transition-transform cursor-pointer"
            >
              Freshneer
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              ["Home", "home"],
              ["Products", "products"],
              ["Services", "services"],
              ["About", "about"],
              ["Contact", "contact"]
            ].map(([label, id]) => (
              <button
                key={label}
                onClick={() => scrollToSection(id)}
                className="text-gray-700 hover:text-primary transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
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
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {[
              ["Home", "home"],
              ["Products", "products"],
              ["Services", "services"],
              ["About", "about"],
              ["Contact", "contact"]
            ].map(([label, id]) => (
              <button
                key={label}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all rounded-md"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;