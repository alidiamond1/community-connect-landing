import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Lessons and insights
              <span className="text-[#4CAF50] block">from 8 years</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Want to grow your business as a photographer info or social media?
            </p>
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
              Register
            </Button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://picsum.photos/600/400"
              alt="Community Management"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;