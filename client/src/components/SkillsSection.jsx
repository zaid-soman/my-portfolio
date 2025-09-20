import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import sassIcon from "@/assets/icons/saas.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import graphqlIcon from "@/assets/icons/graphql.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import clearkIcon from "@/assets/icons/cleark.png";
import SQLIcon from "@/assets/icons/sql.png";
import MySQLIcon from "@/assets/icons/mysql.png";

const skills = [
  // AI & Machine Learning
  { name: "Python", level: 95, category: "ai", icon: "python" },
  { name: "TensorFlow", level: 90, category: "ai", icon: "python" },
  { name: "PyTorch", level: 88, category: "ai", icon: "python" },
  { name: "Scikit-learn", level: 92, category: "ai", icon: "python" },
  { name: "Computer Vision", level: 85, category: "ai", icon: "python" },
  { name: "NLP", level: 87, category: "ai", icon: "python" },

  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "react" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "typescript" },
  { name: "Next.js", level: 88, category: "frontend", icon: "nextjs" },
  { name: "JavaScript", level: 95, category: "frontend", icon: "javascript" },
  { name: "CSS3", level: 92, category: "frontend", icon: "css" },
  { name: "HTML5", level: 95, category: "frontend", icon: "html" },

  // Backend
  { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
  { name: "Express", level: 88, category: "backend", icon: "express" },
  { name: "MongoDB", level: 85, category: "backend", icon: "mongodb" },
  { name: "PostgreSQL", level: 87, category: "backend", icon: "postgresql" },
  { name: "MySQL", level: 85, category: "backend", icon: "mysql" },
  { name: "GraphQL", level: 82, category: "backend", icon: "graphql" },

  // Tools
  { name: "Git", level: 93, category: "tools", icon: "git" },
  { name: "GitHub", level: 95, category: "tools", icon: "github" },
  { name: "Docker", level: 80, category: "tools", icon: "docker" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
  { name: "Java", level: 85, category: "tools", icon: "java" },
  { name: "Firebase", level: 88, category: "tools", icon: "firebase" },
];

const categories = [
  { id: "all", label: "All Skills", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "ai", label: "AI & ML", color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "tools", label: "Tools", color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
];

// Create an icon mapping object
const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  sass: sassIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  graphql: graphqlIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  vscode: vscodeIcon,
  cleark: clearkIcon,
  sql: SQLIcon,
  mysql: MySQLIcon,
  
};

const SkillBar = ({ level }) => {
  const variants = {
    initial: { width: 0 },
    animate: { 
      width: `${level}%`,
      transition: { 
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1
      }
    }
  };

  return (
    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm">
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className={`h-full rounded-full ${
          level > 90 ? 'bg-gradient-to-r from-emerald-400 to-green-500' : 
          level > 75 ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 
          level > 60 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
          'bg-gradient-to-r from-pink-400 to-purple-500'
        } shadow-lg`}
        style={{
          boxShadow: level > 90 ? '0 0 20px rgba(16, 185, 129, 0.3)' :
                     level > 75 ? '0 0 20px rgba(59, 130, 246, 0.3)' :
                     level > 60 ? '0 0 20px rgba(251, 191, 36, 0.3)' :
                     '0 0 20px rgba(236, 72, 153, 0.3)'
        }}
      />
    </div>
  );
};

const InfiniteScrollSkills = ({ skills }) => {
  // Duplicate skills for seamless looping
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="overflow-hidden py-12">
      {/* First row */}
      <motion.div
        className="flex gap-8 mb-12"
        animate={{ 
          x: ["0%", "-100%"],
          transition: { 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          } 
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const iconSrc = iconImages[skill.icon];
          return (
            <motion.div 
              key={`${skill.name}-${index}`} 
              className="flex-shrink-0 flex flex-col items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-black/30 border border-white/20 backdrop-blur-xl 
                            flex items-center justify-center shadow-lg group-hover:border-blue-500/50 
                            group-hover:bg-black/40 transition-all duration-300">
                <img 
                  src={iconSrc} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain filter group-hover:brightness-110 
                           transition-all duration-300" 
                />
              </div>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white 
                             transition-colors duration-300 text-center tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Second row (reverse direction) */}
      <motion.div
        className="flex gap-8"
        animate={{ 
          x: ["-100%", "0%"],
          transition: { 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          } 
        }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => {
          const iconSrc = iconImages[skill.icon];
          return (
            <motion.div 
              key={`${skill.name}-reverse-${index}`} 
              className="flex-shrink-0 flex flex-col items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-black/30 border border-white/20 backdrop-blur-xl 
                            flex items-center justify-center shadow-lg group-hover:border-purple-500/50 
                            group-hover:bg-black/40 transition-all duration-300">
                <img 
                  src={iconSrc} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain filter group-hover:brightness-110 
                           transition-all duration-300" 
                />
              </div>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white 
                             transition-colors duration-300 text-center tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight antialiased">
            Technical 
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                           bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed antialiased">
            Technologies I&apos;ve mastered and my proficiency levels across different domains
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-2xl font-semibold text-sm tracking-wide 
                         transition-all duration-300 backdrop-blur-xl overflow-hidden
                         ${activeCategory === category.id
                           ? `text-white border border-white/30 bg-black/40 shadow-2xl` 
                           : `text-gray-400 border border-white/10 bg-black/20 hover:text-white 
                              hover:border-white/20 hover:bg-black/30`}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              {activeCategory === category.id && (
                <motion.div
                  className={`absolute inset-0 ${category.color} opacity-20`}
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => {
                const iconSrc = iconImages[skill.icon];
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="group relative p-6 bg-black/30 border border-white/20 rounded-2xl 
                             backdrop-blur-xl transition-all duration-500 ease-out
                             hover:bg-black/40 hover:border-blue-500/30 hover:shadow-2xl 
                             hover:shadow-blue-500/10 hover:-translate-y-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-black/40 border border-white/20 
                                 flex items-center justify-center group-hover:border-blue-500/50 
                                 transition-all duration-300"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                      >
                        <img 
                          src={iconSrc} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain filter group-hover:brightness-110 
                                   transition-all duration-300" 
                        />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-bold text-lg text-white group-hover:text-blue-400 
                                       transition-colors duration-300 tracking-tight">
                            {skill.name}
                          </h3>
                          <motion.span 
                            className={`text-sm font-bold px-3 py-1 rounded-full border backdrop-blur-sm
                              ${skill.level > 90 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 
                                skill.level > 75 ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 
                                skill.level > 60 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 
                                'bg-pink-500/20 text-pink-400 border-pink-500/30'}`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <SkillBar level={skill.level} />
                        <div className="mt-3 flex justify-between text-xs text-gray-500 font-medium">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* No Results */}
        {filteredSkills.length === 0 && activeCategory !== "all" && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No skills found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};