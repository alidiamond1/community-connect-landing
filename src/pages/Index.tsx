import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;