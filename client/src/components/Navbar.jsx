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
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-black/30 border border-white/20 text-gray-400 
               hover:text-white hover:border-white/30 hover:bg-black/40 
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
          audioRef.current.pause();
          audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
          audioRef.current = null;
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowNavbar(false);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Right Buttons */}
      <motion.div
        className="fixed top-6 right-6 z-50 flex gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Social Links */}
        <motion.a
          href="https://github.com/zaid-soman"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-black/30 border border-white/20 text-gray-400 
                   hover:text-white hover:border-purple-500/30 hover:bg-black/40 
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
          className="p-3 rounded-xl bg-black/30 border border-white/20 text-blue-400 
                   hover:text-blue-300 hover:border-blue-500/30 hover:bg-black/40 
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
          className="p-3 rounded-xl bg-black/30 border border-white/20 text-cyan-400 
                   hover:text-cyan-300 hover:border-cyan-500/30 hover:bg-black/40 
                   backdrop-blur-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="Twitter Profile"
          aria-label="Twitter Profile"
        >
          <Twitter className="w-5 h-5" />
        </motion.a>

        {/* Music Button */}
        <motion.button
          onClick={toggleMusic}
          disabled={!isAudioReady}
          className={cn(
            "p-3 rounded-xl bg-black/30 border border-white/20 backdrop-blur-xl transition-all duration-300",
            isAudioReady
              ? "text-green-400 hover:text-green-300 hover:border-green-500/30 hover:bg-black/40"
              : "text-gray-600 cursor-not-allowed"
          )}
          whileHover={{
            scale: isAudioReady ? 1.05 : 1,
            y: isAudioReady ? -2 : 0,
          }}
          whileTap={{ scale: isAudioReady ? 0.95 : 1 }}
          title={
            isAudioReady
              ? isMusicPlaying
                ? "Pause music"
                : "Play music"
              : "Loading music..."
          }
          aria-label={
            isAudioReady
              ? isMusicPlaying
                ? "Pause music"
                : "Play music"
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

      {/* Bottom Navbar */}
      <motion.div
        className={cn(
          "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
          "transition-all duration-500 ease-out",
          showNavbar
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="flex items-center justify-center bg-black/30 border border-white/20 
                      backdrop-blur-xl rounded-3xl p-2 shadow-2xl"
        >
          <div className="flex space-x-1 items-center">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative p-3 rounded-2xl transition-all duration-300 flex flex-col items-center group",
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs mt-1 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 
                               bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Theme Toggle in Navbar */}
            <div className="ml-2 pl-2 border-l border-white/20">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
