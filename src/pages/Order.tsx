import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { createOrder } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

const Order = () => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState("1");
  const [size, setSize] = useState("1L");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const orderMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast({
        title: "Order Submitted Successfully",
        description: "We'll contact you shortly to confirm your order.",
      });
      // Reset form
      setQuantity("1");
      setSize("1L");
      setAddress("");
      setPhone("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error submitting your order. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      size,
      quantity: parseInt(quantity),
      delivery_address: address,
      phone,
      total_amount: calculateTotal(size, parseInt(quantity)),
    };
    orderMutation.mutate(orderData);
  };

  const calculateTotal = (size: string, qty: number) => {
    const prices = {
      "1L": 20,
      "500ml": 10,
      "200ml": 5,
    };
    return prices[size as keyof typeof prices] * qty;
  };

  return (
    <div className="min-h-screen bg-[#221F26] text-white py-20">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Place Your Order</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <div className="space-y-2">
            <label className="text-sm font-medium">Bottle Size</label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger className="bg-white/10 border-white/20">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1L">1L - ₹20</SelectItem>
                <SelectItem value="500ml">500ml - ₹10</SelectItem>
                <SelectItem value="200ml">200ml - ₹5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Quantity</label>
            <Select value={quantity} onValueChange={setQuantity}>
              <SelectTrigger className="bg-white/10 border-white/20">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 5, 10, 20, 50].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "bottle" : "bottles"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Delivery Address</label>
            <Input 
              className="bg-white/10 border-white/20" 
              placeholder="Enter your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Contact Number</label>
            <Input 
              className="bg-white/10 border-white/20" 
              type="tel" 
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-lg font-semibold">
              Total: ₹{calculateTotal(size, parseInt(quantity))}
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={orderMutation.isPending}
          >
            {orderMutation.isPending ? "Placing Order..." : "Place Order"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Order;