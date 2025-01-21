import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Building2, CheckCircle2, DollarSign, Users } from "lucide-react";
import Footer from "@/components/Footer";

const Distributorship = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Become a Distributor</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join Freshneer's growing network of distributors and be part of our success story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4">Why Choose Freshneer?</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Building2 className="w-6 h-6 text-primary" />,
                      title: "Established Brand",
                      description: "Partner with a trusted name in water purification"
                    },
                    {
                      icon: <Users className="w-6 h-6 text-primary" />,
                      title: "Growing Market",
                      description: "Tap into increasing demand for pure water"
                    },
                    {
                      icon: <DollarSign className="w-6 h-6 text-primary" />,
                      title: "High Margins",
                      description: "Competitive pricing and attractive profit margins"
                    },
                    {
                      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                      title: "Full Support",
                      description: "Training, marketing, and operational support"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      {benefit.icon}
                      <div>
                        <h3 className="font-semibold">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4">Investment Details</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Initial investment: ₹5-10 Lakhs</li>
                  <li>• Space requirement: 500-1000 sq ft</li>
                  <li>• ROI period: 12-18 months</li>
                  <li>• Territory protection guaranteed</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Full Name"
                  className="bg-white/10 border-white/20"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white/10 border-white/20"
                />
                <Input
                  placeholder="City"
                  className="bg-white/10 border-white/20"
                />
                <Input
                  placeholder="Investment Capacity"
                  className="bg-white/10 border-white/20"
                />
                <Textarea
                  placeholder="Tell us about your business experience"
                  className="bg-white/10 border-white/20 min-h-[100px]"
                />
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Distributorship;