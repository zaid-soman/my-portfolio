import { ArrowUp, Linkedin, Github, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/zaid-soman/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={18} />,
      href: "https://github.com/zaid-soman",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "codesoman@gmail.com",
      href: "mailto:codesoman@gmail.com",
    },
    {
      icon: <Phone size={16} />,
      text: "+962 7 7808 5117",
      href: "tel:+962778085117",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <footer className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <motion.div
          className="p-8 bg-black/30 border border-white/20 rounded-3xl backdrop-blur-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  ZAID SOMAN
                </h3>
                <p className="text-gray-400 leading-relaxed antialiased">
                  AI/ML Engineer & Full-Stack Developer creating innovative
                  solutions with cutting-edge technology.
                </p>
              </div>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-black/30 border border-white/10 text-gray-400 
                             hover:text-white hover:border-blue-500/30 hover:bg-black/40 
                             transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">
                Navigation
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 
                               font-medium tracking-wide"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">
                Contact
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.02, x: 2 }}
                  >
                    <span className="text-gray-400">{info.icon}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 
                                 font-medium tracking-wide"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-400 font-medium tracking-wide">
                        {info.text}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">
                Stay Updated
              </h4>
              <p className="text-gray-400 leading-relaxed antialiased">
                Get notified about my latest projects and AI/ML insights.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/20 
                           text-white placeholder-gray-500 backdrop-blur-sm
                           focus:outline-none focus:border-blue-500/50 focus:bg-black/50 
                           transition-all duration-300"
                  required
                />
                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white font-semibold transition-all duration-300 
                           hover:shadow-2xl hover:shadow-blue-500/25"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center 
                     space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-gray-400 font-medium tracking-wide">
                © {currentYear} Zaid Soman. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 
                         font-medium tracking-wide"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 
                         font-medium tracking-wide"
              >
                Terms
              </a>
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 
                         text-white transition-all duration-300 hover:shadow-2xl 
                         hover:shadow-blue-500/25"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
