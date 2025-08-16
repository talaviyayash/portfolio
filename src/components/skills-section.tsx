
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { motion } from "framer-motion"
import { 
  Database, 
  Server, 
  Code, 
  Settings
} from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
      color: "text-blue-500"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware"],
      color: "text-green-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "Mongoose", "Database Design", "Query Optimization"],
      color: "text-purple-500"
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: ["Git", "GitHub", "Version Control", "NPM", "Deployment"],
      color: "text-orange-500"
    }
  ]

  const allSkills = [
    "MongoDB", "Express.js", "React.js", "Node.js", 
    "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Git", "REST APIs", "Responsive Design", "Authentication",
    "Database Design", "Version Control", "NPM"
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Specialized in the MERN stack with a focus on building modern, scalable web applications
          </p>
        </AnimateOnScroll>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <AnimateOnScroll 
                key={category.title} 
                delay={index * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 group h-full border-0">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="flex justify-center mb-4">
                        <motion.div 
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary/20 group-hover:shadow-xl transition-all duration-300 ${category.color}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-8 w-8" />
                        </motion.div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      
                      <div className="space-y-2 flex-grow">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + skillIndex * 0.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* All Skills Cloud */}
        <AnimateOnScroll delay={0.6}>
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Technical Proficiencies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="outline"
                      className="px-4 py-2 text-sm bg-primary/5 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
