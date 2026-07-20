import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import TypingText from './TypingText';
import FloatingParticles from './FloatingParticles';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background pointer-events-none" />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block font-mono text-sm md:text-base text-primary px-4 py-2 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
              {'>'} Páginas Web & Sistemas a Medida
            </span>
          </motion.div>

          {/* Main heading with typing effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Transformamos ideas en </span>
            <span className="text-primary text-glow block md:inline">
              <TypingText 
                text="sistemas y páginas web" 
                speed={60} 
                delay={800}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Diseñamos y desarrollamos páginas web modernas y sistemas de gestión a medida que automatizan, optimizan y hacen crecer tu negocio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={scrollToContact}
              className="btn-neon-solid group flex items-center gap-2"
            >
              Contactar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/542617737367"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon flex items-center gap-2 px-6"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="mailto:tomasbasabe.utn@gmail.com"
                className="btn-neon flex items-center gap-2 px-6"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </motion.div>

          {/* Code snippet decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:block font-mono text-sm text-muted-foreground/50 mt-12"
          >
            <span className="text-primary">const</span> developer = {'{'}
            <span className="text-accent"> passion</span>: <span className="text-foreground">"infinite"</span>,
            <span className="text-accent"> code</span>: <span className="text-foreground">"clean"</span>
            {'}'};
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary/60 cursor-pointer hover:text-primary transition-colors"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
