"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

export const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Example certificates data
  const certificates = [
    {
      id: 1,
      title: "Python AI (Machine Learning)",
      issuer: "Coursera / University of Michigan",
      date: "2024",
      image: "/certificates/python-ai.png",
      url: "#",
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2023",
      image: "/certificates/fullstack.png",
      url: "#",
    },
    {
      id: 3,
      title: "Data Science & AI",
      issuer: "University of Al-Hussein Bin Talal",
      date: "2025",
      image: "/certificates/datascience.png",
      url: "#",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
      setCurrentIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCertificates = certificates.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  while (visibleCertificates.length < itemsPerPage) {
    visibleCertificates.push(certificates[visibleCertificates.length]);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="certificates"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background"
      ref={ref}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 10 + 2 + "px",
              height: Math.random() * 10 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-20"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="space-y-12 sm:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="text-sm sm:text-lg font-mono text-primary mb-3 sm:mb-4 inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Award className="h-4 w-4" />
              My Certificates
              <Award className="h-4 w-4" />
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              variants={itemVariants}
            >
              Achievements & Credentials
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Explore my verified certificates and credentials in AI, Data
              Science, and Full-Stack Development.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleCertificates.map((cert) => (
                <motion.div
                  key={cert?.id || Math.random()}
                  className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col h-full">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary/30 mb-3 sm:mb-4 group-hover:text-primary/50 transition-colors" />
                    <div className="flex items-center gap-3 mb-4">
                      {cert?.image && (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="h-12 w-12 rounded-md object-cover border border-primary/20"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {cert?.title || ""}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {cert?.issuer || ""} &bull; {cert?.date || ""}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      {cert?.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows - Show only when needed */}
            {totalPages > 1 && (
              <>
                <button
                  onClick={prevCertificate}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 p-2 sm:p-3 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all shadow-lg z-10 hidden sm:flex items-center justify-center hover:scale-110"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <button
                  onClick={nextCertificate}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 p-2 sm:p-3 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all shadow-lg z-10 hidden sm:flex items-center justify-center hover:scale-110"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Navigation - Show only when needed */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 sm:gap-4 sm:hidden">
              <button
                onClick={prevCertificate}
                className="p-1 sm:p-2 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-primary"
                        : "bg-muted-foreground/20"
                    }`}
                    aria-label={`Go to certificate page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextCertificate}
                className="p-1 sm:p-2 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="Next certificate"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Animated gradient background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-[80px] sm:blur-[100px] opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-blue-500 to-primary blur-[80px] sm:blur-[100px] opacity-30"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </motion.div>
    </section>
  );
};
