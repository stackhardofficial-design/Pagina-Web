import { motion } from 'framer-motion';
import { ExternalLink, Images } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  coverImage?: string;
  screenshots?: string[];
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  onViewGallery: (project: Project) => void;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -10,
    scale: 0.95,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

const ProjectCard = ({ project, index, isInView, onViewGallery }: ProjectCardProps) => {
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className="card-glow group cursor-pointer relative overflow-hidden"
      style={{ perspective: '1000px' }}
      onClick={() => hasScreenshots && onViewGallery(project)}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scan line effect */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 45%, hsl(24 85% 55% / 0.1) 50%, transparent 55%, transparent 100%)',
          backgroundSize: '100% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner accents */}
      <motion.div 
        className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-transparent z-20"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-primary to-transparent z-20"
        initial={{ scaleY: 0, originY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-l from-primary to-transparent z-20"
        initial={{ scaleX: 0, originX: 1 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-1 h-16 bg-gradient-to-t from-primary to-transparent z-20"
        initial={{ scaleY: 0, originY: 1 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Cover Image */}
      {project.coverImage && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Floating badge */}
          <motion.div 
            className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-mono text-primary-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {project.category}
          </motion.div>

          {/* Screenshots indicator */}
          {hasScreenshots && (
            <motion.div 
              className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-mono text-foreground opacity-0 group-hover:opacity-100"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Images className="w-3 h-3" />
              <span>{project.screenshots?.length}</span>
            </motion.div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 relative z-10">
        <motion.h3 
          className="font-mono text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack with staggered animation */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded border border-border/50 group-hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'hsl(24 85% 55% / 0.1)',
                borderColor: 'hsl(24 85% 55% / 0.5)',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {hasScreenshots && (
            <motion.button
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-primary border border-primary/50 rounded-lg hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(24 85% 55% / 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onViewGallery(project);
              }}
            >
              <Images className="w-4 h-4" />
              Ver galería
            </motion.button>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-foreground border border-border rounded-lg hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              Ver sitio
            </motion.a>
          )}
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 40px hsl(24 85% 55% / 0.15), inset 0 0 40px hsl(24 85% 55% / 0.05)',
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
