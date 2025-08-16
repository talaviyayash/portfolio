import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashtalaviya654@gmail.com",
      href: "mailto:yashtalaviya654@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/talaviyayash",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://in.linkedin.com/in/yash-talaviya-265633224?trk=public_profile_samename-profile",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:yashtalaviya654@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Ready to collaborate on your next project? Let's discuss how we can
            bring your ideas to life.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Form */}
          {/* <Card className="shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your Name"
                      required 
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your.email@example.com"
                      required 
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="Project Discussion"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required 
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Contact Info */}
          <div className="gap-4 flex flex-row flex-wrap justify-center">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={info.label}
                        className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground hover:text-primary transition-smooth"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Connect with me
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-smooth hover:bg-primary hover:text-primary-foreground hover:scale-110`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently available for:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
                    >
                      Full-time Opportunities
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300"
                    >
                      Freelance Projects
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
