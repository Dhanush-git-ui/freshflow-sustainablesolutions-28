import Navigation from "@/components/Navigation";
import { Building2, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      <section className="pt-20 pb-32 bg-black/40">
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

      <Footer />
    </div>
  );
};

export default About;