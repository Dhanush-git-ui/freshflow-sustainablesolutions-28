import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CreditCard, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/98910343-c93b-41c3-9149-194ecee8927e.png" 
              alt="Freshneer Logo" 
              className="h-8 mb-4"
            />
            <p className="text-gray-300">
              Pure water, delivered fresh to your doorstep. Quality and service you can trust.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/distributorship" className="text-gray-300 hover:text-primary transition-colors">Distributorship</Link></li>
              <li><Link to="/policies" className="text-gray-300 hover:text-primary transition-colors">Policies</Link></li>
              <li><Link to="/order" className="text-gray-300 hover:text-primary transition-colors">Order Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/freshneer" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/freshneer" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/freshneer" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/freshneer" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Payment Options</h3>
            <Button variant="outline" className="w-full mb-2 bg-white/5 border-white/20 hover:bg-white/10">
              <CreditCard className="mr-2 h-4 w-4" />
              Pay Now
            </Button>
            <p className="text-sm text-gray-400">Secure payment processing</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Freshneer Foods and Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;