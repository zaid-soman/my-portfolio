import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive",
      });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid email format",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwpbojaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "I&apos;ll get back to you within 24 hours.",
          variant: "success",
          className:
            "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description:
          "Please try again or email me directly at codesoman@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
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
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            <span className="text-sm font-bold tracking-[0.3em] text-green-400 uppercase">
              Contact
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight antialiased">
            Get In
            <span
              className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 
                           bg-clip-text text-transparent"
            >
              {" "}
              Touch
            </span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed antialiased">
            Ready to bring your ideas to life? Let&apos;s discuss how my AI/ML
            expertise and full-stack development skills can help solve your
            challenges.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8 p-8 bg-background/60 border border-border rounded-3xl backdrop-blur-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                Contact Details
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "codesoman@gmail.com",
                  href: "mailto:codesoman@gmail.com",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+962 778085117",
                  href: "tel:+962778085117",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Amman, Jordan",
                  href: null,
                  color: "from-purple-500 to-pink-500",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-background/40 border border-border 
                           hover:bg-background/60 hover:border-border transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} bg-opacity-20`}
                  >
                    <contact.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-foreground font-medium hover:text-blue-400 transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">
                        {contact.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-muted-foreground tracking-wide">
                Connect with me
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/zaid-soman/",
                    color: "hover:bg-blue-600/20 hover:border-blue-500/30",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    url: "https://twitter.com/",
                    color: "hover:bg-cyan-500/20 hover:border-cyan-500/30",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/zaid-soman",
                    color: "hover:bg-purple-600/20 hover:border-purple-500/30",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-background/40 border border-border text-muted-foreground 
                              hover:text-foreground transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 bg-background/60 border border-border rounded-3xl backdrop-blur-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                Send Me a Message
              </h3>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-muted-foreground tracking-wide"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-background/60 border border-border 
                           text-foreground placeholder-muted-foreground backdrop-blur-sm
                           focus:outline-none focus:border-blue-500/50 focus:bg-background/80 
                           transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-muted-foreground tracking-wide"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-background/60 border border-border 
                           text-foreground placeholder-muted-foreground backdrop-blur-sm
                           focus:outline-none focus:border-blue-500/50 focus:bg-background/80 
                           transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-muted-foreground tracking-wide"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl bg-background/60 border border-border 
                           text-foreground placeholder-muted-foreground backdrop-blur-sm resize-none
                           focus:outline-none focus:border-blue-500/50 focus:bg-background/80 
                           transition-all duration-300"
                  placeholder="Hey, I'd love to collaborate on..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold transition-all duration-300",
                  isSubmitting
                    ? "bg-muted/60 text-muted-foreground cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02]"
                )}
                whileHover={!isSubmitting ? { y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
