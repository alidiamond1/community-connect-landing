import { Users, Building2, Users2 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Membership Organizations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Building2,
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Users2,
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Features = () => {
  return (
    <section className="py-section bg-white" id="features">
      <div className="max-w-content mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
            Manage your entire community
            <span className="block mt-2">in a single system</span>
          </h2>
          <p className="text-secondary-light mt-4">
            Who is Nexcent suitable for?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-light p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300"
            >
              <feature.icon
                className="w-16 h-16 text-primary mx-auto mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-4 text-secondary">{feature.title}</h3>
              <p className="text-secondary-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;