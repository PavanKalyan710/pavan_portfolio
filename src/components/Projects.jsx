import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'


const projects = [
    {
        id: 1,
        title: "Homestay & Tourism Platform",
        description: "A comprehensive full-stack platform designed to revolutionize the homestay booking process. The platform offers users personalized accommodation recommendations based on preferences, while also providing detailed insights into nearby tourist attractions. Admins and hosts can manage their properties, bookings, and interact with customers effortlessly. Built with modern technologies, the platform ensures a smooth user experience and secure transactions.",
        tags: ["Java", "Spring Boot", "React", "MySQL"],
        image: "/assets/homestay-project.jpg",
        
        details: [
          "Implemented a secure authentication system using Spring Security for both users and admins.",
          "Developed a booking management system for users to search, filter, and book homestays.",
          "Created a personalized recommendation engine based on user preferences and past bookings.",
          "Built a comprehensive admin dashboard to allow hosts to manage bookings, properties, and customer feedback.",
          "Integrated local attraction guides into the platform to give users a holistic travel experience."
        ]
      },
      {
        id: 2,
        title: "Workshop Management System",
        description: "A dynamic MERN stack application designed for seamless workshop scheduling, participant management, and payment processing. The system offers an intuitive interface for both users and admins, enabling easy workshop registration, real-time updates, and secure transactions. With a focus on responsiveness and scalability, the platform is built to handle multiple users and large amounts of data efficiently.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        image: "/assets/workshop-project.jpg",
        
        details: [
          "Implemented real-time notifications to keep participants informed about workshop updates and changes.",
          "Developed an integrated payment processing system for secure registration fees collection.",
          "Created a comprehensive participant management dashboard for admins to track registrations, cancellations, and attendance.",
          "Built a sophisticated scheduling system with calendar integration to manage workshop dates and sessions.",
          "Designed responsive user interfaces using React to ensure accessibility across devices, with a focus on mobile optimization."
        ]
      },
      
  {
    id: 3,
    title: "BRANDVERSE Startup Website & Real-Time Client Analytics Dashboard",
    description: "Developed and launched the official website for my startup, BRANDVERSE, including a scalable real-time analytics dashboard using Firebase for seamless data sync and hosting. Delivers live client insights with zero lag.",
    tags: [
       
            "Firebase Firestore",
            "Firebase Hosting",
            "React",
            "JavaScript",
            "Real-time Data"
          
          
    ],
    image: "/assets/brandverse-website.jpg",
    link: "https://www.brandverseofficial.in", // Replace with your actual live site URL
     // Or provide link if the repo is public
    details: [
      "Built and deployed the official BRANDVERSE startup website",
      "Architected a real-time sync system with Firebase Firestore",
      "Hosted dashboard on Firebase for fast global delivery",
      "Designed client-customizable widgets (drag & drop UI)",
      "Secured data with Firebase Authentication (SSO support)",
      
    ]
}

]

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white text-center">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here are some of my selected works. Each project includes key features and technologies used.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-dark-bg/50 border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400 transition-all"
                onClick={() => setSelectedId(project.id)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-dark-bg border border-blue-400 rounded-full text-blue-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-dark-bg border-2 border-blue-400 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {projects.map((project) => (
                project.id === selectedId && (
                  <div key={project.id}>
                    <div className="h-64 md:h-80 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        className="absolute top-4 right-4 w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center border border-purple-500"
                        onClick={() => setSelectedId(null)}
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span className="text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 bg-dark-bg border border-blue-400 rounded-full text-blue-400 text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        
                      </div>
                    </div>
                  </div>
                )
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}