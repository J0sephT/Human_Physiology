"use client"

import React from 'react';
import { Home, Heart, Brain, Book, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = React.useState('/');

  const navItems = [
    { path: '/learn', icon: Book, label: 'Learn' },
    { path: '/game', icon: Brain, label: 'Game' },
    { path: '/model-prediction', icon: Activity, label: 'Prediction' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-lavender-200 to-white text-purple-700">
      <header className="bg-white bg-opacity-70 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center group" onClick={() => setCurrentPath('/')}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="text-pink-500 mr-2" size={32} />
            </motion.div>
            <h1 className="text-2xl font-bold text-pink-600 group-hover:text-purple-700 transition-colors duration-300">
              Human Physiology II
            </h1>
          </a>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setCurrentPath(item.path)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  currentPath === item.path
                    ? 'bg-pink-300 text-purple-700'
                    : 'text-purple-600 hover:bg-lavender-300 hover:text-purple-700'
                } transition-colors duration-300`}
              >
                <item.icon className="mr-1" size={18} />
                {item.label}
              </a>
            ))}
            {currentPath !== '/' && (
              <a
                href="/"
                onClick={() => setCurrentPath('/')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-purple-600 hover:bg-lavender-300 hover:text-purple-700 transition-colors duration-300"
              >
                <Home className="mr-1" size={18} />
                Home
              </a>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <footer className="bg-white bg-opacity-70 text-purple-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; 2024 Salomé Verdugo, Dayana Murillo, and Dylan Garrido</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/watch?v=QB7ACr7pUuE" className="text-purple-600 hover:text-pink-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-purple-600 hover:text-pink-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-purple-600 hover:text-pink-500 transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;