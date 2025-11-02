import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Globe, Award } from "lucide-react";

const EDI = () => {
  const initiatives = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Inclusive Community",
      description: "Building a welcoming environment where all plant scientists can thrive, regardless of background or identity."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Mentorship Programs",
      description: "Connecting underrepresented scientists with experienced mentors for career guidance and support."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Perspectives",
      description: "Amplifying voices from diverse geographic regions and promoting international collaboration."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Recognition & Support",
      description: "Celebrating achievements and providing resources to support diverse scientists in plant biology."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Equity, Diversity & Inclusion
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            We are committed to fostering an inclusive plant science community that values diverse perspectives, promotes equitable opportunities, and creates a welcoming environment for all.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4">{initiative.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{initiative.title}</h3>
                <p className="text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Featured Stories</h2>
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
              Women in Plant Biology Interview Series
            </h3>
            <p className="mb-4 text-muted-foreground">
              Read in-depth interviews with women plant biologists from different career stages, backgrounds, and identities. Learn about their research journeys, challenges overcome, and advice for the next generation.
            </p>
            <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
              Read Interviews
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Resources</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">EDI Best Practices Guide</h3>
              <p className="text-sm text-muted-foreground">
                Practical guidelines for creating inclusive research environments and promoting equity in plant science.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Funding Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Scholarships, grants, and awards specifically supporting underrepresented groups in plant biology.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Community Networks</h3>
              <p className="text-sm text-muted-foreground">
                Connect with affinity groups and professional networks for diverse plant scientists.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-secondary p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">Get Involved</h2>
          <p className="mb-6 text-secondary-foreground/80 max-w-2xl mx-auto">
            Join our EDI initiatives and help create a more inclusive plant science community. Share your story, mentor others, or participate in our programs.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            Learn More
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EDI;
