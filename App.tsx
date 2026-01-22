
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

import video from './asset/video.mp4';
import image from './asset/profile.jpg';

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

    try {
      // Simulate network delay for form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
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

      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            {/* Replace this URL with your actual uploaded video file path */}
            <source src={video} type="video/mp4" />
          </video>
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <span className="inline-block py-1.5 px-6 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-semibold mb-8 backdrop-blur-md">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
                I'm <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Rafiqul Islam Sohel</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                Software Developer | Laravel • PHP • React • Vue • Flutter
              </p>
            <p className="text-xl md:text-3xl text-slate-300 mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
              Crafting scalable <span className="text-white border-b-2 border-brand-500">Backend</span> and high-performance <span className="text-white border-b-2 border-brand-500">Web & Mobile App</span> solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-5 mb-12">
              <a 
                href="#contact" 
                className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-brand-600 text-white font-bold text-lg transition-all hover:bg-brand-500 hover:scale-105 active:scale-95 flex items-center gap-3 shadow-2xl shadow-brand-500/40"
              >
                <span className="absolute inset-0 btn-shimmer opacity-40 pointer-events-none"></span>
                Get In Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="px-10 py-5 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                Explore Work
              </a>
            </div>

            <div className="flex justify-center gap-8">
              {SOCIAL_LINKS.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="text-slate-400 hover:text-brand-400 hover:scale-125 transition-all duration-300" 
                  aria-label={link.label}
                >
                  {React.cloneElement(link.icon as React.ReactElement, { size: 28 })}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Me Section (Optimized Layout with Profile Image) */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="About Me" 
            subtitle="My journey from graduation to professional software development"
          />
          
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
            {/* Profile Image Column */}
            <div className="lg:col-span-5 relative reveal">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-100 dark:border-slate-800 shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-700 aspect-square max-w-md mx-auto">
                <img 
                  src={image} 
                  alt="Rafiqul Islam Sohel"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-brand-600 p-8 rounded-[2rem] shadow-2xl z-20 animate-float">
                <p className="text-white font-black text-5xl">5+</p>
                <p className="text-brand-100 text-sm font-bold uppercase tracking-wider">Years of<br/>Experience</p>
              </div>
              
              {/* Background decorative element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 reveal space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  Software Developer based in <span className="text-brand-600">Dhaka, Bangladesh</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  I entered IT after completing my graduation, driven by a passion for technology. My transition began with an intensive <b>Web Design & Development</b> course at <b>Creative IT Institute</b>, which shaped my professional trajectory.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Since 2019, I've specialized in building high-quality web and mobile applications. My expertise lies in the <b>Laravel</b> ecosystem, with deep experience in <b>PHP</b> backend architecture, <b>React</b> & <b>Vue</b> frontends, and cross-platform mobile apps with <b>Flutter</b>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-5 py-6 px-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-[2rem] hover:border-brand-500 transition-all">
                  <div className="w-12 h-12 bg-brand-500/10 text-brand-600 rounded-2xl flex items-center justify-center">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Education</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Govt. BM College, Barisal</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 py-6 px-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-[2rem] hover:border-brand-500 transition-all">
                  <div className="w-12 h-12 bg-brand-500/10 text-brand-600 rounded-2xl flex items-center justify-center">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Employment</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Full-time Professional</p>
                  </div>
                </div>
              </div>
              
              <div className="flex pt-4">
                {/* <button className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
                  <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                  Download My Resume
                </button> */}
              </div>
            </div>
          </div>

          {/* Additional Info Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal pt-10 border-t border-slate-100 dark:border-slate-800">
            {[
              { label: 'Location', value: 'Dhaka, BD', icon: <MapPin size={22} className="text-brand-500" /> },
              { label: 'Experience', value: '5+ Years', icon: <Calendar size={22} className="text-brand-500" /> },
              { label: 'Specialty', value: 'Full Stack', icon: <Code2 size={22} className="text-brand-500" /> },
              { label: 'Work Area', value: 'Gulshan', icon: <MapPin size={22} className="text-brand-500" /> },
            ].map((item, idx) => (
              <div key={idx} className="text-center md:text-left space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  {item.icon}
                  <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest">{item.label}</h4>
                </div>
                <p className="font-bold text-slate-800 dark:text-white text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-slate-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="My Technical Arsenal" subtitle="Expertise across backend, frontend, and mobile platforms" />
          
          <div className="grid md:grid-cols-3 gap-10">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="reveal bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 group">
                <h3 className="text-2xl font-bold mb-10 text-slate-900 dark:text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-500/10 text-brand-600 rounded-xl flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <Code2 size={24} />
                  </div> 
                  {category.name}
                </h3>
                <div className="space-y-8">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-3">
                        <span className="font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-brand-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
                        <div 
                          className="bg-brand-600 h-full rounded-full transition-all duration-1000 delay-300"
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
      <section id="experience" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Work Experience" subtitle="My professional journey through the years" />
          
          <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-0.5 before:h-full before:bg-slate-200 dark:before:bg-slate-800 reveal">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-10 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[-6px] md:left-1/2 md:ml-[-12px] w-6 h-6 bg-brand-600 rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-lg shadow-brand-500/50"></div>
                
                <div className="flex-1 md:w-1/2 pl-10 md:pl-0">
                  <div className={`group p-8 bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <span className="inline-block px-4 py-1 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-bold text-xs rounded-full mb-4 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-brand-600 transition-colors">{exp.role}</h3>
                    <h4 className="text-slate-500 dark:text-slate-400 font-bold mb-4">{exp.company}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <MapPin size={16} className="text-brand-500" /> {exp.location}
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
      <section id="services" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What I Do" subtitle="Professional services tailored for your unique business needs" />
          
          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="reveal group p-10 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 hover:border-brand-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 w-20 h-20 bg-brand-50 dark:bg-brand-900/30 rounded-3xl flex items-center justify-center group-hover:bg-brand-600 transition-all duration-500 shadow-inner">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {IconMap[service.icon]}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-5 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-[4rem] overflow-hidden shadow-2xl reveal border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 bg-brand-600 p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-900/20 rounded-full blur-3xl"></div>
                
                <h2 className="text-4xl font-bold mb-8 relative z-10">Contact Info</h2>
                <p className="text-brand-100 mb-12 text-lg relative z-10 leading-relaxed">
                  Have a project in mind or just want to say hi? I'm always open to discussing new ideas, opportunities, or collaborations.
                </p>
                
                <div className="space-y-10 relative z-10">
                  <div className="group flex items-center gap-6 hover:translate-x-3 transition-transform">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-brand-200 mb-1">Email Me</h4>
                      <p className="text-xl font-bold">rafiqulislamsohel.bd@gmail.com</p>
                    </div>
                  </div>
                  <div className="group flex items-center gap-6 hover:translate-x-3 transition-transform">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-brand-200 mb-1">Call Me</h4>
                      <p className="text-xl font-bold">+880 1714963096</p>
                    </div>
                  </div>
                  <div className="group flex items-center gap-6 hover:translate-x-3 transition-transform">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-brand-200 mb-1">Location</h4>
                      <p className="text-xl font-bold">Gulshan, Dhaka, BD</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20 flex gap-6 relative z-10">
                  {SOCIAL_LINKS.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.href} 
                      className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-600 hover:scale-110 active:scale-90 transition-all shadow-xl"
                      aria-label={link.label}
                    >
                      {React.cloneElement(link.icon as React.ReactElement, { size: 24 })}
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:w-3/5 p-16 relative">
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-500">
                    <div className="w-32 h-32 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center animate-bounce shadow-xl">
                      <CheckCircle2 size={80} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black text-slate-900 dark:text-white">Success!</h3>
                      <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-lg">
                        Thank you for reaching out, Sohel will get back to you shortly.
                      </p>
                    </div>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="px-10 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-xl"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-4xl font-bold mb-10 text-slate-900 dark:text-white">Send Me a Message</h3>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="group">
                          <label className="block text-sm font-bold text-slate-500 mb-3 group-focus-within:text-brand-500 transition-colors uppercase tracking-widest">Full Name</label>
                          <input 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            type="text" 
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium" 
                            placeholder="Your Name" 
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm font-bold text-slate-500 mb-3 group-focus-within:text-brand-500 transition-colors uppercase tracking-widest">Email Address</label>
                          <input 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            type="email" 
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium" 
                            placeholder="name@email.com" 
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-bold text-slate-500 mb-3 group-focus-within:text-brand-500 transition-colors uppercase tracking-widest">Subject</label>
                        <input 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          type="text" 
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium" 
                          placeholder="How can I help you?" 
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-bold text-slate-500 mb-3 group-focus-within:text-brand-500 transition-colors uppercase tracking-widest">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6} 
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium" 
                          placeholder="Project details..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formStatus === 'loading'}
                        className="group relative overflow-hidden w-full py-5 bg-brand-600 hover:bg-brand-700 text-white font-black text-xl rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-brand-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="absolute inset-0 btn-shimmer opacity-40 pointer-events-none"></span>
                        {formStatus === 'loading' ? (
                          <>Sending... <Loader2 size={24} className="animate-spin" /></>
                        ) : (
                          <>Send Message <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
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
      <footer className="py-20 bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-3xl font-black font-display bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent hover:scale-110 transition-transform cursor-pointer">
              R.S.
            </div>
            
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium text-center">
              &copy; {new Date().getFullYear()} Rafiqul Islam Sohel. Crafting digital excellence from Dhaka.
            </p>

            <div className="flex gap-8">
              {SOCIAL_LINKS.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="p-3 text-slate-400 hover:text-brand-600 hover:scale-125 transition-all duration-300"
                  aria-label={link.label}
                >
                  {React.cloneElement(link.icon as React.ReactElement, { size: 24 })}
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
