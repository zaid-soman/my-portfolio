import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Rocket } from "lucide-react";

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [phase, setPhase] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [typedText, setTypedText] = useState("");

  const portfolioUrl = "zaidsoman.dev";
  const roles = [
    { text: "AI/ML ENGINEER", icon: Brain, color: "from-blue-400 to-cyan-500" },
    {
      text: "FULL STACK DEVELOPER",
      icon: Code,
      color: "from-purple-400 to-pink-500",
    },
    {
      text: "INNOVATION BUILDER",
      icon: Rocket,
      color: "from-green-400 to-emerald-500",
    },
  ];

  useEffect(() => {
    const phase1 = setTimeout(() => setPhase(1), 600);
    const phase2 = setTimeout(() => setPhase(2), 1400);
    const phase3 = setTimeout(() => setPhase(3), 2200);
    const complete = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 4500);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(complete);
    };
  }, [onWelcomeComplete]);

  useEffect(() => {
    if (phase >= 2) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= portfolioUrl.length) {
          setTypedText(portfolioUrl.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }
  }, [phase]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(45deg, #ec4899, #f59e0b)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="h-full w-full flex items-center justify-center p-6"
        variants={containerVariants}
        initial="hidden"
        animate={exitAnimation ? "exit" : "visible"}
      >
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Role Badge */}
          {phase >= 0 && (
            <motion.div
              variants={contentVariants}
              className="flex justify-center"
            >
              <motion.div
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl"
                whileHover={{ scale: 1.05 }}
                initial={{ rotateX: -90 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className={`p-2 rounded-xl bg-gradient-to-r ${
                    roles[phase % roles.length]?.color
                  } bg-opacity-20`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {(() => {
                    const CurrentIcon = roles[phase % roles.length]?.icon;
                    return CurrentIcon ? (
                      <CurrentIcon className="h-5 w-5 text-white" />
                    ) : null;
                  })()}
                </motion.div>
                <span className="text-white font-bold tracking-[0.2em] text-sm md:text-base">
                  {roles[phase % roles.length]?.text}
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* Main Greeting */}
          {phase >= 1 && (
            <motion.div variants={contentVariants}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                <span className="text-white">Hello</span>
                <motion.span
                  className="ml-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  There!
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.span>
              </h1>
            </motion.div>
          )}

          {/* URL and Description */}
          {phase >= 2 && (
            <motion.div variants={contentVariants} className="space-y-4">
              <motion.div
                className="flex justify-center items-center gap-2 text-xl md:text-2xl font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-blue-400">{typedText}</span>
                <motion.span
                  className="w-0.5 h-6 md:h-8 bg-blue-400 rounded-full"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
              <motion.p
                className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                Welcome to my portfolio - where AI meets innovation
              </motion.p>
            </motion.div>
          )}

          {/* Loading Indicator */}
          {phase >= 3 && (
            <motion.div
              variants={contentVariants}
              className="flex flex-col items-center space-y-4"
            >
              <motion.div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
              <motion.p
                className="text-gray-400 text-sm tracking-wide"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading excellence...
              </motion.p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
