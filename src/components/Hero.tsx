import heroImage from "@/assets/hero-lab.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Plant Biology Research"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay))] to-transparent opacity-80"></div>
      </div>
      
      <div className="container relative mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight">
            Advancing Plant Science Through Research and Education
          </h1>
          <p className="mb-8 text-lg opacity-90">
            Join our community of researchers, educators, and students dedicated to understanding plant biology and creating sustainable solutions for our planet's future.
          </p>
          <div className="flex gap-4">
            <Link to="/research">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Research
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
