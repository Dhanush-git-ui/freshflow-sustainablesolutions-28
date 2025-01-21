import Navigation from "@/components/Navigation";
import { Filter, FlaskConical, Zap, RefreshCw, Droplets, Shield, Recycle, CheckCircle2, PackageCheck } from "lucide-react";
import Footer from "@/components/Footer";

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      <section className="pt-20 pb-32">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;