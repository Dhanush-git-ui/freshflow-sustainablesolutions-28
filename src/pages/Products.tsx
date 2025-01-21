import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      {/* Products Section */}
      <section className="pt-20 pb-32 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: "/lovable-uploads/3071e718-34c5-4dcb-ba6d-cf335414e921.png", size: "1L", price: "₹20" },
              { image: "/lovable-uploads/ed8641de-c186-4083-9006-46534e29e81b.png", size: "500ml", price: "₹10" },
              { image: "/lovable-uploads/c81c96e5-c6ab-47ae-96c4-87066204c1a5.png", size: "200ml", price: "₹5" },
            ].map((product) => (
              <div key={product.size} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-xl">
                <img src={product.image} alt={`${product.size} bottle`} className="w-32 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-2">{product.size} Bottle</h3>
                <p className="text-primary text-lg mb-4">{product.price}</p>
                <Link to="/order">
                  <Button className="w-full group">
                    Order Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;