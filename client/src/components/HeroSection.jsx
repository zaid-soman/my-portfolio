import {
  MousePointerClick,
  Sparkles,
  Code,
  Zap,
  Lightbulb,
  Download,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    {
      text: "Data Science Graduate",
      icon: Lightbulb,
      color: "text-blue-400",
      gradient: "from-blue-400/10 to-cyan-400/10",
    },
    {
      text: "AI/ML Engineer",
      icon: Zap,
      color: "text-purple-400",
      gradient: "from-purple-400/10 to-violet-400/10",
    },
    {
      text: "Full-Stack Developer",
      icon: Code,
      color: "text-green-400",
      gradient: "from-green-400/10 to-teal-400/10",
    },
    {
      text: "Problem Solver",
      icon: Sparkles,
      color: "text-emerald-400",
      gradient: "from-emerald-400/10 to-teal-400/10",
    },
    {
      text: "Innovation Engineer",
      icon: Sparkles,
      color: "text-amber-400",
      gradient: "from-amber-400/10 to-orange-400/10",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

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

  const currentRole = roles[roleIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95" />

      <div className="container max-w-6xl mx-auto text-center relative z-10 py-8 sm:py-12">
        <motion.div
          className="space-y-6 sm:space-y-8 md:space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-background/60 backdrop-blur-xl border border-border/30 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  className="flex items-center gap-2 sm:gap-3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`p-1.5 sm:p-2 rounded-full bg-gradient-to-r ${currentRole.gradient} border border-white/10`}
                  >
                    <currentRole.icon
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${currentRole.color}`}
                    />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/90 tracking-wide">
                    {currentRole.text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.85] sm:leading-[0.9]">
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent font-extrabold">
                Zaid Soman
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium tracking-wide px-2 sm:px-0">
              Recent graduate specializing in{" "}
              <span className="text-foreground font-semibold">
                Data Science & Artificial Intelligence
              </span>{" "}
              with proven experience in machine learning and full-stack
              development
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4 sm:px-0"
          >
            <motion.a
              href="/Zaid-Soman-cv.pdf"
              download="Zaid-Soman-CV.pdf"
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-background/60 backdrop-blur-xl border border-border/30 text-foreground rounded-lg font-semibold text-base sm:text-lg hover:bg-background/80 transition-all duration-500 shadow-lg hover:shadow-2xl w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-500 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer group"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-xs font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <MousePointerClick className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
