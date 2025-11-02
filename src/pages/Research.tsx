import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import researchImage from "@/assets/research-plants.jpg";
import specimensImage from "@/assets/specimens.jpg";

const Research = () => {
  const researchArticles = [
    {
      title: "Advanced Molecular Techniques in Plant Genomics",
      description: "Exploring cutting-edge CRISPR and gene editing technologies that are revolutionizing our understanding of plant genetics and enabling precision agriculture.",
      image: researchImage,
      link: "/research",
      category: "Genomics"
    },
    {
      title: "Climate Adaptation in Crop Species",
      description: "How plant scientists are developing drought-resistant and heat-tolerant varieties to ensure food security in changing climates.",
      image: specimensImage,
      link: "/research",
      category: "Climate Science"
    },
    {
      title: "Plant-Microbe Interactions",
      description: "Understanding the complex relationships between plants and their microbial partners for improved soil health and sustainable agriculture.",
      image: researchImage,
      link: "/research",
      category: "Microbiology"
    },
    {
      title: "Photosynthesis Efficiency Studies",
      description: "Research into optimizing photosynthetic pathways to increase crop yields and carbon capture capabilities.",
      image: specimensImage,
      link: "/research",
      category: "Physiology"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Research</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover the latest breakthroughs in plant biology research. Our community shares cutting-edge studies, methodologies, and findings that advance our understanding of plant science.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-border bg-card p-8">
          <h2 className="mb-4 text-2xl font-bold text-card-foreground">Submit Your Research</h2>
          <p className="mb-6 text-muted-foreground">
            Share your plant biology research with our global community. We welcome original research articles, reviews, and methodology papers.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            Submit Article
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Research;
