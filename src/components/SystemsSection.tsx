import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import TrueFocus from './TrueFocus';

// Sistema de Ropa
import ropaLogo from '@/assets/systems/ropa/logo.png';
import ropa1 from '@/assets/systems/ropa/1.png';
import ropa2 from '@/assets/systems/ropa/2.png';
import ropa3 from '@/assets/systems/ropa/3.png';
import ropa4 from '@/assets/systems/ropa/4.png';
import ropa5 from '@/assets/systems/ropa/5.png';
import ropa6 from '@/assets/systems/ropa/6.png';
import ropa7 from '@/assets/systems/ropa/7.png';
import ropa8 from '@/assets/systems/ropa/8.png';
import ropa9 from '@/assets/systems/ropa/9.png';
import ropa10 from '@/assets/systems/ropa/10.png';

// Sistema Médico
import medicoLogo from '@/assets/systems/medico/logo.png';
import medico1 from '@/assets/systems/medico/1.png';
import medico2 from '@/assets/systems/medico/2.png';
import medico3 from '@/assets/systems/medico/3.png';
import medico4 from '@/assets/systems/medico/4.png';
import medico5 from '@/assets/systems/medico/5.png';
import medico6 from '@/assets/systems/medico/6.png';
import medico7 from '@/assets/systems/medico/7.png';
import medico8 from '@/assets/systems/medico/8.png';
import medico9 from '@/assets/systems/medico/9.png';
import medico10 from '@/assets/systems/medico/10.png';
import medico11 from '@/assets/systems/medico/11.png';
import medico12 from '@/assets/systems/medico/12.png';

// Sistema Comida
import comidaLogo from '@/assets/systems/comida/logo.png';
import comida1 from '@/assets/systems/comida/1.png';
import comida2 from '@/assets/systems/comida/2.png';
import comida3 from '@/assets/systems/comida/3.png';
import comida4 from '@/assets/systems/comida/4.png';
import comida5 from '@/assets/systems/comida/5.png';
import comida6 from '@/assets/systems/comida/6.png';
import comida7 from '@/assets/systems/comida/7.png';
import comida8 from '@/assets/systems/comida/8.png';
import comida9 from '@/assets/systems/comida/9.png';
import comida10 from '@/assets/systems/comida/10.png';
import comida11 from '@/assets/systems/comida/11.png';
import comida12 from '@/assets/systems/comida/12.png';
import comida13 from '@/assets/systems/comida/13.png';
import comida14 from '@/assets/systems/comida/14.png';

interface System {
  name: string;
  description: string;
  logo: string;
  screenshots: string[];
}

const systems: System[] = [
  {
    name: 'Sistema de Ropa',
    description: 'Gestión de tienda de ropa con inventario, ventas y panel de cajero',
    logo: ropaLogo,
    screenshots: [ropa1, ropa2, ropa3, ropa4, ropa5, ropa6, ropa7, ropa8, ropa9, ropa10],
  },
  {
    name: 'Sistema Médico',
    description: 'Plataforma de gestión clínica con turnos, pacientes e historiales',
    logo: medicoLogo,
    screenshots: [medico1, medico2, medico3, medico4, medico5, medico6, medico7, medico8, medico9, medico10, medico11, medico12],
  },
  {
    name: 'Sistema de Comida',
    description: 'Sistema completo de pedidos y gestión para restaurantes y food',
    logo: comidaLogo,
    screenshots: [comida1, comida2, comida3, comida4, comida5, comida6, comida7, comida8, comida9, comida10, comida11, comida12, comida13, comida14],
  },
];

const SystemsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedSystem, setSelectedSystem] = useState<System | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (system: System) => {
    setSelectedSystem(system);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedSystem(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!selectedSystem) return;
    setCurrentIndex((prev) => (prev + 1) % selectedSystem.screenshots.length);
  };

  const prevImage = () => {
    if (!selectedSystem) return;
    setCurrentIndex((prev) => (prev - 1 + selectedSystem.screenshots.length) % selectedSystem.screenshots.length);
  };

  return (
    <>
      <section id="sistemas" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-mono text-sm text-primary mb-4">
              {'// SISTEMAS'}
            </span>
            <div className="mb-6">
              <TrueFocus
                sentence="Sistemas-de Gestión"
                separator="-"
                manualMode={false}
                blurAmount={4}
                borderColor="hsl(24, 85%, 55%)"
                glowColor="hsl(24 85% 55% / 0.6)"
                animationDuration={0.6}
                pauseBetweenAnimations={1.5}
              />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluciones a medida para automatizar y optimizar la operación de tu negocio.
            </p>
          </motion.div>

          {/* Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {systems.map((system, index) => (
              <motion.button
                key={system.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => openGallery(system)}
                className="group relative flex flex-col items-center gap-5 p-8 rounded-2xl border border-border bg-card hover:border-primary/60 transition-all duration-300 hover:bg-card/80 text-center cursor-pointer"
                style={{
                  boxShadow: '0 0 0px transparent',
                }}
                whileHover={{ scale: 1.03, boxShadow: 'var(--glow-primary)' }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Logo */}
                <div className="w-28 h-28 rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-300 bg-secondary flex items-center justify-center shadow-lg">
                  <img
                    src={system.logo}
                    alt={`${system.name} logo`}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Name & Description */}
                <div>
                  <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {system.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {system.description}
                  </p>
                </div>

                {/* Screenshot count badge */}
                <span className="text-xs font-mono text-primary/70 border border-primary/30 rounded-full px-3 py-1 bg-primary/5">
                  {system.screenshots.length} capturas
                </span>

                {/* Click hint */}
                <span className="text-xs text-muted-foreground/50 font-mono group-hover:text-primary/50 transition-colors">
                  {'> ver galería'}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedSystem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-card rounded-xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-border bg-secondary flex items-center justify-center">
                    <img src={selectedSystem.logo} alt={selectedSystem.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold text-foreground">
                      {selectedSystem.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentIndex + 1} / {selectedSystem.screenshots.length}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeGallery}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image */}
              <div className="relative aspect-video bg-secondary">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedSystem.screenshots[currentIndex]}
                    alt={`${selectedSystem.name} captura ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>

                {selectedSystem.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="p-4 flex gap-2 overflow-x-auto">
                {selectedSystem.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentIndex
                        ? 'border-primary'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SystemsSection;
