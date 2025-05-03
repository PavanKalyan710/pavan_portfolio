import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <motion.p 
            className="text-green-400 text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Pavan Kalyan
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-4xl font-bold mb-6 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'I solve complex algorithms.',
                1000,
                'I optimize system performance.',
                1000,
                'I develop scalable architectures.',
                1000,
                'I engineer robust software.',
                1000,
                'I innovate with technology.',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </motion.div>
          
          <motion.p
            className="text-gray-300 max-w-lg mx-auto md:mx-0 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently focused on creating interactive web applications with modern technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-transparent border-2 border-purple-500 rounded-lg text-lg font-medium text-white hover:bg-purple-500/10 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image - Larger size and no rotation */}
        <motion.div
  className="w-72 h-72 md:w-96 md:h-96 mt-8 md:mt-0 md:ml-12 lg:ml-20"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
    ease: "easeInOut",
  }}
>
  <div className="relative w-full h-full">
    <img
      src="/assets/profile-pic.jpeg"
      alt="Pavan Kalyan"
      className="w-full h-full object-cover rounded-full border-4 border-purple-500/30"
      style={{
        boxShadow: '0 0 40px rgba(157, 0, 255, 0.5)',
      }}
    />
    <motion.div
      className="absolute inset-0 rounded-full border-4 border-transparent"
      animate={{
        boxShadow: [
          '0 0 30px rgba(157, 0, 255, 0.3)',
          '0 0 60px rgba(157, 0, 255, 0.5)',
          '0 0 30px rgba(157, 0, 255, 0.3)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}