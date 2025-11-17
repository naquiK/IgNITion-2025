import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Gallery() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  const gallerySample = [
    {
      id: 1,
      title: 'Coding Challenge 2024',
      category: 'Competition',
      image: '/coding-competition-tech-fest.jpg',
    },
    {
      id: 2,
      title: 'Hackathon Winners',
      category: 'Winners',
      image: '/hackathon-winners-celebration.jpg',
    },
    {
      id: 3,
      title: 'Tech Exhibition',
      category: 'Exhibition',
      image: '/technology-exhibition-showcase.jpg',
    },
    {
      id: 4,
      title: 'Keynote Session',
      category: 'Speakers',
      image: '/tech-conference-keynote-speaker.jpg',
    },
    {
      id: 5,
      title: 'Networking Event',
      category: 'Community',
      image: '/tech-networking-event-crowd.jpg',
    },
    {
      id: 6,
      title: 'Workshop Session',
      category: 'Learning',
      image: '/tech-workshop-learning-session.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id='gallery' className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0e27] via-[#1a0033] to-[#0a0e27] relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              color: '#00ff88',
              textShadow: '0 0 30px rgba(0, 255, 136, 0.8)',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.1em',
            }}
          >
            [ MEMORY ARCHIVE ]
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-green-500 mb-6" />
          <p
            style={{
              color: 'rgba(0, 255, 136, 0.7)',
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
            }}
          >
            PREVIOUS TECH FEST GLIMS | RELIVE THE MOMENTS
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {gallerySample.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden hud-frame"
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 136, 0.03) 0px, rgba(0, 255, 136, 0.03) 1px, transparent 1px, transparent 2px)',
                      animation: 'scan-line 8s linear infinite',
                    }}
                  />
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="border-t-2 border-cyan-500 pt-4">
                  <p
                    className="text-xs font-bold mb-2"
                    style={{
                      color: '#0099ff',
                      fontFamily: 'Orbitron, monospace',
                      letterSpacing: '0.05em',
                    }}
                  >
                    [ {item.category.toUpperCase()} ]
                  </p>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: '#00ff88',
                      textShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
                      fontFamily: 'Orbitron, monospace',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="neon-btn px-8 py-4 rounded-none text-lg"
            whileHover={{
              boxShadow: '0 0 30px rgba(0, 255, 136, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ LOAD MORE MEMORIES ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
