import { Users, MessageSquare, BarChart, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Member Management",
    description:
      "Easily manage your community members with powerful tools and insights.",
  },
  {
    icon: MessageSquare,
    title: "Engagement Tools",
    description:
      "Foster meaningful discussions and keep your community engaged.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description:
      "Make data-driven decisions with comprehensive community analytics.",
  },
  {
    icon: Shield,
    title: "Moderation Tools",
    description:
      "Keep your community safe with advanced moderation features.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-primary">Grow Your Community</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you build, manage, and grow your community
            effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon
                className="w-12 h-12 text-primary mb-4"
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