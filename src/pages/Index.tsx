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
  Plus,
  Filter,
  Zap,
  RefreshCw,
  FlaskConical,
  CheckCircle2,
  PackageCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 relative overflow-hidden">
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
      <section id="products" className="py-20 bg-black/40">
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

      {/* Services/Manufacturing Process Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Process</h2>
          <p className="text-center text-primary mb-12 text-lg">"Untouched water from 800ft to Bottle with complete automated process"</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Filter className="w-8 h-8" />,
                title: "Decontamination",
                description: "Initial purification process"
              },
              {
                icon: <FlaskConical className="w-8 h-8" />,
                title: "Mineral Water Plant",
                description: "Interaction with essential minerals"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Sand & Carbon Filtration",
                description: "Advanced filtration system"
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Reverse Osmosis",
                description: "Pure water extraction"
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Mineralization",
                description: "Adding beneficial minerals"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "UV Light Treatment",
                description: "Sterilization process"
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: "Ozonation",
                description: "Final purification step"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Quality Check",
                description: "Rigorous testing"
              },
              {
                icon: <PackageCheck className="w-8 h-8" />,
                title: "Packaging & Labelling",
                description: "Safe bottling process"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Principal of 4R</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Reduce",
                    description: "Using standard OEM equipment to reduce water wastage"
                  },
                  {
                    title: "Reuse",
                    description: "Reprocess bottle cleaning discharge water"
                  },
                  {
                    title: "Recycle",
                    description: "98% Recyclable PET water bottle"
                  },
                  {
                    title: "Recover",
                    description: "Use reject stream for gardening and cleaning"
                  }
                ].map((principle, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-primary font-semibold mb-2">{principle.title}</h4>
                    <p className="text-sm text-gray-400">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Environmental & Social Responsibility</h3>
              <p className="text-gray-300">
                Freshneer Foods and Services Pvt. Ltd. has implemented various policies to promote social, environmental
                and sustainable practices. These include hiring and paying fair wages to local workers, supporting
                sustainable environmental practices, sponsoring and volunteering at social events, donating products to
                NGOs and charities, educating locals about water conservation and promoting the benefits of clean water.
                Additionally, the organization also focuses on promoting a clean and green India through initiatives such as
                tree plantation and revenue donations to the Indian army under IAW schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/40">
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
