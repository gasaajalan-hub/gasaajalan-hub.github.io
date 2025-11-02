import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import researchImage from "@/assets/research-plants.jpg";
import specimensImage from "@/assets/specimens.jpg";
import gardenImage from "@/assets/garden.jpg";

const Index = () => {
  const featuredArticles = [
    {
      title: "Balancing Teaching and Research Careers",
      description: "Insights and strategies for early-career plant scientists navigating the dual responsibilities of teaching and conducting research in academic settings.",
      image: researchImage,
      link: "/research",
      category: "Career Development"
    },
    {
      title: "Staying Sane in the Lab: Mental Health Strategies",
      description: "Practical tips and resources for maintaining mental wellness while pursuing plant biology research in demanding laboratory environments.",
      image: specimensImage,
      link: "/research",
      category: "Wellness"
    },
    {
      title: "Rooted in Knowledge: Plant Science Education",
      description: "How plant science shapes our understanding of ecosystems, agriculture, and climate change through innovative educational approaches.",
      image: gardenImage,
      link: "/education",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section>
          <h2 className="mb-8 text-3xl font-bold text-foreground">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-lg bg-secondary p-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary-foreground">
              Join Our Community
            </h2>
            <p className="mb-6 text-secondary-foreground/80 max-w-2xl mx-auto">
              Connect with plant scientists, educators, and students from around the world. Share your research, discover opportunities, and stay informed about the latest developments in plant biology.
            </p>
            <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
