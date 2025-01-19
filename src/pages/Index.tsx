import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Droplets, 
  Phone, 
  Mail,
  Building2,
  FileText,
  ArrowRight,
  Recycle,
  Shield,
  CreditCard,
  Truck,
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse" />
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

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Process</h2>
          <div className="relative group">
            <img 
              src="/lovable-uploads/5a8fb3dc-0152-43e8-b95d-fba24518c8cb.png" 
              alt="Manufacturing Process" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl transition-transform group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Corporate Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all group">
              <Building2 className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Company Details</h3>
              <p className="text-gray-300">CIN: U11040GJ2023PTC145721</p>
              <p className="text-gray-300">GST: 24AAFCF6785R1ZR</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all group">
              <Phone className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Contact Numbers</h3>
              <p className="text-gray-300">+91 8140804662</p>
              <p className="text-gray-300">+91 9601884545</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all group">
              <Mail className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">freshneer@outlook.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Freshneer?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="text-primary" />, title: "Supreme Quality" },
              { icon: <CreditCard className="text-primary" />, title: "Secure UPI Payments" },
              { icon: <Phone className="text-primary" />, title: "24/7 Support" },
              { icon: <Award className="text-primary" />, title: "Industry Leading" },
              { icon: <Truck className="text-primary" />, title: "Quick Delivery" },
              { icon: <FileText className="text-primary" />, title: "Easy Orders" },
              { icon: <Recycle className="text-primary" />, title: "Sustainable" },
              { icon: <Plus className="text-primary" />, title: "Bulk Supply" },
            ].map((feature) => (
              <div 
                key={feature.title} 
                className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-colors">
                <Building2 className="text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">Head Office</h3>
                  <p className="text-gray-300">Ahmedabad, Gujarat</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-colors">
                <Phone className="text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-300">+91 8140804662</p>
                  <p className="text-gray-300">+91 9601884545</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-colors">
                <Mail className="text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-300">freshneer@outlook.com</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-white/10 border-white/20 focus:border-primary transition-colors" />
              <Input placeholder="Your Email" type="email" className="bg-white/10 border-white/20 focus:border-primary transition-colors" />
              <Input placeholder="Your Phone" type="tel" className="bg-white/10 border-white/20 focus:border-primary transition-colors" />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white transition-colors"
              />
              <Button className="w-full group">
                Send Message
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;