import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard, { type Project } from './portfolio/ProjectCard';
import ProjectGalleryModal from './portfolio/ProjectGalleryModal';

// T.A.B.E images
import tabeCover from '@/assets/projects/tabe/cover.jpg';
import tabeDashboard from '@/assets/projects/tabe/dashboard.png';
import tabePlanCarrera from '@/assets/projects/tabe/plan-carrera.png';
import tabeNotion from '@/assets/projects/tabe/notion.png';
import tabeFlashcards from '@/assets/projects/tabe/flashcards.png';
import tabeMarketplace from '@/assets/projects/tabe/marketplace.png';
import tabeBiblioteca from '@/assets/projects/tabe/biblioteca.png';
import tabeCalendario from '@/assets/projects/tabe/calendario.png';
import tabePomodoro from '@/assets/projects/tabe/pomodoro.png';
import tabeMetricas from '@/assets/projects/tabe/metricas.png';
import tabeBosque from '@/assets/projects/tabe/bosque.png';

// T.A.B.E Academy images
import tabeAcademyCover from '@/assets/projects/tabe-academy/cover.jpg';
import tabeAcademyLogin from '@/assets/projects/tabe-academy/login.png';
import tabeAcademyPanelProfesor from '@/assets/projects/tabe-academy/panel-profesor.png';
import tabeAcademyAlumnos from '@/assets/projects/tabe-academy/alumnos.png';
import tabeAcademyCuadernillos from '@/assets/projects/tabe-academy/cuadernillos.png';
import tabeAcademyUniversidades from '@/assets/projects/tabe-academy/universidades.png';
import tabeAcademyVerAlumno from '@/assets/projects/tabe-academy/ver-alumno.png';
import tabeAcademySeleccionUniversidad from '@/assets/projects/tabe-academy/seleccion-universidad.png';
import tabeAcademyMaterias from '@/assets/projects/tabe-academy/materias.png';
import tabeAcademyNiveles from '@/assets/projects/tabe-academy/niveles.png';

// Senderos del Puente images
import senderosCover from '@/assets/projects/senderos/cover.jpg';
import senderosHero from '@/assets/projects/senderos/hero.png';
import senderosNosotros from '@/assets/projects/senderos/nosotros.png';
import senderosAliados from '@/assets/projects/senderos/aliados.png';
import senderosMaquinaria from '@/assets/projects/senderos/maquinaria.png';
import senderosMarcas from '@/assets/projects/senderos/marcas.png';
import senderosContacto from '@/assets/projects/senderos/contacto.png';

// 5INCO Indumentaria images
import cincoCover from '@/assets/projects/5inco/cover.jpg';
import cincoHero from '@/assets/projects/5inco/hero.png';
import cincoCatalogo from '@/assets/projects/5inco/catalogo.png';
import cincoContacto from '@/assets/projects/5inco/contacto.png';
import cincoAdmin from '@/assets/projects/5inco/admin.png';

const projects: Project[] = [
  {
    title: 'T.A.B.E – Sistema Académico',
    category: 'Aplicación Web',
    description: 'Plataforma integral para mejorar el rendimiento académico. Dashboard con métricas, plan de carrera, editor tipo Notion, flashcards con marketplace, biblioteca de recursos, calendario académico, método Pomodoro, sistema de bosque virtual gamificado, sala de estudio social y asistente IA.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'],
    coverImage: tabeCover,
    screenshots: [
      tabeDashboard,
      tabePlanCarrera,
      tabeNotion,
      tabeFlashcards,
      tabeMarketplace,
      tabeBiblioteca,
      tabeCalendario,
      tabePomodoro,
      tabeMetricas,
      tabeBosque,
    ],
  },
  {
    title: 'T.A.B.E Academy – Gestión Académica',
    category: 'Aplicación Web',
    description: 'Plataforma para profesores de clases particulares. Panel de gestión de alumnos, cuadernillos y tareas por niveles, chat integrado profesor-alumno, seguimiento de progreso en tiempo real, soporte para secundario y universitario con múltiples universidades configurables.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'],
    coverImage: tabeAcademyCover,
    screenshots: [
      tabeAcademyLogin,
      tabeAcademyPanelProfesor,
      tabeAcademyAlumnos,
      tabeAcademyCuadernillos,
      tabeAcademyUniversidades,
      tabeAcademyVerAlumno,
      tabeAcademySeleccionUniversidad,
      tabeAcademyMaterias,
      tabeAcademyNiveles,
    ],
  },
  {
    title: 'Senderos del Puente',
    category: 'Web Institucional',
    description: 'Página web institucional para lavadero de zanahorias de alcance nacional. Muestra todo el proceso desde el cultivo hasta la distribución con videos, imágenes de alta calidad y animaciones dinámicas. Presenta las marcas emblemáticas y transmite frescura, calidad y profesionalismo.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Video'],
    coverImage: senderosCover,
    screenshots: [
      senderosHero,
      senderosNosotros,
      senderosAliados,
      senderosMaquinaria,
      senderosMarcas,
      senderosContacto,
    ],
  },
  {
    title: '5INCO Indumentaria',
    category: 'E-commerce + Gestión',
    description: 'Plataforma web para tienda de ropa con panel de administración completo. Gestión de productos, stock por talle y color, categorías, panel de cajero para ventas diarias, sistema de avisos internos, descuentos y destacados. Control total del negocio en un solo lugar.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'],
    coverImage: cincoCover,
    screenshots: [
      cincoHero,
      cincoCatalogo,
      cincoContacto,
      cincoAdmin,
    ],
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
