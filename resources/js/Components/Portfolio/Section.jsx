import { motion } from 'framer-motion';

export default function Section({ children, title, id, className = "" }) {
    return (
        <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-4">
                        <span className="h-1 w-12 bg-indigo-500 rounded-full"></span>
                        {title}
                    </h2>
                )}
                {children}
            </motion.div>
        </section>
    );
}
