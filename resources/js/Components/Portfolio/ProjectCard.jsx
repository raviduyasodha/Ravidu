import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, tags, github, live, image }) {
    return (
        <div className="group relative bg-slate-800/40 rounded-2xl border border-slate-700/50 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2">
            <div className="h-56 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="text-slate-400/40 group-hover:text-indigo-400/60 transition-colors duration-700">
                    <span className="text-4xl font-black tracking-tighter">{title}</span>
                </div>
            </div>

            <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-indigo-500/10 text-indigo-400 rounded-md border border-indigo-500/20">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

                <div className="flex items-center gap-4 mt-auto">
                    {github && (
                        <a href={github} target="_blank" className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600 transition-colors text-slate-200" title="GitHub">
                            <Github className="size-5" />
                        </a>
                    )}
                    {live && (
                        <a href={live} target="_blank" className="p-2 bg-indigo-500/20 rounded-lg hover:bg-indigo-500/30 transition-colors text-indigo-400" title="Live Preview">
                            <ExternalLink className="size-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
