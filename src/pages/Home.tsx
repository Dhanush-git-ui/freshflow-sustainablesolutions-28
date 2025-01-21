import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/lovable-uploads/5a8fb3dc-0152-43e8-b95d-fba24518c8cb.png')] bg-cover bg-center bg-no-repeat"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Pure Water, <span className="text-primary animate-float">Pure Life</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-100">
              Founded in October 2023, Freshneer Foods and Services Pvt. Ltd. is Ahmedabad's leading provider of high-quality packaged drinking water solutions.
            </p>
            <Link to="/order">
              <Button size="lg" className="group">
                Order Now 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;