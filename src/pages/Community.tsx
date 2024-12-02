import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, MessageSquare, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "Connect with Members",
      description: "Join groups and connect with like-minded individuals in your community"
    },
    {
      icon: MessageSquare,
      title: "Engage in Discussions",
      description: "Participate in meaningful conversations and share your expertise"
    },
    {
      icon: Heart,
      title: "Support Each Other",
      description: "Build lasting relationships and support fellow community members"
    },
    {
      icon: Share2,
      title: "Share Resources",
      description: "Exchange valuable resources and knowledge with the community"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-white py-20">
          <div className="max-w-content mx-auto px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Join Our Thriving Community
              </h1>
              <p className="text-xl text-secondary-light max-w-2xl mx-auto mb-8">
                Connect, collaborate, and grow with thousands of community members worldwide
              </p>
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
                Join Now
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-section">
          <div className="max-w-content mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {communityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-gray-light p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{feature.title}</h3>
                  <p className="text-secondary-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="bg-gray-light py-section">
          <div className="max-w-content mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-secondary-light">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-secondary-light">Daily Discussions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-secondary-light">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-secondary-light">Messages Sent</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;