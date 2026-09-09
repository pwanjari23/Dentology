"use client";

import { motion } from "framer-motion";

const droplets = [
  { id: 1, top: "22%", left: "48%", size: 4, delay: 0, duration: 1.8 },
  { id: 2, top: "20%", left: "55%", size: 6, delay: 0.3, duration: 2.2 },
  { id: 3, top: "18%", left: "62%", size: 3, delay: 0.6, duration: 1.6 },
  { id: 4, top: "24%", left: "42%", size: 5, delay: 0.9, duration: 2.0 },
  { id: 5, top: "19%", left: "52%", size: 4, delay: 1.2, duration: 1.9 },
  { id: 6, top: "25%", left: "68%", size: 5, delay: 0.4, duration: 2.4 },
  { id: 7, top: "34%", left: "28%", size: 4, delay: 0.7, duration: 1.7 },
  { id: 8, top: "36%", left: "32%", size: 5, delay: 1.1, duration: 2.1 },
];

export default function WaterMistParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {droplets.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_#ffffff]"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
          }}
          animate={{
            y: [-6, -24, -36],
            x: [0, (d.id % 2 === 0 ? 8 : -8), (d.id % 2 === 0 ? 14 : -14)],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.2, 0.2],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
