const Footer = () => {
  return (
    <footer className="bg-gray-light py-section">
      <div className="max-w-content mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">CommunityHub</h3>
            <p className="text-secondary-light">
              Building better communities together.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-border mt-12 pt-8 text-center text-secondary-light">
          <p>&copy; 2024 CommunityHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;