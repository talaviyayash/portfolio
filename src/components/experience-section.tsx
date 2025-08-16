
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { motion } from "framer-motion"
import { Building, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-2xl border-l-4 border-l-primary bg-card hover:shadow-3xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <motion.h3 
                        className="text-2xl font-bold text-foreground mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        MERN Stack Developer
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center text-primary mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <Building className="h-5 w-5 mr-2" />
                        <span className="font-semibold text-lg">Tagline Infotech LLP</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Feb 2024 – Present</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Surat, Gujarat</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <Badge variant="secondary" className="self-start shadow-md">
                        1 year 6 months
                      </Badge>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      Working on modern web projects using the full MERN stack, developing robust and scalable applications 
                      that serve thousands of users across various industries.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Develop and maintain full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
                          "Design and implement RESTful APIs for seamless frontend-backend communication",
                          "Create responsive and intuitive user interfaces with modern React.js patterns",
                          "Collaborate with cross-functional teams to deliver high-quality software solutions"
                        ].map((responsibility, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.9 + index * 0.1 }}
                            />
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="pt-4 border-t border-border"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                    >
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'TypeScript', 'Git', 'REST APIs'].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.3 + index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="bg-primary/5 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
