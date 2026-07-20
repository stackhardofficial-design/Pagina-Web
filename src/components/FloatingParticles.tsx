import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px hsl(24 85% 55% / 0.5)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Larger glowing orbs */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: 6 + i * 2,
            height: 6 + i * 2,
            background: `radial-gradient(circle, hsl(24 85% 55% / 0.4) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -50 - i * 5, 0],
            x: [0, 15 * (i % 2 === 0 ? 1 : -1), 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="10%"
          y1="30%"
          x2="40%"
          y2="60%"
          stroke="hsl(24 85% 55%)"
          strokeWidth="1"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.line
          x1="60%"
          y1="20%"
          x2="85%"
          y2="50%"
          stroke="hsl(24 85% 55%)"
          strokeWidth="1"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.line
          x1="30%"
          y1="70%"
          x2="70%"
          y2="85%"
          stroke="hsl(24 85% 55%)"
          strokeWidth="1"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            delay: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
};

export default FloatingParticles;
