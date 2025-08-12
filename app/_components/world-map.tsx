"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const pins = [
  { top: "30%", left: "24%", label: "Americas" },
  { top: "42%", left: "52%", label: "EMEA" },
  { top: "55%", left: "78%", label: "APAC" },
]

export function WorldMap() {
  return (
    <div className="relative rounded-xl border overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30">
      <img src="/abstract-world-map.png" alt="World map" className="w-full h-72 object-cover" />
      {pins.map((p, idx) => (
        <div key={idx} className="absolute" style={{ top: p.top, left: p.left }}>
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <span className="absolute -inset-2 rounded-full bg-indigo-500/20 animate-ping" />
            <MapPin className="relative z-10 text-indigo-600 dark:text-indigo-400" />
          </motion.div>
          <div className="absolute left-5 top-1 text-xs bg-background/80 backdrop-blur rounded px-2 py-0.5 border">
            {p.label}
          </div>
        </div>
      ))}
    </div>
  )
}
