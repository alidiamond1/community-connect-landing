import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-border">
      <div className="max-w-content mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-secondary">
              CommunityHub
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-secondary hover:text-primary transition-colors">Home</a>
            <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Community</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Pricing</a>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Register Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;