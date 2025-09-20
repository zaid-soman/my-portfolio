import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronUp,
  Star,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 7,
    title: "NauraCare",
    category: "SaaS",
    description:
      "Multi Role Hospital Management Website with advanced patient tracking and billing systems",
    image: "/projects/project7.png",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "Stripe",
      "razorpay",
      "mongoDB",
      "express",
    ],
    demoUrl: "https://nauracare.vercel.app",
    githubUrl: "https://github.com/zaid-soman",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    id: 1,
    title: "Vante & Co.",
    category: "E-commerce",
    description: "Luxury fashion e-commerce with seamless checkout experience",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "Node.js", "Stripe"],
    demoUrl: "https://e-commerce-website-4w6a.vercel.app",
    githubUrl: "https://github.com/zaid-soman",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Converse Pro",
    category: "Communication",
    description:
      "Real-time chat application with media sharing and end-to-end encryption",
    image: "/projects/project2.png",
    tags: ["Socket.IO", "MongoDB", "Express", "React"],
    demoUrl: "https://converse-pro-frontend.vercel.app",
    githubUrl: "https://github.com/zaid-soman",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Blogni AI",
    category: "Artificial Intelligence",
    description:
      "AI-powered content generation platform with multi-language support",
    image: "/projects/project3.png",
    tags: ["Gemini AI", "Clerk Auth", "Redux", "Next.js"],
    demoUrl: "https://blogni.vercel.app",
    githubUrl: "https://github.com/zaid-soman",
    accentColor: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    title: "Spendlix",
    category: "Finance",
    description:
      "Financial tracking with analytics dashboard and expense categorization",
    image: "/projects/project4.png",
    tags: ["Chart.js", "React", "Node.js", "Firebase"],
    demoUrl: "https://spendlix.vercel.app/login",
    githubUrl: "https://github.com/zaid-soman",
    accentColor: "from-rose-500 to-pink-600",
  },
  {
    id: 5,
    title: "Eattoo",
    category: "E-commerce",
    description:
      "Gourmet food delivery service platform with real-time tracking",
    image: "/projects/project5.png",
    tags: ["Stripe", "Redux", "React", "Mapbox"],
    demoUrl: "https://eattoo-food-delivery-website-frontend.onrender.com/",
    githubUrl: "https://github.com/zaid-soman",
    accentColor: "from-violet-500 to-purple-600",
  },
  {
    id: 6,
    title: "JobQue",
    category: "SaaS",
    description:
      "Gourmet food delivery service platform with real-time tracking",
    image: "/projects/project6.png",
    tags: ["under development", "Stripe", "Redux", "React", "Mapbox"],
    demoUrl: "#",
    githubUrl: "https://github.com/zaid-soman",
    accentColor: "from-violet-500 to-purple-600",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-sm font-bold tracking-[0.3em] text-blue-400 uppercase">
              Portfolio
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight antialiased">
            Featured
            <span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                           bg-clip-text text-transparent"
            >
              {" "}
              Projects
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed antialiased">
            Showcasing my expertise in AI/ML development, full-stack
            applications, and innovative solutions built with cutting-edge
            technologies.
          </p>
        </motion.div>

        {/* Interactive filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setShowAll(false);
              }}
              className={`relative px-6 py-3 rounded-2xl font-semibold text-sm tracking-wide 
                         transition-all duration-300 backdrop-blur-xl overflow-hidden
                         ${
                           activeFilter === category
                             ? `text-white border border-white/30 bg-black/40 shadow-2xl`
                             : `text-gray-400 border border-white/10 bg-black/20 hover:text-white 
                              hover:border-white/20 hover:bg-black/30`
                         }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {activeFilter === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-background/60 border border-border rounded-3xl 
                         backdrop-blur-xl overflow-hidden transition-all duration-500 ease-out
                         hover:bg-background/80 hover:border-blue-500/30 hover:shadow-2xl 
                         hover:shadow-blue-500/10 hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold
                             bg-gradient-to-r from-amber-400 to-yellow-500 text-black 
                             shadow-lg flex items-center gap-1"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Star size={12} className="fill-current" />
                    FEATURED
                  </motion.div>
                )}

                {/* Project image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 
                                flex items-end p-6"
                  >
                    <motion.p
                      className="text-foreground text-sm leading-relaxed translate-y-6 
                               group-hover:translate-y-0 transition-transform duration-500"
                    >
                      {project.description}
                    </motion.p>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className="text-xl font-bold text-foreground group-hover:text-blue-400 
                                 transition-colors duration-300 tracking-tight"
                    >
                      {project.title}
                    </h3>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide
                                   bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300
                          ${
                            tag.includes("development") ||
                            tag.includes("Coming")
                              ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                              : "bg-muted/60 text-muted-foreground border border-muted hover:border-blue-500/50 hover:text-blue-400"
                          }`}
                        whileHover={{ scale: 1.05, y: -1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 4 && (
                      <span
                        className="px-3 py-1 text-xs font-medium rounded-full 
                                     bg-muted/40 text-muted-foreground border border-muted"
                      >
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl 
                                font-semibold text-sm transition-all duration-300 ${
                                  project.demoUrl === "#"
                                    ? "bg-muted/40 text-muted-foreground cursor-not-allowed border border-muted"
                                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-300"
                                }`}
                      onClick={(e) =>
                        project.demoUrl === "#" && e.preventDefault()
                      }
                      whileHover={
                        project.demoUrl !== "#" ? { scale: 1.02, y: -1 } : {}
                      }
                      whileTap={project.demoUrl !== "#" ? { scale: 0.98 } : {}}
                    >
                      <ExternalLink size={16} />
                      {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl 
                                font-semibold text-sm transition-all duration-300 ${
                                  project.githubUrl === "#"
                                    ? "bg-muted/40 text-muted-foreground cursor-not-allowed border border-muted"
                                    : "bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30 hover:text-purple-300"
                                }`}
                      onClick={(e) =>
                        project.githubUrl === "#" && e.preventDefault()
                      }
                      whileHover={
                        project.githubUrl !== "#" ? { scale: 1.02, y: -1 } : {}
                      }
                      whileTap={
                        project.githubUrl !== "#" ? { scale: 0.98 } : {}
                      }
                    >
                      <Github size={16} />
                      {project.githubUrl === "#" ? "Private" : "View Code"}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more/less button */}
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className={`px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 
                         backdrop-blur-xl border ${
                           showAll
                             ? "bg-black/30 text-white border-white/20 hover:bg-black/40 hover:border-white/30"
                             : "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent hover:shadow-2xl hover:shadow-blue-500/25"
                         }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                {showAll ? (
                  <>
                    <ChevronUp size={18} />
                    Show Less Projects
                  </>
                ) : (
                  <>
                    View All Projects ({filteredProjects.length})
                    <ArrowRight size={18} />
                  </>
                )}
              </span>
            </motion.button>
          </motion.div>
        )}

        {/* CTA section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div
            className="relative p-8 bg-black/30 border border-white/20 rounded-3xl 
                        backdrop-blur-xl max-w-4xl mx-auto"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                          rounded-3xl"
            ></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
                Have a project in mind?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let&apos;s collaborate to bring your vision to life with
                cutting-edge technology and exceptional design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white font-semibold transition-all duration-300 
                           hover:shadow-2xl hover:shadow-blue-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Get in Touch
                    <ArrowRight size={18} />
                  </span>
                </motion.a>
                <motion.a
                  href="https://github.com/zaid-soman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-black/30 text-white font-semibold 
                           border border-white/20 backdrop-blur-xl transition-all duration-300
                           hover:bg-black/40 hover:border-white/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore GitHub
                    <Github size={18} />
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
