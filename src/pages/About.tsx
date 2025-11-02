import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Our Mission",
      description: "To advance plant biology through collaborative research, education, and community engagement that addresses global challenges."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Our Vision",
      description: "A world where plant science drives sustainable solutions for food security, climate change, and environmental health."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Our Community",
      description: "Thousands of researchers, educators, and students collaborating to push the boundaries of plant science."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Our Impact",
      description: "Global reach with local impact, connecting plant scientists and advancing research worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">About Plantae</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Plantae is the premier online community for plant scientists, bringing together researchers, educators, and students from around the world to share knowledge, collaborate, and advance the field of plant biology.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-8">
                <div className="mb-4">{value.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Our Story</h2>
          <div className="rounded-lg border border-border bg-card p-8">
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Founded by the American Society of Plant Biologists, Plantae has grown into the largest online community dedicated to plant science. We provide a platform where plant scientists can share their research, discuss new discoveries, and connect with colleagues worldwide.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Through our webinars, articles, discussion forums, and networking opportunities, we facilitate collaboration and knowledge sharing that drives innovation in plant biology. Our community spans academia, industry, and government, united by a shared passion for understanding and utilizing plant science.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to supporting early-career scientists, promoting diversity and inclusion, and addressing the pressing challenges facing our planet through plant science research and education.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="mb-4 mx-auto h-24 w-24 rounded-full bg-secondary"></div>
                <h3 className="mb-1 text-lg font-semibold text-card-foreground">Dr. Jane Smith</h3>
                <p className="text-sm text-muted-foreground mb-2">Executive Director</p>
                <p className="text-xs text-muted-foreground">
                  Leading our mission to advance plant science globally
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-secondary p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">Join Our Community</h2>
          <p className="mb-6 text-secondary-foreground/80 max-w-2xl mx-auto">
            Become part of the world's largest plant science community. Connect with colleagues, share your research, and stay informed about the latest developments in plant biology.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            Become a Member
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
