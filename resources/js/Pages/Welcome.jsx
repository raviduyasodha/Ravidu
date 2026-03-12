import { Head, Link } from '@inertiajs/react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Code, Database, Cpu, Layout, Globe, Mail,
    Github, Linkedin, Twitter, ExternalLink,
    Terminal, Server, Box, Layers, Zap,
    ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Section from '@/Components/Portfolio/Section';
import SkillBadge from '@/Components/Portfolio/SkillBadge';
import ProjectCard from '@/Components/Portfolio/ProjectCard';
import CursorFollower from '@/Components/Portfolio/CursorFollower';
import ParticleBackground from '@/Components/Portfolio/ParticleBackground';
import ImageRevealer from '@/Components/Portfolio/ImageRevealer';

export default function Welcome({ auth }) {
    const { scrollYProgress } = useScroll();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({
            x: (e.clientX - window.innerWidth / 2) / 20,
            y: (e.clientY - window.innerHeight / 2) / 20
        });
    };

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = [
        { name: 'Laravel 11+', icon: Database, level: 'Expert' },
        { name: 'React.js', icon: Code, level: 'Expert' },
        { name: 'Inertia.js', icon: Layers, level: 'Advanced' },
        { name: 'Tailwind CSS', icon: Layout, level: 'Expert' },
        { name: 'PHP 8.3/8.4', icon: Terminal, level: 'Expert' },
        { name: 'MySQL/PostgreSQL', icon: Server, level: 'Expert' },
        { name: 'Docker/DevOps', icon: Box, level: 'Advanced' },
        { name: 'API Design (REST)', icon: Globe, level: 'Expert' },
        { name: 'Advanced JS/TS', icon: Cpu, level: 'Expert' },
        { name: 'System Arch', icon: Zap, level: 'Advanced' }
    ];

    const projects = [
        {
            title: "ERP Business Suite",
            description: "A comprehensive ERP system built with Laravel + MySql + Bootstrap. Manages inventory, sales, and employee payroll with real-time analytics.",
            tags: ["Laravel", "MySQL", "Bootstrap"],
            github: "#",
            live: "#"
        },
        {
            title: "Fully Functional Dynamic Website",
            description: "A dynamic website built with Laravel + MySql + Bootstrap. Manages inventory, sales, and employee payroll with real-time analytics.",
            tags: ["Laravel", "MySQL", "Bootstrap"],
            github: "#",
            live: "#"
        },
        {
            title: "Moder UI Static Website",
            description: "A static website built with Laravel + React + Tailwind. Manages inventory, sales, and employee payroll with real-time analytics.",
            tags: ["Laravel", "React", "Tailwind"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <div
            className="bg-[#0f172a] text-slate-300 selection:bg-indigo-500/30 selection:text-indigo-400 min-h-screen relative overflow-x-hidden"
            onMouseMove={handleMouseMove}
        >
            <Head title="Ravidu Yasodha - Full Stack Web Developer" />

            {/* Ambient Base Layer */}
            <div className="fixed inset-0 z-0 opacity-100">
                <ParticleBackground />
            </div>

            <CursorFollower />

            {/* Content Wrapper (Above Background) */}
            <div className="relative z-10">
                {/* Scroll Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[100] origin-left"
                    style={{ scaleX }}
                />

                {/* Navigation */}
                <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xl font-black text-slate-100 italic"
                        >
                            RAVIDU<span className="text-indigo-500 ml-1">Yasodha</span>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-8">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-indigo-400 transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/hero_bg.png" className="w-full h-full object-cover opacity-50" alt="Background" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 via-[#0f172a] to-[#0f172a]/70"></div>
                    </div>

                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest rounded-full border border-indigo-500/20 mb-6">
                                Available for hire
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
                                <motion.span
                                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] inline-block"
                                >
                                    Full Stack
                                </motion.span> Web Developer

                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light italic">
                                Specializing in deep-level <span className="text-slate-200 font-medium">Laravel architecture</span> and high-performance <span className="text-slate-200 font-medium">React ecosystems</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all transform hover:-translate-y-1">
                                    View My Work
                                </a>
                                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl transition-all transform hover:-translate-y-1">
                                    Let's Discuss
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
                    >
                        <ChevronDown className="size-8" />
                    </motion.div>
                </section>

                {/* Skills Section */}
                <Section id="skills" title="Technical Arsenal">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <SkillBadge icon={skill.icon} name={skill.name} level={skill.level} />
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Projects Section */}
                <Section id="projects" title="Featured Work" className="bg-slate-800/20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* About / Experience Section */}
                <Section id="about" title="Philosophy & Approach">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative flex justify-center lg:justify-end lg:order-1">
                            <ImageRevealer
                                mainImage="/images/me.png"
                                hoverImage="/images/robo.png"
                            />
                        </div>

                        <div className="space-y-6 lg:order-2">
                            <p className="text-xl text-slate-300 leading-relaxed italic">
                                "I specialize in turning client ideas into real digital solutions while identifying real-world problems and solving them through technology."
                            </p>
                            <p className="text-slate-400">
                                I focus on writing clean, readable code and following industry best practices. My expertise lies in orchestrating Laravel's powerful backend features with React's dynamic frontend capabilities via Inertia.js.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg mt-1"><Zap className="size-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Performance-First Mindset</h4>
                                        <p className="text-sm text-slate-400">Optimizing database queries, implementing caching strategies, and lazy-loading frontend assets.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg mt-1"><Terminal className="size-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Full-Stack Sovereignty</h4>
                                        <p className="text-sm text-slate-400">From server provisioning and CI/CD pipelines to pixel-perfect UI execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 relative">
                        <div className="relative">
                            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                                <Code className="text-indigo-500" />
                                Professional Timeline
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { year: '2025 - Pres', role: 'Intern Full Stack Web Developer', company: 'WCL PVT LTD' },
                                    { year: '2025 - 2025', role: 'Graphic designer & UI disigner', company: 'Tecxa PVT LTD' },
                                    { year: '2024 - 2025', role: 'POS system Admin', company: 'Bandara & Sons PVT LTD' }
                                ].map((exp) => (
                                    <div key={exp.year} className="flex flex-col gap-2 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group">
                                        <div className="text-xs font-mono text-indigo-400 uppercase tracking-tighter opacity-60 group-hover:opacity-100">{exp.year}</div>
                                        <h5 className="font-bold text-white text-lg">{exp.role}</h5>
                                        <p className="text-sm text-slate-500">{exp.company}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Footer / Contact */}
                <footer id="contact" className="py-32 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-12">Let's build something massive.</h2>
                            <div className="flex flex-wrap justify-center gap-6 mb-16">
                                <a href="mailto:raviduyasodha9@gmail.com" className="flex items-center gap-3 text-lg font-medium hover:text-indigo-400 transition-colors">
                                    <Mail className="size-6 text-indigo-500" />
                                    <span>raviduyasodha9@gmail.com</span>
                                </a>
                            </div>

                            <div className="flex justify-center gap-8 mb-20 text-slate-500">
                                <Link href="#" className="hover:text-indigo-400 transition-colors"><Github className="size-7" /></Link>
                                <Link href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="size-7" /></Link>
                                <Link href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="size-7" /></Link>
                            </div>

                            <p className="text-slate-600 text-sm italic">
                                &copy; {new Date().getFullYear()} Ravidu Portfolio - Optimized for Performance
                            </p>
                        </motion.div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
