"use client"
import { motion } from "framer-motion"

const Section = ({ children, id, className = "", background = "white", ...props }) => {
  const backgrounds = {
    white: "bg-white",
    fondo: "bg-fondo",
    gradient: "bg-gradient-to-br from-fondo to-white",
    dark: "bg-gray-900",
    primary: "bg-gradient-to-br from-uno to-divisiones",
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id={id}
      className={`py-20 ${backgrounds[background]} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default Section
