import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Droplets, 
  CheckCircle, 
  Phone, 
  Clock, 
  ArrowRight,
  Recycle,
  Shield,
  CreditCard,
  Truck,
  RotateCcw,
  Award,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pure Water, <span className="text-primary">Pure Life</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Untouched water from 800ft to Bottle with complete automated process
            </p>
            <Link to="/order">
              <Button size="lg" className="animate-pulse">
                Order Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: "/lovable-uploads/3071e718-34c5-4dcb-ba6d-cf335414e921.png", size: "1L", price: "₹20" },
              { image: "/lovable-uploads/ed8641de-c186-4083-9006-46534e29e81b.png", size: "500ml", price: "₹10" },
              { image: "/lovable-uploads/c81c96e5-c6ab-47ae-96c4-87066204c1a5.png", size: "200ml", price: "₹5" },
            ].map((product) => (
              <div key={product.size} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all">
                <img src={product.image} alt={`${product.size} bottle`} className="w-32 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.size} Bottle</h3>
                <p className="text-primary text-lg mb-4">{product.price}</p>
                <Link to="/order">
                  <Button className="w-full">Order Now</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Process</h2>
          <img 
            src="/lovable-uploads/5a8fb3dc-0152-43e8-b95d-fba24518c8cb.png" 
            alt="Manufacturing Process" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Freshneer?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="text-primary" />, title: "Supreme Quality" },
              { icon: <CreditCard className="text-primary" />, title: "Best Pricing" },
              { icon: <Phone className="text-primary" />, title: "On Call Order" },
              { icon: <Award className="text-primary" />, title: "Referral Rewards" },
              { icon: <Truck className="text-primary" />, title: "24 HRS Delivery" },
              { icon: <RotateCcw className="text-primary" />, title: "Return Policy" },
              { icon: <CheckCircle className="text-primary" />, title: "Product Warranty" },
              { icon: <Plus className="text-primary" />, title: "25+ Additional Services" },
            ].map((feature) => (
              <div key={feature.title} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="mb-3">{feature.icon}</div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4R Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our 4R Principles</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Reduce", description: "Using standard OEM equipment to reduce water wastage" },
              { title: "Reuse", description: "Reprocess bottle cleaning discharge water" },
              { title: "Recycle", description: "98% Recyclable PET water bottle" },
              { title: "Recover", description: "Use reject stream for gardening and cleaning" },
            ].map((principle) => (
              <div key={principle.title} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <Recycle className="text-primary mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Clock className="text-primary" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-300">24/7 Service Available</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                <div>
                  <h3 className="font-semibold">Contact</h3>
                  <p className="text-gray-300">freshneer@outlook.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-white/10 border-white/20" />
              <Input placeholder="Your Email" type="email" className="bg-white/10 border-white/20" />
              <Input placeholder="Your Phone" type="tel" className="bg-white/10 border-white/20" />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
              />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;