// components/HeroSection.jsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for the floating effect
  const floatingVariants = {
    initial: { 
      y: 0,
      rotate: 0,
      scale: 0.8,
      opacity: 0
    },
    animate: (index) => ({
      y: [0, -15, 0],
      rotate: [-3, 3, -3],
      scale: 1,
      opacity: 1,
      transition: {
        y: {
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 5 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.8,
          delay: index * 0.15,
          ease: "backOut"
        },
        opacity: {
          duration: 0.8,
          delay: index * 0.15,
          ease: "easeOut"
        }
      }
    })
  };

  // Text animation variants
  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 30 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const subtextVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Sample images data - replace with your actual images
  const leftImages = [
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=entropy",
      alt: "Business meeting",
      className: "w-44 h-48 rounded-2xl shadow-2xl",
      width: 176,
      height: 192
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=350&h=250&fit=crop&crop=entropy",
      alt: "Analytics dashboard",
      className: "w-72 h-52 rounded-xl shadow-xl",
      width: 288,
      height: 208
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop&crop=entropy",
      alt: "Team collaboration",
      className: "w-56 h-40 rounded-lg shadow-lg",
      width: 224,
      height: 160
    }
  ];

  const rightImages = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy",
      alt: "Data visualization",
      className: "w-30 h-44 rounded-xl shadow-xl",
      width: 120,
      height: 176
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=350&h=280&fit=crop&crop=entropy",
      alt: "Mobile interface",
      className: "w-60 h-40 rounded-2xl shadow-2xl",
      width: 240,
      height: 160
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=320&h=240&fit=crop&crop=entropy",
      alt: "Digital marketing",
      className: "w-32 h-32 rounded-lg shadow-lg",
      width: 128,
      height: 128
    }
  ];

  if (!mounted) return null;

  return (
   <section className="relative h-screen bg-[#111] overflow-hidden pt-0 pb px-4 lg:pt-20 lg:py-20">
      <div className="relative max-w-7xl h-screen mx-auto">
        <div className="grid grid-cols-1 h-screen lg:grid-cols-12 gap-8 items-center ">
          
          {/* Left floating images */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="space-y-8">
              {leftImages.map((image, index) => (
                <motion.div
                  key={`left-${index}`}
                  custom={index}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className={`relative ${index === 1 ? '-ml-20' : index === 2 ? 'ml-10' : ''}`}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0,
                    transition: { duration: 1 } 
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className={`${image.className} object-cover border border-white/10 backdrop-blur-sm`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-inherit"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center content */}
          <div className="lg:col-span-6 text-center px-auto lg:px-4">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="font-display mt-6 word-wide text-6xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-9xl 2xl:text-[8rem]  mb-6 text-center leading-none"
            >
              <span className="text-white font-sans font-extrabold block">360°</span>
              <span className="text-[#7D4199]  flex items-center justify-center gap-2 lg:gap-4 z-0">
                DIGITAL
                <svg
                  className="  -rotate-30 absolute hidden lg:block left-[64%] w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text- z-10 animate-pulse"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 17L3 12L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 3L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-white block">SOLUTIONS</span>
            </motion.h1>

            <motion.p
              variants={subtextVariants}
              initial="initial"
              animate="animate"
              className="text-gray-300 font-paragraph text-lg sm:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Empowering top brands and organizations with high-impact websites and performance-focused digital marketing strategies.
            </motion.p>
            <div className="flex justify-center mt-10">
      
              <Link href="/contact">
                <motion.button
                  className="  px-8 py-4 border-2 cursor-pointer mb-4 border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white"
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{
                    boxShadow: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 0 0 8px rgba(125, 65, 153, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Get Started Now
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right floating images */}
          <div className="hidden lg:block ml-24 lg:col-span-3 relative">
            <div className="space-y-8">
              {rightImages.map((image, index) => (
                <motion.div
                  key={`right-${index}`}
                  custom={index + 3}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className={`relative ${index === 1 ? 'mr-10' : index === 2 ? 'mr-12' : ''}`}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className={`${image.className} object-cover border border-white/10 backdrop-blur-sm`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-inherit"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile minimalist graphics - Top decorative elements */}
        <div className="lg:hidden absolute top-20 left-0 right-0 pointer-events-none">
          {/* Floating gradient orbs */}
          <motion.div
            className="absolute top-10 left-8 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-32 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Geometric shapes */}
          <motion.div
            className="absolute top-16 right-12"
            animate={{
              rotate: [0, 360],
              y: [0, -10, 0]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#7D4199" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-28 left-16"
            animate={{
              rotate: [0, -180, 0],
              y: [0, 10, 0]
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M15 2 L28 26 L2 26 Z" stroke="#7D4199" strokeWidth="1.5" opacity="0.3" fill="none"/>
            </svg>
          </motion.div>

          {/* Abstract digital icons */}
          <motion.div
            className="absolute top-24 left-6"
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 6L3 12L8 18" stroke="#7D4199" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 6L21 12L16 18" stroke="#7D4199" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-20 right-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" stroke="#7D4199" strokeWidth="1.5" opacity="0.4" rx="2"/>
            </svg>
          </motion.div>
        </div>

        {/* Mobile minimalist graphics - Bottom decorative elements */}
        <div className="lg:hidden absolute bottom-32 left-0 right-0 pointer-events-none">
          {/* Floating gradient orbs */}
          <motion.div
            className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-10 left-6 w-36 h-36 rounded-full bg-gradient-to-br from-pink-500/15 to-purple-500/15 blur-2xl"
            animate={{
              y: [0, -18, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />

          {/* Geometric shapes */}
          <motion.div
            className="absolute bottom-24 left-12"
            animate={{
              rotate: [0, -360],
              y: [0, 12, 0]
            }}
            transition={{
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <circle cx="17.5" cy="17.5" r="15" stroke="#7D4199" strokeWidth="1.5" opacity="0.35"/>
              <circle cx="17.5" cy="17.5" r="8" stroke="#7D4199" strokeWidth="1" opacity="0.5"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-16 right-16"
            animate={{
              rotate: [0, 180, 0],
              y: [0, -12, 0]
            }}
            transition={{
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="4" y="4" width="20" height="20" stroke="#7D4199" strokeWidth="1.5" opacity="0.4" rx="3" transform="rotate(45 14 14)"/>
            </svg>
          </motion.div>

          {/* Abstract digital icons */}
          <motion.div
            className="absolute bottom-28 right-8"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="3" fill="#7D4199" opacity="0.5"/>
              <circle cx="13" cy="13" r="8" stroke="#7D4199" strokeWidth="1.5" opacity="0.3" strokeDasharray="2 3"/>
              <circle cx="13" cy="13" r="11" stroke="#7D4199" strokeWidth="1" opacity="0.2" strokeDasharray="3 4"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-20"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2 L20 11 L11 20 L2 11 Z" stroke="#7D4199" strokeWidth="1.5" opacity="0.4" fill="none"/>
            </svg>
          </motion.div>

          {/* Decorative lines and dots */}
          <motion.div
            className="absolute bottom-20 left-8"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleX: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="60" height="2" viewBox="0 0 60 2" fill="none">
              <line x1="0" y1="1" x2="60" y2="1" stroke="#7D4199" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-32 right-12"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <svg width="4" height="40" viewBox="0 0 4 40" fill="none">
              <line x1="2" y1="0" x2="2" y2="40" stroke="#7D4199" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3"/>
            </svg>
          </motion.div>

          {/* Small accent dots */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                bottom: `${15 + (i % 2) * 8}px`
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            >
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                <circle cx="3" cy="3" r="2" fill="#7D4199" opacity="0.4"/>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Mobile floating images - kept at bottom */}
        <div className="lg:hidden mt-12">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {[...leftImages.slice(0, 2), ...rightImages.slice(0, 2)].map((image, index) => (
              <motion.div
                key={`mobile-${index}`}
                custom={index}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 } 
                }}
                className="relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg shadow-lg border border-white/10"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;