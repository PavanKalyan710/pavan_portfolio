import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'JavaScript', level: 90, color: '#f0db4f' },
  { name: 'React', level: 85, color: '#61dafb' },
  { name: 'MySQL', level: 85, color: '#68a063' },
  { name: 'Node.js', level: 85, color: '#68a063' },
  { name: 'Next.js', level: 80, color: '#007acc' },
  { name: 'Tailwind CSS', level: 90, color: '#38b2ac' },
  { name: 'Java', level: 75, color: '#f89820' },
  { name: 'PostgreSQL', level: 80, color: '#336791' }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            About Me
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-300 mb-6">
              Hello! I'm Pavan Kalyan, a passionate Computer Science Engineer and full-stack developer. I enjoy creating efficient, user-friendly web applications that solve real problems with clean code.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in development began when I built my first full-stack project - an e-commerce dashboard. That experience taught me how powerful web technologies can be when combined with strong computer science fundamentals.
            </p>
            <p className="text-gray-300 mb-6">
              I've since worked on various projects ranging from enterprise applications to interactive web tools, always focusing on building accessible, performant products with great user experiences.
            </p>
            <p className="text-gray-300">
              Here are the technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {[
                'JavaScript (ES6+)',
                'React',
                'Next.js',
                'Node.js',
                'Express',
                'PostgreSQL',
                'MySQL',
                'Tailwind CSS',
                'Java',
                'Three.js'
              ].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                  <span className="text-gray-300">{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-white">
              My Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + skills.indexOf(skill) * 0.1 }}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + skills.indexOf(skill) * 0.1 }}
                      className="h-2.5 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}