import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-light">
      <div className="max-w-content mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-secondary">
              Lessons and insights
              <span className="text-primary block mt-2">from 8 years</span>
            </h1>
            <p className="text-lg text-secondary-light mb-8 max-w-lg">
              Want to grow your business as a photographer info or social media?
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Register Now
            </Button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://picsum.photos/600/400"
              alt="Community Management"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;