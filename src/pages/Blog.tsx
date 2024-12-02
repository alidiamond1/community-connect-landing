import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Tips for Building a Strong Community",
      excerpt: "Learn the essential strategies for creating and maintaining an engaged community...",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Community Building",
      image: "https://picsum.photos/seed/post1/800/600"
    },
    {
      title: "The Future of Online Communities",
      excerpt: "Discover emerging trends and technologies shaping the future of digital communities...",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Trends",
      image: "https://picsum.photos/seed/post2/800/600"
    },
    {
      title: "Community Management Best Practices",
      excerpt: "Expert insights on effectively managing and growing your online community...",
      author: "Emily Wilson",
      date: "March 10, 2024",
      category: "Management",
      image: "https://picsum.photos/seed/post3/800/600"
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
                Community Insights
              </h1>
              <p className="text-xl text-secondary-light max-w-2xl mx-auto">
                Latest updates, guides, and insights about community management
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-section">
          <div className="max-w-content mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-secondary-light mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                      <User className="w-4 h-4 ml-4 mr-2" />
                      {post.author}
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-secondary hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-secondary-light mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-sm text-primary">{post.category}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;