import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Policies = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Our Policies</h1>
          
          <div className="bg-white/5 rounded-lg backdrop-blur-sm p-8">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="privacy">
                <AccordionTrigger className="text-xl font-semibold">Privacy Policy</AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-4">
                  <p>
                    At Freshneer, we take your privacy seriously. This policy describes how we collect,
                    use, and protect your personal information.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We only collect information necessary for order processing and delivery</li>
                    <li>Your data is encrypted and stored securely</li>
                    <li>We never share your information with third parties</li>
                    <li>You can request your data to be deleted at any time</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="terms">
                <AccordionTrigger className="text-xl font-semibold">Terms of Service</AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-4">
                  <p>
                    By using our services, you agree to these terms. Please read them carefully before
                    placing an order.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Orders are subject to availability and confirmation</li>
                    <li>Delivery times may vary based on location and demand</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Payment is required at the time of order</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="refund">
                <AccordionTrigger className="text-xl font-semibold">Refund Policy</AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-4">
                  <p>
                    We want you to be completely satisfied with your purchase. Here's what you need to
                    know about refunds:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Products can be returned within 24 hours of delivery</li>
                    <li>The product must be unopened and in original condition</li>
                    <li>Refunds will be processed within 5-7 business days</li>
                    <li>Shipping charges are non-refundable</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger className="text-xl font-semibold">Shipping Policy</AccordionTrigger>
                <AccordionContent className="text-gray-300 space-y-4">
                  <p>
                    We strive to deliver your orders as quickly as possible. Here are our shipping
                    details:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Same-day delivery for orders placed before 2 PM</li>
                    <li>Free delivery within city limits</li>
                    <li>Additional charges may apply for remote areas</li>
                    <li>Track your order through our website or mobile app</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Policies;