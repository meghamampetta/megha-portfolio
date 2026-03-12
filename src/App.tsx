/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Linkedin, 
  Dribbble, 
  Figma as FigmaIcon, 
  Layout, 
  Smartphone, 
  Monitor, 
  Palette, 
  Presentation, 
  FileText, 
  Search, 
  Mail, 
  Phone, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact me', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-xl">MD</div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
          <button className="btn-primary flex items-center gap-2 text-sm py-2">
            Download Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-card-bg border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Download Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 font-medium mb-2">Hi I am</p>
          <h2 className="text-2xl font-semibold mb-4">Megha Das</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-primary">UI/UX/Product</span> <br />
            Designer
          </h1>
          
          <div className="flex gap-4 mb-10">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Dribbble size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <FigmaIcon size={18} />
            </a>
          </div>

          <button className="btn-primary flex items-center gap-2 px-8 py-4 mb-12">
            Download Resume
          </button>

          <div className="flex flex-wrap gap-8 md:gap-12">
            <div>
              <p className="text-3xl font-bold text-primary">2+</p>
              <p className="text-sm text-gray-400">Experiences</p>
            </div>
            <div className="border-l border-white/10 pl-8 md:pl-12">
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-sm text-gray-400">Project done</p>
            </div>
            <div className="border-l border-white/10 pl-8 md:pl-12">
              <p className="text-3xl font-bold text-primary">170+</p>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-8 border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" 
              alt="Megha Das" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Search className="text-primary" />, title: "UX Research & Product Strategy", desc: "User research, competitor analysis, user journeys, and product discovery." },
    { icon: <Palette className="text-primary" />, title: "Brand Identity Design", desc: "Creating a consistent visual identity including logo, colors, and typography that reflects the brand's personality." },
    { icon: <Layout className="text-primary" />, title: "Wireframing & Prototyping", desc: "Designing low- and high-fidelity wireframes and interactive prototypes to visualize product structure and user flows." },
    { icon: <Monitor className="text-primary" />, title: "Website Design", desc: "Designing modern, responsive websites that deliver clear information and engaging user experiences." },
    { icon: <Smartphone className="text-primary" />, title: "Mobile App Design", desc: "Crafting intuitive and visually appealing mobile app interfaces optimized for iOS and Android users." },
    { icon: <Layout className="text-primary" />, title: "Web Application", desc: "Designing scalable web platforms and dashboards with a strong focus on usability and product functionality." },
    { icon: <Presentation className="text-primary" />, title: "Social Media Creatives", desc: "Designing engaging visual content for Instagram, LinkedIn etc to strengthen brand presence and audience engagement." },
    { icon: <FileText className="text-primary" />, title: "Product Presentations", desc: "Creating clear and visually compelling presentations that communicate product ideas, features, and value." },
    { icon: <Layout className="text-primary" />, title: "Marketing Collateral", desc: "Designing promotional materials such as flyers, brochures, and posters to support brand marketing and communication." },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Designing intuitive products, impactful marketing visuals, and strong brand identities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enjoys Turning Complex Ideas Into Clear And Engaging User Experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square rounded-full overflow-hidden border-8 border-white/5 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
              alt="About Me" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 10 years of experience delivering impactful, user-centered digital experiences across web and mobile platforms, I bring a proven track record of designing intuitive, scalable, and visually compelling solutions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              At PriceEasy.AI (past 2 years), I led the end-to-end UI/UX design process for mobile apps, web applications, and websites — from wireframes to high-fidelity designs. I also collaborated closely with product managers, developers, and marketing teams, ensuring seamless execution of user-focused designs. In addition, I created diverse marketing collateral such as social media graphics, flyers, brochures, presentations, business cards, booth designs, and event assets for conferences and trade shows.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-400 text-sm">Successfully completed 170+ UI/UX projects on Upwork with a stellar client track record.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-400 text-sm">Skilled at time management, delivering multiple projects on schedule without compromising quality.</p>
              </div>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {[
            { name: "Figma", percent: 100 },
            { name: "Adobe XD", percent: 100 },
            { name: "Adobe Photoshop", percent: 85 },
            { name: "Adobe Illustrator", percent: 60 },
          ].map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-white/5 stroke-current" strokeWidth="8" fill="transparent" r="40" cx="50" cy="50" />
                  <motion.circle 
                    className="text-primary stroke-current" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    fill="transparent" 
                    r="40" cx="50" cy="50" 
                    initial={{ strokeDasharray: "0 251.2" }}
                    whileInView={{ strokeDasharray: `${skill.percent * 2.512} 251.2` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
                  {skill.percent}%
                </div>
              </div>
              <p className="text-gray-400 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Website Design', 'App Mobile Design', 'App Desktop', 'Branding', 'Marketing Design'];
  
  const projects = [
    { id: 1, title: "Name Project", category: "Website Design", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Name Project", category: "App Mobile Design", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Name Project", category: "App Desktop", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Name Project", category: "Branding", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, title: "Name Project", category: "Marketing Design", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, title: "Name Project", category: "Website Design", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" },
    { id: 7, title: "Name Project", category: "App Mobile Design", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, title: "Name Project", category: "App Desktop", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" },
    { id: 9, title: "Name Project", category: "Branding", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop" },
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === filter ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-primary text-sm">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all" />
            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all" />
            <div className="relative">
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all appearance-none">
                <option value="">Service Of Interest</option>
                <option value="uiux">UI/UX Design</option>
                <option value="branding">Branding</option>
                <option value="web">Web Design</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
            <input type="text" placeholder="Timeline" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all" />
            <div className="md:col-span-2">
              <textarea placeholder="Project Details..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all resize-none"></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="btn-primary px-12 py-4 flex items-center gap-2">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-bold text-2xl mb-8">MD</div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About me</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact me</a>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex items-center gap-3 text-gray-400">
            <Mail size={20} className="text-primary" />
            <span>meghamampetta@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Phone size={20} className="text-primary" />
            <span>+91 9446 80 6119</span>
          </div>
        </div>

        <div className="w-full border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Designed by @megha.das UI/UX designer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
