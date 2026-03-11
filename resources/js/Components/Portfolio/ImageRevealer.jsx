import { useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function ImageRevealer({ mainImage, hoverImage }) {
    const parentRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse position within the image
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);

    // Apply smoothing to the movement
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200 });

    const handleMouseMove = (e) => {
        if (!parentRef.current) return;
        const { left, top, width, height } = parentRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div
            ref={parentRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl group cursor-none"
        >
            {/* Base Image (Always visible: Human) */}
            <div className="absolute inset-0 z-0">
                <img src={mainImage} className="w-full h-full object-cover" alt="Human Side" />
            </div>

            {/* Revealed Image (Revealed inside the circle: Robot) */}
            <motion.div
                className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                style={{
                    clipPath: isHovering
                        ? `circle(120px at ${smoothX.get()}% ${smoothY.get()}%)`
                        : 'circle(0% at 50% 50%)',
                    WebkitClipPath: isHovering
                        ? `circle(120px at ${smoothX.get()}% ${smoothY.get()}%)`
                        : 'circle(0% at 50% 50%)',
                }}
            >
                <img src={hoverImage} className="w-full h-full object-cover" alt="Robot Reveal" />
            </motion.div>

            {/* Custom Lens Ring */}
            <motion.div
                className="absolute z-20 pointer-events-none border-2 border-indigo-400/50 rounded-full flex items-center justify-center bg-indigo-500/10 backdrop-blur-[1px]"
                animate={{
                    left: `${smoothX.get()}%`,
                    top: `${smoothY.get()}%`,
                    scale: isHovering ? 1 : 0,
                    opacity: isHovering ? 1 : 0
                }}
                style={{
                    width: '240px',
                    height: '240px',
                    marginLeft: '-120px',
                    marginTop: '-120px'
                }}
            >
                <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-tighter bg-slate-900/90 px-2 py-0.5 rounded border border-indigo-500/40 shadow-xl">
                    SENSING AI...
                </div>
            </motion.div>
        </div>
    );
}
