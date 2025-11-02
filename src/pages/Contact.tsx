import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Have questions or suggestions? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="mb-6 text-2xl font-bold text-card-foreground">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-card-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-card-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-card-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-card-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">info@plantae.org</p>
              <p className="text-sm text-muted-foreground">support@plantae.org</p>
            </div>
            
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9AM-5PM EST</p>
            </div>
            
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Office</h3>
              <p className="text-sm text-muted-foreground">
                123 Science Drive<br />
                Research Park<br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>

        <section className="rounded-lg bg-secondary p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground">Frequently Asked Questions</h2>
          <p className="mb-6 text-secondary-foreground/80">
            Find answers to common questions about membership, submissions, and our services.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            View FAQ
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
