import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <News />
        <Research />
        <Publications />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
