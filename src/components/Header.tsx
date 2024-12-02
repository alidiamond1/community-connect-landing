import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              CommunityHub
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Community</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
              Register Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;