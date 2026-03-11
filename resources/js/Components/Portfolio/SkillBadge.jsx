export default function SkillBadge({ icon: Icon, name, level = "" }) {
    return (
        <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                <Icon className="size-6" />
            </div>
            <div>
                <span className="font-semibold text-slate-200 block">{name}</span>
                {level && <span className="text-xs text-slate-500">{level}</span>}
            </div>
        </div>
    );
}
