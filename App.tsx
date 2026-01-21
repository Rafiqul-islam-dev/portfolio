
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  ArrowRight,
  Send,
  ExternalLink,
  Code2, 
  Layers, 
  Smartphone, 
  Database, 
  Globe, 
  Server,
  GraduationCap,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { 
  EXPERIENCES, 
  PROJECTS, 
  SKILL_CATEGORIES, 
  SERVICES, 
  TESTIMONIALS,
  SOCIAL_LINKS 
} from './constants';
import profile from "./asset/profile.jpg";

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((reveal) => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('loading');

    // Simulating form submission to rafiqulislamsohel.bd@gmail.com
    // In a real production environment, you would use a service like Formspree, EmailJS, or a custom backend.
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error("Submission failed", error);
      setFormStatus('idle');
    }
  };

  const IconMap: any = {
    Globe: <Globe size={32} className="text-brand-500" />,
    Server: <Server size={32} className="text-brand-500" />,
    Layers: <Layers size={32} className="text-brand-500" />,
    Smartphone: <Smartphone size={32} className="text-brand-500" />,
    Database: <Database size={32} className="text-brand-500" />,
    Code2: <Code2 size={32} className="text-brand-500" />
  };


  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-brand-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left reveal">
              <span className="inline-block py-1 px-4 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-6">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
                I'm <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Rafiqul Islam Sohel</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                Software Developer | Laravel • PHP • React • Vue • Flutter
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                I entered IT after completing my graduation, driven by a passion for technology. 
                Following my graduation, I completed an intensive Web Design & Development course at <b>Creative IT</b>, setting the foundation for my professional journey.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                <a 
                  href="#contact" 
                  className="group relative overflow-hidden px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold transition-all hover:bg-brand-700 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-brand-500/20"
                >
                  <span className="absolute inset-0 btn-shimmer opacity-30 pointer-events-none"></span>
                  Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#projects" 
                  className="px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-500/5 font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  View Projects
                </a>
                <button 
                  className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-110 active:scale-90"
                  aria-label="Download CV"
                >
                  <Download size={20} />
                </button>
              </div>

              <div className="flex justify-center md:justify-start gap-5">
                {SOCIAL_LINKS.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    className="p-2 text-slate-500 hover:text-brand-500 hover:scale-125 transition-all duration-300" 
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative reveal">
              <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 mx-auto rounded-3xl overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={profile} 
                  alt="Rafiqul Islam Sohel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 hidden sm:block animate-float">
                <p className="text-brand-600 font-bold text-3xl">5+</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="About Me" 
            subtitle="My journey from graduation to professional software development"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal">
              <h3 className="text-2xl font-bold mb-6">A Passionate Developer Based in Dhaka</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                I am a dedicated Software Developer based in Dhaka, Bangladesh. My transition into the IT world began immediately after completing my graduation. To formalize my skills, I undertook a professional Web Design & Development course at Creative IT Institute.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Since 2019, I have been building high-quality web and mobile applications, focusing on scalable backend architectures and intuitive frontend interfaces. I specialize in the Laravel ecosystem but also enjoy working with React, Vue, and Flutter.
              </p>
              <div className="flex items-center gap-4 py-4 px-6 bg-brand-500/10 border border-brand-500/20 rounded-2xl">
                <GraduationCap className="text-brand-600" size={32} />
                <div>
                  <h4 className="font-bold text-brand-700 dark:text-brand-400">Education Background</h4>
                  <p className="text-slate-600 dark:text-slate-300">Govt. BM College, Barisal (Graduation Completed)</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal">
              {[
                { label: 'Location', value: 'Dhaka, Bangladesh', icon: <MapPin size={24} className="text-brand-500" /> },
                { label: 'Experience', value: '2019 – Present', icon: <Calendar size={24} className="text-brand-500" /> },
                { label: 'Focus', value: 'Web & Mobile Apps', icon: <Briefcase size={24} className="text-brand-500" /> },
                { label: 'Work Area', value: 'Gulshan/Niketan', icon: <MapPin size={24} className="text-brand-500" /> },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-brand-500 hover:scale-105 transition-all">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-slate-400 text-sm mb-1">{item.label}</h4>
                  <p className="font-bold text-slate-800 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="My Technical Arsenal" subtitle="Expertise across backend, frontend, and mobile platforms" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="reveal bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-500">
                <h3 className="text-xl font-bold mb-8 text-brand-600 flex items-center gap-2">
                  <Code2 size={24} /> {category.name}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-brand-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Work Experience" subtitle="My professional journey through the years" />
          
          <div className="space-y-8 relative before:absolute before:left-0 md:before:left-1/2 before:w-0.5 before:h-full before:bg-slate-200 dark:before:bg-slate-800 reveal">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[-5px] md:left-1/2 md:ml-[-10px] w-5 h-5 bg-brand-500 rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-lg shadow-brand-500/50"></div>
                
                <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                  <div className={`group p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <span className="text-brand-500 font-bold text-sm mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-brand-500 transition-colors">{exp.role}</h3>
                    <h4 className="text-slate-500 dark:text-slate-400 font-medium mb-3">{exp.company}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{exp.description}</p>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <MapPin size={14} className="group-hover:text-brand-500 transition-colors" /> {exp.location}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="A selection of my best work across various platforms" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="reveal group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.liveUrl} className="p-3 bg-white rounded-full text-brand-600 hover:bg-brand-600 hover:text-white hover:scale-110 active:scale-90 transition-all shadow-lg">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-900 hover:text-white hover:scale-110 active:scale-90 transition-all shadow-lg">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-500 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a href="#" className="group/link text-brand-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      View Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="My Expertise" subtitle="Professional services to help your business grow" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="reveal group p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-brand-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-6 w-16 h-16 bg-brand-50 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {IconMap[service.icon]}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-500 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl reveal border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-brand-600 p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-900/20 rounded-full blur-3xl"></div>
                
                <h2 className="text-3xl font-bold mb-6 relative z-10">Contact Info</h2>
                <p className="text-brand-100 mb-10 text-lg relative z-10">
                  Let's build something great together. Feel free to reach out for collaborations or inquiries.
                </p>
                
                <div className="space-y-8 relative z-10">
                  <div className="group flex items-start gap-4 hover:translate-x-2 transition-transform">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Me</h4>
                      <p className="text-brand-100">rafiqulislamsohel.bd@gmail.com</p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 hover:translate-x-2 transition-transform">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Call Me</h4>
                      <p className="text-brand-100">+880 1714963096</p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 hover:translate-x-2 transition-transform">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p className="text-brand-100">Gulshan, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex gap-4 relative z-10">
                  {SOCIAL_LINKS.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.href} 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-600 hover:scale-110 active:scale-90 transition-all"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 p-12 relative">
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                      <CheckCircle2 size={64} />
                    </div>
                    <h3 className="text-3xl font-bold">Message Sent Successfully!</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md">
                      Thank you for reaching out. Your message has been sent to <b>rafiqulislamsohel.bd@gmail.com</b>. I will get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-slate-500 mb-2 group-focus-within:text-brand-500 transition-colors">Full Name</label>
                          <input 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            type="text" 
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                            placeholder="John Doe" 
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm font-semibold text-slate-500 mb-2 group-focus-within:text-brand-500 transition-colors">Email Address</label>
                          <input 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            type="email" 
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                            placeholder="john@example.com" 
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-500 mb-2 group-focus-within:text-brand-500 transition-colors">Subject</label>
                        <input 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          type="text" 
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                          placeholder="Project Inquiry" 
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-500 mb-2 group-focus-within:text-brand-500 transition-colors">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5} 
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formStatus === 'loading'}
                        className="group relative overflow-hidden w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="absolute inset-0 btn-shimmer opacity-30 pointer-events-none"></span>
                        {formStatus === 'loading' ? (
                          <>Sending... <Loader2 size={18} className="animate-spin" /></>
                        ) : (
                          <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold font-display bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
              Rafiqul Islam Sohel
            </div>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Rafiqul Islam Sohel. All rights reserved.
            </p>

            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="p-2 text-slate-400 hover:text-brand-500 hover:scale-125 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
