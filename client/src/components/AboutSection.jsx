import { Briefcase, Code, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden"
      ref={ref}
    >
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95" />
      
      {/* Subtle accent gradients */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-primary/2 to-purple-500/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-secondary/2 to-blue-500/2 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-full bg-background/60 backdrop-blur-xl border border-border/30 text-primary mb-4 sm:mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            About Me
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[0.9]"
            variants={itemVariants}
          >
            Building Tomorrow&apos;s{" "}
            <motion.span 
              className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Technology
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-purple-500/5 to-secondary/5 rounded-xl blur-lg -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-wide leading-relaxed px-4 sm:px-0"
            variants={itemVariants}
          >
            Computer Science student specializing in Artificial Intelligence and Machine Learning, 
            passionate about creating intelligent systems that solve real-world challenges.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 items-stretch">
          {/* Left Column - Profile Card */}
          <motion.div 
            className="lg:w-1/2 group"
            variants={itemVariants}
          >
            <div className="h-full bg-background/60 backdrop-blur-xl border border-border/30 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:border-border/50 hover:bg-background/80 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div 
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-300 group-hover:border-primary/50 mx-auto sm:mx-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <img
                    src="/profile-logo.png"
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary tracking-tight">
                    Personal Profile
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 font-medium">
                    Computer Science • AI/ML Specialist • Full-Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80 font-medium tracking-wide">
                  Computer Science student specializing in Artificial Intelligence and Machine Learning with hands-on experience
                  in full-stack development. Skilled in Python, React, Node.js, and modern AI frameworks
                  with proven experience in building intelligent systems, web applications,
                  and data-driven solutions. Passionate about creating innovative technology that solves real-world problems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-background p-3 sm:p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
                    <h4 className="text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:text-primary/80">
                      AI/ML
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                      Python, TensorFlow, PyTorch
                    </p>
                  </div>
                  <div className="bg-background p-3 sm:p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
                    <h4 className="text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:text-primary/80">
                      Frontend
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                      React, Next.js, TypeScript
                    </p>
                  </div>
                  <div className="bg-background p-3 sm:p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
                    <h4 className="text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:text-primary/80">
                      Backend
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                      Node.js, Python, Databases
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <a
                    href="#contact"
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-center hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
                  >
                    Contact Me
                  </a>

                  <a
                    href="/Zaid-Soman-cv.pdf"
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-muted hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
                    download
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 hover:translate-y-0.5" />
                    Resume - Zaid Soman
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            variants={itemVariants}
          >
            {/* Development Philosophy */}
            <motion.div 
              className="group relative p-6 bg-black/30 border border-white/20 rounded-2xl backdrop-blur-xl 
                         transition-all duration-500 ease-out hover:bg-black/40 hover:border-blue-500/30 
                         hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                           text-blue-400 group-hover:from-blue-500/30 group-hover:to-purple-500/30 
                           transition-all duration-300"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  <Code className="h-6 w-6" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white tracking-tight 
                               group-hover:text-blue-400 transition-colors duration-300">
                    Development Philosophy
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 
                              transition-colors duration-300 antialiased">
                    I believe in creating intelligent systems that combine robust AI/ML algorithms 
                    with clean, maintainable code. My approach emphasizes research-driven development, 
                    ethical AI practices, and scalable architectures.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Academic Focus */}
            <motion.div 
              className="group relative p-6 bg-black/30 border border-white/20 rounded-2xl backdrop-blur-xl 
                         transition-all duration-500 ease-out hover:bg-black/40 hover:border-purple-500/30 
                         hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                           text-purple-400 group-hover:from-purple-500/30 group-hover:to-pink-500/30 
                           transition-all duration-300"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  <Briefcase className="h-6 w-6" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white tracking-tight 
                               group-hover:text-purple-400 transition-colors duration-300">
                    Academic & Research Focus
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 
                              transition-colors duration-300 antialiased">
                    As a Computer Science student specializing in AI & Machine Learning, 
                    I focus on cutting-edge research in deep learning, natural language processing, 
                    and computer vision while building practical applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="group relative p-6 bg-black/30 border border-white/20 rounded-2xl 
                           backdrop-blur-xl text-center transition-all duration-500 ease-out 
                           hover:bg-black/40 hover:border-green-500/30 hover:shadow-2xl 
                           hover:shadow-green-500/10 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-green-400 mb-2 tracking-tight 
                           group-hover:text-green-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  15+
                </motion.div>
                <div className="text-gray-400 text-sm font-medium tracking-wider 
                              group-hover:text-gray-300 transition-colors duration-300">
                  PROJECTS COMPLETED
                </div>
              </motion.div>
              
              <motion.div 
                className="group relative p-6 bg-black/30 border border-white/20 rounded-2xl 
                           backdrop-blur-xl text-center transition-all duration-500 ease-out 
                           hover:bg-black/40 hover:border-yellow-500/30 hover:shadow-2xl 
                           hover:shadow-yellow-500/10 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-yellow-400 mb-2 tracking-tight 
                           group-hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  100%
                </motion.div>
                <div className="text-gray-400 text-sm font-medium tracking-wider 
                              group-hover:text-gray-300 transition-colors duration-300">
                  CLIENT SATISFACTION
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
