import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
    {
        "id": 1,
        "role": "Founder & CEO",
        "company": "Brandverse",
        "period": "Present",
        "description": "Leading a full-service digital branding agency that delivers end-to-end solutions including UI/UX design, web development, and digital marketing. Oversee creative strategy for 50+ clients, managing cross-functional teams to build responsive websites, e-commerce platforms, and brand identities that drive engagement and growth.",
        "skills": [
          "Creative Direction",
          "Brand Strategy", 
          "Team Leadership",
          "Web Development Oversight",
          "Digital Marketing",
          "Client Relations",
          "E-Commerce Solutions"
        ]
      },
      {
        "id": 2,
        "role": "Cybersecurity Intern",
        "company": "Potalto Networks (AICTE)",
        "period": "2024 (1 month)",
        "description": "Conducted vulnerability assessments and penetration testing for enterprise networks. Assisted in implementing SIEM solutions and analyzed security logs for threat detection.",
        "skills": ["Network Security", "Penetration Testing", "SIEM Tools", "Threat Analysis"]
      }
]

export default function Experience() {  // Removed cursor props
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-neon-blue">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-neon-purple/30 transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-8">
                  <div className="bg-dark-bg border border-neon-blue/30 p-6 rounded-xl hover:border-neon-pink transition-all">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-neon-blue mb-3">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-dark-bg border border-neon-green rounded-full text-neon-green text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex items-center justify-center relative">
                  <div className="w-6 h-6 rounded-full bg-neon-pink border-4 border-dark-bg" />
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-0 h-full w-0.5 bg-neon-purple/20" />
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