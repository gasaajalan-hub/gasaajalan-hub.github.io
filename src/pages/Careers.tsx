import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react";

const Careers = () => {
  const resources = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Job Board",
      description: "Find positions in academia, industry, and government laboratories worldwide."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Career Development",
      description: "Access webinars, workshops, and mentorship programs for professional growth."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Networking",
      description: "Connect with professionals and build relationships across the plant science community."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Skill Building",
      description: "Learn new techniques, software, and methodologies to advance your career."
    }
  ];

  const jobListings = [
    {
      title: "Postdoctoral Researcher - Plant Genetics",
      location: "University of California, Berkeley",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      title: "Research Scientist - Crop Breeding",
      location: "Bayer CropScience",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      title: "Assistant Professor - Plant Physiology",
      location: "Cornell University",
      type: "Tenure-track",
      posted: "2 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Career Development</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Advance your career in plant biology with resources, opportunities, and connections that help you succeed at every stage of your professional journey.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">{resource.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Featured Opportunities</h2>
          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">{job.title}</h3>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {job.type}
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">{job.posted}</p>
                  </div>
                </div>
                <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">Post a Position</h2>
          <p className="mb-6 text-secondary-foreground/80">
            Reach thousands of qualified plant scientists by posting your job openings on our platform.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            Post a Job
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
