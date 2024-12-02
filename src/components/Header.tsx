import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-border">
      <div className="max-w-content mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-secondary">
              CommunityHub
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-secondary hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/community"
              className={`text-secondary hover:text-primary transition-colors ${
                location.pathname === "/community" ? "text-primary" : ""
              }`}
            >
              Community
            </Link>
            <Link
              to="/blog"
              className={`text-secondary hover:text-primary transition-colors ${
                location.pathname === "/blog" ? "text-primary" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className={`text-secondary hover:text-primary transition-colors ${
                location.pathname === "/pricing" ? "text-primary" : ""
              }`}
            >
              Pricing
            </Link>
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