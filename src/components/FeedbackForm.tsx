import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { Star } from "lucide-react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback!",
    });
  };

  return (
    <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-6">Share Your Feedback</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoveredRating || rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-400"
                } transition-colors`}
              />
            </button>
          ))}
        </div>
        
        <Input
          placeholder="Your Name"
          className="bg-white/10 border-white/20"
        />
        
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-white/10 border-white/20"
        />
        
        <Textarea
          placeholder="Your Feedback"
          className="bg-white/10 border-white/20 min-h-[100px]"
        />
        
        <Button type="submit" className="w-full">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;