import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Phone, Mail, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      <section className="pt-20 pb-32">
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

      <Footer />
    </div>
  );
};

export default Contact;