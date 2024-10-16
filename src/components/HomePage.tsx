"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { BookOpen, Gamepad2, Brain } from 'lucide-react'

const AnimatedBackground: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }
  }

  const patternX = useTransform(mouseX, (value) => value / 50)
  const patternY = useTransform(mouseY, (value) => value / 50)

  return (
    <div ref={ref} className="fixed inset-0 z-0" onMouseMove={handleMouseMove}>
      <motion.svg
        className="w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        style={{ x: patternX, y: patternY }}
      >
        <defs>
          <pattern id="neurons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="#FFB3BA" />
            <line x1="50" y1="50" x2="150" y2="50" stroke="#FFB3BA" strokeWidth="0.5">
              <animate attributeName="x2" values="50;150;50" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="50" y1="50" x2="50" y2="150" stroke="#FFB3BA" strokeWidth="0.5">
              <animate attributeName="y2" values="50;150;50" dur="3s" repeatCount="indefinite" />
            </line>
          </pattern>
          <pattern id="dna" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M30 100 Q50 50 70 100 T110 100" fill="none" stroke="#BFBFFF" strokeWidth="0.5">
              <animate attributeName="d" values="M30 100 Q50 50 70 100 T110 100;M30 100 Q50 150 70 100 T110 100;M30 100 Q50 50 70 100 T110 100" dur="5s" repeatCount="indefinite" />
            </path>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#neurons)" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dna)" />
      </motion.svg>
    </div>
  )
}

const HomePage: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-lavender-200 to-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-purple-700">
            Human Physiology II and Electrophysiology
          </h1>
          <p className="text-2xl text-pink-600 max-w-3xl mx-auto">
            Explore, Learn, and Challenge Yourself in the World of Cardiovascular Diseases: With a healthy heart, the beat goes on!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { title: 'Learn', icon: BookOpen, description: '27 Cardiovascular pathologies', link: '/learn' },
            { title: 'Game', icon: Gamepad2, description: 'Test your knowledge', link: '/game' },
            { title: 'Heart Disease Detection', icon: Brain, description: 'Powered diagnostics', link: '/model-prediction' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
            >
              <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-purple-700" />
                </div>
                <h2 className="text-3xl font-semibold text-purple-700 mb-4">{item.title}</h2>
                <p className="text-pink-600 mb-6 text-lg">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block px-6 py-3 bg-lavender-300 text-purple-700 rounded-full text-lg font-semibold hover:bg-pink-200 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-purple-600 mb-6 text-xl">Ready to dive into the fascinating world of ECG waves?</p>
          <a
            href="/learn"
            className="inline-block px-8 py-4 bg-pink-300 text-purple-700 rounded-full text-xl font-bold hover:bg-lavender-300 transition-colors transform hover:scale-105"
          >
            Start Your Journey Now
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage