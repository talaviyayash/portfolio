import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Vasana.ai",
      description:
        "Contributed to an AI-driven wellness platform leveraging advanced analytics to promote mental well-being and lifestyle improvement through data-driven insights.",
      technologies: ["React.js", "E-chart", "MUI"],
      liveUrl: "http://vasana.ai/",
      category: "AI & Wellness",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "WebAll.ai",
      description:
        "Developed features for an AI-powered communication platform automating call answering and SMS follow-up with real-time transcription, intelligent responses, and secure data handling.",
      technologies: ["Next.js", "MUI"],
      liveUrl: "https://weball.ai/",
      category: "AI Communication",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "TheLipSync.com",
      description:
        "Built and optimized AI-powered multimedia tools including lip-synced avatar videos, text-to-image generation, face swapping, and photo-to-sketch transformation.",
      technologies: ["Next.js", "SEO"],
      liveUrl: "https://thelipsync.com/",
      category: "AI Media Tools",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "app.flexsy.nl",
      description:
        "Contributed to an intuitive workforce management platform for streamlined scheduling, availability planning, and real-time shift updates.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      liveUrl: "https://app.flexsy.nl/",
      category: "Workforce Management",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "animalsaadhaar.com",
      description:
        "Worked on India's digital livestock identification system, digitizing animal records for improved traceability and disease prevention.",
      technologies: ["React.js", "Express.js", "MongoDB"],
      liveUrl: "https://animalsaadhaar.com",
      category: "Government Tech",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "ampartists.live",
      description:
        "Developed features for a music booking platform simplifying artist discovery and event booking workflows.",
      technologies: ["React.js", "Node.js"],
      liveUrl: "https://ampartists.live/",
      category: "Entertainment",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of innovative web applications I've contributed to,
            spanning AI, business solutions, and digital platforms
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.title}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 bg-card/80 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />

                    <motion.div
                      className="absolute top-4 right-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {project.category}
                        </Badge>
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + techIndex * 0.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-muted/50 border-muted text-muted-foreground"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </motion.div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <motion.div
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full group/btn shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        View Live Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimateOnScroll delay={0.8} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="max-w-2xl mx-auto shadow-2xl bg-gradient-to-r from-primary to-accent border-0">
              <CardContent className="p-8 text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Github className="h-12 w-12 text-white mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Explore More on GitHub
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Check out my repositories and contributions to open source
                  projects
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                    onClick={() =>
                      window.open("https://github.com/talaviyayash", "_blank")
                    }
                  >
                    Visit GitHub Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
