import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard, { type Project } from './portfolio/ProjectCard';
import ProjectGalleryModal from './portfolio/ProjectGalleryModal';

// Live previews (Screenshots provided by user)
import carrizoPreview from '@/assets/projects/live-previews/carrizo.png';
import tabePreview from '@/assets/projects/live-previews/tabe.png';
import senderosPreview from '@/assets/projects/live-previews/senderos.png';
import kanelaPreview from '@/assets/projects/live-previews/kanela.png';
import kartingPreview from '@/assets/projects/live-previews/karting.png';
import cincoPreview from '@/assets/projects/live-previews/cinco.png';

// Sub-screenshots for galleries
import tabeDashboard from '@/assets/projects/tabe/dashboard.png';
import tabePlanCarrera from '@/assets/projects/tabe/plan-carrera.png';
import tabeNotion from '@/assets/projects/tabe/notion.png';
import tabeFlashcards from '@/assets/projects/tabe/flashcards.png';

import senderosHero from '@/assets/projects/senderos/hero.png';
import senderosNosotros from '@/assets/projects/senderos/nosotros.png';
import senderosAliados from '@/assets/projects/senderos/aliados.png';
import senderosMaquinaria from '@/assets/projects/senderos/maquinaria.png';

const projects: Project[] = [
  {
    title: 'T.A.B.E – Sistema Académico',
    category: 'Aplicación Web / SaaS',
    description: 'Plataforma integral para mejorar el rendimiento académico. Dashboard con métricas, plan de carrera, editor tipo Notion, flashcards, biblioteca de recursos y calendario.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'],
    coverImage: cincoPreview,
    screenshots: [
      cincoPreview,
      tabeDashboard,
      tabePlanCarrera,
      tabeNotion,
      tabeFlashcards,
    ],
    liveUrl: 'https://www.tabe.software',
  },
  {
    title: 'Senderos del Puente',
    category: 'Web Institucional',
    description: 'Página web institucional para lavadero de zanahorias de alcance nacional. Muestra todo el proceso desde el cultivo hasta la distribución con videos, imágenes y animaciones dinámicas.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    coverImage: senderosHero,
    screenshots: [
      senderosHero,
      senderosNosotros,
      senderosAliados,
      senderosMaquinaria,
    ],
    liveUrl: 'https://senderos-del-puente.vercel.app',
  },
  {
    title: 'Carnes Carrizo',
    category: 'E-commerce / Catálogo',
    description: 'Sitio web moderno para carnicería y distribuidora de carne premium. Permite ver ofertas, catálogo de cortes, ubicación y contacto directo de forma rápida.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    coverImage: kartingPreview,
    screenshots: [kartingPreview],
    liveUrl: 'https://carnes-carrizo.vercel.app',
  },
  {
    title: 'Kanela Food',
    category: 'Carta Digital / Web',
    description: 'Carta digital interactiva y sitio web para cafetería y hamburguesería en Coquimbito. Interfaz fluida y atractiva optimizada para móviles.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    coverImage: carrizoPreview,
    screenshots: [carrizoPreview],
    liveUrl: 'https://kanela-food-coquimbito.vercel.app/',
  },
  {
    title: 'Karting Modelo',
    category: 'Web Deportiva',
    description: 'Página web moderna y deportiva dedicada al mundo del karting. Calendarios de carreras, posiciones, galerías de fotos y novedades de la categoría.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    coverImage: tabePreview,
    screenshots: [tabePreview],
    liveUrl: 'https://karting-modelo-web.vercel.app/',
  },
  {
    title: '5INCO Indumentaria',
    category: 'E-commerce + Gestión',
    description: 'Plataforma web para tienda de ropa con panel de administración completo. Gestión de productos, stock por talle y color, categorías y panel de cajero para ventas.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'],
    coverImage: kanelaPreview,
    screenshots: [kanelaPreview],
    liveUrl: 'https://55inco.vercel.app/',
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Filter projects that have cover images for display
  const displayProjects = projects.filter(p => p.coverImage);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % displayProjects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const handleViewGallery = (project: Project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
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
            {'// PORTFOLIO'}
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Proyectos <span className="text-primary text-glow">destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Una selección de trabajos que demuestran mi enfoque en calidad, diseño y resultados.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              onViewGallery={handleViewGallery}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          {displayProjects.length > 0 && (
            <ProjectCard
              project={displayProjects[activeIndex]}
              index={0}
              isInView={isInView}
              onViewGallery={handleViewGallery}
            />
          )}

          {/* Navigation - only show if more than 1 project */}
          {displayProjects.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevProject}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {displayProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextProject}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Gallery Modal */}
      <ProjectGalleryModal
        project={selectedProject}
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
      />

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default PortfolioSection;
