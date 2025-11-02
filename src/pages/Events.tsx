import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "How to Build a Productive Lab",
      date: "November 21, 2024",
      time: "2:30 PM Eastern",
      type: "Webinar",
      location: "Online",
      description: "Join us for an engaging webinar to explore strategies for boosting lab productivity through efficient lab management at three levels."
    },
    {
      title: "Women in Plant Biology Symposium",
      date: "December 5, 2024",
      time: "9:00 AM - 5:00 PM EST",
      type: "Conference",
      location: "Virtual",
      description: "Celebrating achievements and addressing challenges faced by women in plant science careers."
    },
    {
      title: "Plant Genomics Workshop",
      date: "December 15, 2024",
      time: "10:00 AM - 4:00 PM PST",
      type: "Workshop",
      location: "UC Davis",
      description: "Hands-on training in modern plant genomics techniques and data analysis methods."
    },
    {
      title: "Climate Change and Agriculture Panel",
      date: "January 10, 2025",
      time: "1:00 PM EST",
      type: "Panel Discussion",
      location: "Online",
      description: "Expert discussion on adapting agricultural practices to climate change challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Events & Webinars</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Join our community for webinars, conferences, and workshops featuring leading plant scientists, career development sessions, and the latest research discussions.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md">
                <div className="mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {event.type}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{event.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{event.description}</p>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {event.location === "Online" || event.location === "Virtual" ? (
                      <Video className="h-4 w-4 text-primary" />
                    ) : (
                      <MapPin className="h-4 w-4 text-primary" />
                    )}
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">Past Webinar Library</h2>
          <p className="mb-6 text-secondary-foreground/80">
            Access our complete library of recorded webinars covering topics from research methodologies to career development and industry trends.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            Browse Library
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
