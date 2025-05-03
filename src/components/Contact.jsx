import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required')
})

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true)
      fetch('https://formsubmit.co/ajax/pavankalyanakina7@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message
        })
      })
      .then(response => response.json())
      .then(() => {
        setSubmitStatus('success')
        resetForm()
      })
      .catch(() => {
        setSubmitStatus('error')
      })
      .finally(() => {
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 5000)
      })
    }
  })

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-neon-pink glow-soft">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-dark-bg/50 border border-neon-purple/30 rounded-xl p-8 neon-box">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/10 border border-neon-blue flex items-center justify-center mr-4">
                      ✉️
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Email</h4>
                      <a
                        href="mailto:pavankalyanakina7@gmail.com"
                        className="text-white hover:text-neon-pink transition-colors"
                      >
                        pavankalyanakina7@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 border border-neon-green flex items-center justify-center mr-4">
                      📍
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Location</h4>
                      <p className="text-white">Etikoppaka, Anakapalle, AP</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-neon-pink/10 border border-neon-pink flex items-center justify-center mr-4">
                      🔗
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Social</h4>
                      <div className="flex space-x-4 mt-1">
                        <a href="https://github.com/PavanKalyan710/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors">
                          GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/akina-pavan-kalyan-335834249/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue transition-colors">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={formik.handleSubmit} className="bg-dark-bg/50 border border-neon-blue/30 rounded-xl p-8 neon-box">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-400 text-sm mt-1">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-400 text-sm mt-1">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors resize-none"
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-400 text-sm mt-1">{formik.errors.message}</div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-neon-purple/20 border border-neon-purple rounded-lg hover:bg-neon-purple/40 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-900/30 border border-green-500 rounded-lg text-green-400 text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-900/30 border border-red-500 rounded-lg text-red-400 text-center"
                  >
                    Failed to send message. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}