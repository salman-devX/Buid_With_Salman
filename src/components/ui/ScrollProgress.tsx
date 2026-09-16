"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-signal-ember via-signal-gold to-signal-amber shadow-[0_0_12px_rgba(0,245,155,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
}
