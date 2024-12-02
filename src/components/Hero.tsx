import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Thriving Communities{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Empower your community with powerful tools, insights, and engagement
              features. Start building meaningful connections today.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://picsum.photos/600/400"
              alt="Community Management"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;