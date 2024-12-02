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
    <section className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Manage your entire community
            <span className="block">in a single system</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Who is Nexcent suitable for?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <feature.icon
                className="w-16 h-16 text-[#4CAF50] mx-auto mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;