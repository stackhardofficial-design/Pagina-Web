import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Settings, Rocket, Palette, ShieldCheck, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sitios Web Corporativos',
    description: 'Páginas profesionales que transmiten confianza y credibilidad para tu empresa o negocio.',
    features: ['Diseño personalizado', 'SEO optimizado', 'Alta velocidad de carga'],
  },
  {
    icon: Settings,
    title: 'Sistemas a Medida',
    description: 'Desarrollo de software y herramientas de gestión internas adaptadas a los procesos de tu negocio.',
    features: ['ERPs y CRMs personalizados', 'Bases de datos (Supabase/PostgreSQL)', 'Automatización de flujos de trabajo'],
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'Páginas de aterrizaje diseñadas para convertir visitantes en clientes.',
    features: ['Alta conversión', 'CTAs estratégicos', 'Diseño persuasivo'],
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces modernas y experiencias de usuario que cautivan y retienen.',
    features: ['Diseño intuitivo', 'Estética moderna', 'Flujos optimizados'],
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento Web',
    description: 'Mantén tu sitio actualizado, seguro y funcionando al máximo rendimiento.',
    features: ['Actualizaciones regulares', 'Copias de seguridad', 'Soporte técnico'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Consultoría Digital',
    description: 'Asesoramiento experto para llevar tu presencia digital al siguiente nivel.',
    features: ['Estrategia digital', 'Análisis de competencia', 'Recomendaciones técnicas'],
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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -15,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: [0, -10, 10, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: 'easeInOut' as const,
      },
    },
  },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 relative bg-secondary/20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with glitch effect */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block font-mono text-sm text-primary mb-4"
            animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {'// SERVICIOS'}
          </motion.span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluciones <span className="text-primary animate-neon-flicker">digitales</span> a tu medida
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Desarrollo web profesional con tecnología de vanguardia para impulsar tu presencia online.
          </p>
        </motion.div>

        {/* Services Grid with staggered animation */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              className="card-glow p-8 group cursor-pointer relative overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Hover gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Scan line effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ y: '-100%' }}
                whileHover={{ y: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              <motion.div 
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative z-10"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <h3 className="font-mono text-xl font-semibold text-foreground mb-3 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <motion.div 
                  className="absolute top-0 right-0 w-28 h-1 bg-gradient-to-l from-primary to-transparent origin-right"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute top-0 right-0 w-1 h-28 bg-gradient-to-b from-primary to-transparent origin-top"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA with pulse animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Listo para comenzar tu proyecto?
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon-solid relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Solicitar Presupuesto</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default ServicesSection;
