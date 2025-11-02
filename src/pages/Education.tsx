import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import gardenImage from "@/assets/garden.jpg";
import specimensImage from "@/assets/specimens.jpg";
import { BookOpen, Microscope, Video, FileText } from "lucide-react";

const Education = () => {
  const resources = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Teaching Materials",
      description: "Curricula, lesson plans, and activities for K-12 and university-level plant science education."
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Laboratory Protocols",
      description: "Detailed protocols and guides for plant biology experiments and research techniques."
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Video Tutorials",
      description: "Visual guides and demonstrations of laboratory techniques and plant science concepts."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Research Papers",
      description: "Access to peer-reviewed publications and educational articles in plant biology."
    }
  ];

  const educationArticles = [
    {
      title: "Rooted in Knowledge: Plant Science Shapes Understanding",
      description: "Explore how plant science education transforms our understanding of ecosystems, agriculture, and sustainability.",
      image: gardenImage,
      link: "/education",
      category: "Pedagogy"
    },
    {
      title: "Interactive Learning in Plant Biology",
      description: "Innovative teaching methods that engage students in hands-on plant science exploration.",
      image: specimensImage,
      link: "/education",
      category: "Teaching Methods"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Education Resources</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive educational materials and resources for teaching and learning plant biology at all levels, from K-12 to graduate education and beyond.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:shadow-md">
                <div className="mb-4 flex justify-center">{resource.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
                <button className="mt-4 text-sm font-medium text-primary hover:underline">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Educational Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">For Educators</h2>
            <p className="mb-6 text-muted-foreground">
              Access our curated collection of teaching materials, connect with fellow educators, and share your own resources with the community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                Browse Materials
              </button>
              <button className="rounded-md border border-primary px-6 py-3 text-primary hover:bg-primary/10 transition-colors font-medium">
                Join Educator Network
              </button>
              <button className="rounded-md border border-primary px-6 py-3 text-primary hover:bg-primary/10 transition-colors font-medium">
                Submit Resources
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">Student Corner</h2>
          <p className="mb-6 text-secondary-foreground/80">
            Resources designed specifically for students exploring plant biology, from introductory concepts to advanced research topics.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            Student Resources
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
