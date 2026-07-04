import { motion } from 'framer-motion'

/* Shared scroll-reveal wrapper — fade + rise on first view, once. */
export default function Reveal({ children, delay = 0, y = 20, as: Tag = motion.div, className, style }) {
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}
