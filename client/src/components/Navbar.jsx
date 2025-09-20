import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Certificates", href: "#certificates", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-background/60 border border-border/40 text-muted-foreground 
               hover:text-foreground hover:border-border/60 hover:bg-background/80 
               backdrop-blur-xl transition-all duration-300"
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.98 }}
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const lastScrollYRef = useRef(0);
  const audioRef = useRef(null);

  const musicUrl = "/music.mp3";

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.preload = "auto";

      const handleCanPlay = () => setIsAudioReady(true);

      audioRef.current.addEventListener("canplaythrough", handleCanPlay);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current && isAudioReady) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play().catch(console.error);
        setIsMusicPlaying(true);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;

      if (currentScrollY > scrollThreshold) {
        const scrollDifference = currentScrollY - lastScrollYRef.current;

        if (scrollDifference > 10) {
          setShowNavbar(false);
        } else if (scrollDifference < -15) {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-6 right-6 z-50 flex gap-3",
          "transition-all duration-700 ease-out"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          y: showNavbar ? 0 : -80,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <motion.a
          href="https://github.com/zaid-soman"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-background/60 border border-border/40 text-muted-foreground 
                   hover:text-foreground hover:border-purple-500/50 hover:bg-background/80 
                   backdrop-blur-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/zaid-soman/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-background/60 border border-border/40 text-blue-500 
                   hover:text-blue-600 hover:border-blue-500/50 hover:bg-background/80 
                   backdrop-blur-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>

        <motion.a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-background/60 border border-border/40 text-cyan-500 
                   hover:text-cyan-600 hover:border-cyan-500/50 hover:bg-background/80 
                   backdrop-blur-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="Twitter Profile"
          aria-label="Twitter Profile"
        >
          <Twitter className="w-5 h-5" />
        </motion.a>

        <ThemeToggle />

        <motion.button
          onClick={toggleMusic}
          disabled={!isAudioReady}
          className={cn(
            "p-3 rounded-xl bg-background/60 border border-border/40 backdrop-blur-xl transition-all duration-300",
            isAudioReady
              ? isMusicPlaying
                ? "text-green-500 hover:text-green-600 hover:border-green-500/50 hover:bg-background/80"
                : "text-muted-foreground hover:text-foreground hover:border-border/60 hover:bg-background/80"
              : "text-muted-foreground/50 cursor-not-allowed opacity-50"
          )}
          whileHover={isAudioReady ? { scale: 1.05, y: -2 } : {}}
          whileTap={isAudioReady ? { scale: 0.95 } : {}}
          title={
            isAudioReady
              ? isMusicPlaying
                ? "Pause Music"
                : "Play Music"
              : "Loading..."
          }
          aria-label={
            isAudioReady
              ? isMusicPlaying
                ? "Pause Music"
                : "Play Music"
              : "Loading music"
          }
        >
          {isMusicPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </motion.button>
      </motion.div>

      <motion.div
        className={cn(
          "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
          "transition-all duration-700 ease-out",
          showNavbar
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-20 opacity-0 pointer-events-none"
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: showNavbar ? 0 : 20,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div
          className="flex items-center justify-center bg-background/70 border border-border/50 
                        backdrop-blur-2xl rounded-2xl p-3 shadow-2xl shadow-foreground/10
                        hover:bg-background/80 hover:border-border/60 transition-all duration-300"
        >
          <div className="flex space-x-2 items-center">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative p-3 rounded-xl transition-all duration-300 flex flex-col items-center group min-w-[60px]",
                    isActive
                      ? "bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white shadow-lg shadow-blue-500/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40 hover:shadow-md"
                  )}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  aria-label={item.name}
                >
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  <item.icon
                    className={cn(
                      "w-5 h-5 transition-all duration-300",
                      isActive ? "scale-110" : "group-hover:scale-110"
                    )}
                  />

                  <motion.span
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {item.name}
                  </motion.span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};
