import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pure Water, <span className="text-primary">Pure Life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Delivering pure, refreshing, and high-quality packaged drinking water to enhance your well-being.
            </p>
            <div className="animate-float">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full animate-ripple" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Bottled Water", description: "Pure drinking water in convenient bottles" },
              { title: "Bulk Supply", description: "Large volume water supply for businesses" },
              { title: "Custom Solutions", description: "Tailored water solutions for events" },
            ].map((product) => (
              <div key={product.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-accent rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Corporate Supply</h3>
              <p className="text-gray-600">Reliable water supply solutions for offices and businesses</p>
            </div>
            <div className="p-6 bg-accent rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Event Services</h3>
              <p className="text-gray-600">Custom water solutions for events and gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Freshneer</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Founded in October 2023, Freshneer Foods and Services Pvt. Ltd. is committed to providing pure,
              refreshing, and high-quality packaged drinking water to consumers in Ahmedabad, Gujarat.
            </p>
            <p className="text-gray-600">
              Our mission is to make a positive impact on the health and well-being of our customers while
              promoting sustainability and environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" />
                <span>freshneer@outlook.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" />
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;