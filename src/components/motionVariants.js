export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}
