import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Up to 100 members",
        "Basic analytics",
        "Community forums",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "$49",
      description: "Best for growing communities",
      features: [
        "Up to 1,000 members",
        "Advanced analytics",
        "Custom branding",
        "Priority support",
        "API access",
        "Multiple admins"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited members",
        "Enterprise analytics",
        "Custom integrations",
        "24/7 support",
        "Dedicated success manager",
        "SLA guarantee"
      ]
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-secondary-light max-w-2xl mx-auto">
                Choose the perfect plan for your community needs
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-section">
          <div className="max-w-content mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-lg p-8 ${
                    plan.popular
                      ? "border-2 border-primary shadow-lg"
                      : "border border-gray-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price}
                      {plan.price !== "Custom" && <span className="text-lg">/month</span>}
                    </div>
                    <p className="text-secondary-light">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-secondary-light">
                        <Check className="w-5 h-5 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary-dark"
                        : "bg-secondary hover:bg-secondary-dark"
                    } text-white`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-light py-section">
          <div className="max-w-content mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Can I upgrade or downgrade my plan?
                </h3>
                <p className="text-secondary-light">
                  Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-secondary-light">
                  We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;