import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    institution: "K L University",
    year: "2022 - 2026",
    description: "Specialized in Cybersecurity and Blockchain Technology within Computer Science and Engineering, with a focus on secure decentralized systems, cryptographic protocols, and blockchain-based applications.",
    performance: "CGPA: 8.87/10 (Current)"
  },
  {
    id: 2,
    degree: "Intermediate (12th Grade)",
    institution: "Sri Chaitanya Junior College",
    year: "2020 - 2022",
    description: "Specialized in Mathematics, Physics, and Chemistry with computer science electives.",
    performance: "Percentage: 94.6%"
  },
  {
    id: 3,
    degree: "High School (10th Grade)",
    institution: "Sri Chaitanya Techno School",
    year: "2019 - 2020",
    description: "Completed Andhra Pradesh State Board curriculum with distinction in Mathematics and Science. Early exposure to programming through school computer labs.",
    performance: "CGPA: 10/10"
  }
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="education" className="py-20 bg-dark-bg/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-purple-500/30 transform -translate-x-1/2" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-bg border border-purple-500/30 p-6 rounded-xl hover:border-purple-400 transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-purple-400 mb-2">{edu.institution} • {edu.year}</p>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <p className="text-blue-400 font-medium">
                      {edu.performance}
                    </p>
                  </motion.div>
                </div>
                <div className="w-1/2 flex items-center justify-center relative">
                  <div className="w-6 h-6 rounded-full bg-purple-500 border-4 border-dark-bg" />
                  {index !== educationData.length - 1 && (
                    <div className="absolute top-0 h-full w-0.5 bg-purple-500/20" />
                  )}
                </div>
                <div className="w-1/2 px-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}