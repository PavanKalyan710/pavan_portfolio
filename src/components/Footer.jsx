import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble
} from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h3
            className="text-2xl font-bold text-neon-pink mb-6"
          >
            Let's Build Something Amazing
          </h3>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/PavanKalyan710"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-pink transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akina-pavan-kalyan-335834249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-pink transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
          </div>

          <p className="text-gray-500 text-sm">
            Designed & Built with  by Pavan Kalyan • © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
