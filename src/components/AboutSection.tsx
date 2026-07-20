import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Zap, Target } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Código Limpio', desc: 'Desarrollo con las mejores prácticas' },
  { icon: Cpu, label: 'Tech Stack Moderno', desc: 'React, TypeScript, Tailwind' },
  { icon: Zap, label: 'Alto Rendimiento', desc: 'Sitios rápidos y optimizados' },
  { icon: Target, label: 'Enfoque en Resultados', desc: 'Diseño centrado en conversión' },
];

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      delay: 0.3 + i * 0.15,
    },
  }),
};

const terminalLineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.3 },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          >
            <motion.span 
              className="inline-block font-mono text-sm text-primary mb-4"
              animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'// SOBRE MÍ'}
            </motion.span>
            <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Hola, somos{' '}
              <motion.span 
                className="text-primary inline-block"
                animate={isInView ? { 
                  textShadow: [
                    '0 0 10px hsl(24 85% 55% / 0.8)',
                    '0 0 20px hsl(24 85% 55% / 1)',
                    '0 0 10px hsl(24 85% 55% / 0.8)',
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                StackHard
              </motion.span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Somos un equipo apasionado por crear soluciones tecnológicas integrales que no solo lucen espectaculares, sino que también impulsan el rendimiento operativo de tu negocio. Combinamos diseño de vanguardia con desarrollo de software robusto.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Especializados en las tecnologías más actuales, creamos desde páginas web corporativas y e-commerce atractivos hasta sistemas internos a medida (ERPs, CRMs y dashboards de métricas) que simplifican el control diario de tu negocio.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Cada proyecto representa una oportunidad para superar expectativas y construir herramientas que realmente marquen una diferencia en tu día a día.
              </motion.p>
            </div>

            {/* Terminal-style info with typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border font-mono text-sm relative overflow-hidden"
            >
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              
              <div className="flex items-center gap-2 mb-2">
                <motion.span 
                  className="w-3 h-3 rounded-full bg-destructive"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.span 
                  className="w-3 h-3 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.span 
                  className="w-3 h-3 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              
              <motion.p 
                className="text-muted-foreground"
                variants={terminalLineVariants}
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="text-primary">$</span> whoami
              </motion.p>
              <motion.p 
                className="text-foreground mt-1"
                variants={terminalLineVariants}
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {'>'} StackHard | Desarrollo Web & Sistemas | Mendoza, Argentina
              </motion.p>
              <motion.p 
                className="text-muted-foreground mt-2"
                variants={terminalLineVariants}
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="text-primary">$</span> cat services.txt
              </motion.p>
              <motion.p 
                className="text-foreground mt-1"
                variants={terminalLineVariants}
                custom={3}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {'>'} Webs, ERPs, CRMs, Supabase/Bases de Datos, React, Node.js
              </motion.p>
              
              {/* Blinking cursor */}
              <motion.span
                className="inline-block w-2 h-4 bg-primary ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Skills Grid with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
            style={{ perspective: '1000px' }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                variants={skillCardVariants}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.2 } 
                }}
                className="card-glow p-6 group cursor-pointer relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(24 85% 55% / 0.2), transparent, hsl(35 90% 50% / 0.2))',
                  }}
                />
                
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:drop-shadow-[0_0_10px_hsl(24_85%_55%/0.8)] transition-all duration-300" />
                </motion.div>
                
                <h3 className="font-mono font-semibold text-foreground mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
                
                {/* Hover particles */}
                <motion.div 
                  className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100"
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default AboutSection;
