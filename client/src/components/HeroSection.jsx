import {
  ArrowDown,
  MousePointerClick,
  Sparkles,
  Code,
  Zap,
  Lightbulb,
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
      text: "Data Science & AI Student",
      icon: Lightbulb,
      color: "text-blue-500",
    },
    { text: "Full Stack Developer", icon: Code, color: "text-green-500" },
    { text: "Machine Learning Expert", icon: Zap, color: "text-purple-500" },
    { text: "Problem Solver", icon: Sparkles, color: "text-orange-500" },
  ];

  // Auto-cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1200); // Reduced interval for snappier role cycling
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger
        delayChildren: 0.15, // Faster delay
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Faster animation
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const currentRole = roles[roleIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5"
      ref={ref}
    >
      {/* Enhanced floating particles background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
            style={{
              width: Math.random() * 8 + 3 + "px",
              height: Math.random() * 8 + 3 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 120],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto text-center z-10">
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced dynamic role display */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 backdrop-blur-sm cursor-pointer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <currentRole.icon
                    className={`h-5 w-5 ${currentRole.color}`}
                  />
                  <span className="text-lg md:text-xl font-mono font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {currentRole.text}
                  </span>
                </motion.div>
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I&apos;m
            </motion.span>
            <motion.span
              className="text-primary inline-block ml-4 relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              Zaid Soman
              <motion.span
                className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
              <motion.div
                className="absolute -inset-2 rounded-lg bg-primary/5 -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </motion.span>
          </motion.h1>

          {/* Enhanced description */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Final-year student passionate about{" "}
            <motion.span
              className="text-primary font-medium relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              AI & Machine Learning
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            , crafting intelligent solutions through{" "}
            <motion.span
              className="text-secondary font-medium relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              full-stack development
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>{" "}
            and data-driven innovation.
          </motion.p>

          {/* Enhanced call-to-action buttons */}
          <motion.div
            className="pt-8 flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="relative group overflow-hidden px-8 py-4 rounded-2xl font-medium text-lg bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Explore My Projects
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="relative group overflow-hidden px-8 py-4 rounded-2xl font-medium text-lg border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(99, 102, 241, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Connect
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.div>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced tech stack floating badges */}
      <motion.div
        className="absolute left-8 bottom-1/3 hidden lg:flex flex-col gap-4 items-start"
        variants={floatingVariants}
        animate="float"
      >
        {["Python", "React", "Node.js", "PostgreSQL", "TensorFlow"].map(
          (tech, i) => (
            <motion.div
              key={tech}
              className="px-4 py-2 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full text-sm shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.15 }}
              whileHover={{ scale: 1.1, x: 5 }}
            >
              {tech}
            </motion.div>
          )
        )}
      </motion.div>

      <motion.div
        className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-4 items-end"
        variants={floatingVariants}
        animate="float"
      >
        {[
          "Machine Learning",
          "Data Science",
          "Tailwind CSS",
          "Express",
          "Git",
        ].map((tech, i) => (
          <motion.div
            key={tech}
            className="px-4 py-2 bg-background/90 backdrop-blur-sm border border-secondary/20 rounded-full text-sm shadow-lg hover:shadow-xl hover:border-secondary/40 transition-all duration-300"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.7 + i * 0.15 }}
            whileHover={{ scale: 1.1, x: -5 }}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <motion.span
          className="text-sm text-muted-foreground mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-300"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MousePointerClick className="h-3 w-3" />
          Discover More
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
        </motion.div>
      </motion.div>

      {/* Enhanced animated gradient background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/30 to-pink-500/30 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-accent/30 to-blue-500/30 blur-[110px]"
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};
