"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

type Props = {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export function TiltCard({ children, asChild = false, className }: Props) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
