
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { motion } from "framer-motion"
import profilePlaceholder from "@/assets/profile-placeholder.jpg"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimateOnScroll direction="left" delay={0.2} className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profilePlaceholder} 
                  alt="Yash Talaviya - MERN Stack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white font-bold text-lg">👋</span>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-8 -left-12 w-16 h-16 bg-primary/30 rounded-full blur-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </AnimateOnScroll>

          {/* About Content */}
          <AnimateOnScroll direction="right" delay={0.4} className="order-1 lg:order-2 space-y-6">
            <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-semibold text-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Hello! I'm Yash Talaviya
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  I am a passionate MERN Stack Developer with ~1.5 years of professional experience, 
                  currently working at <span className="text-primary font-semibold">Tagline Infotech LLP</span>. 
                  I hold a BCA degree from Veer Narmad South Gujarat University and specialize in creating 
                  responsive, user-friendly, and high-performance applications.
                </motion.p>
                
                <motion.div 
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Location:</span> Surat, Gujarat
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Experience:</span> 1.5+ Years
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Education:</span> BCA (VNSGU)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Focus:</span> Full-Stack Development
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
