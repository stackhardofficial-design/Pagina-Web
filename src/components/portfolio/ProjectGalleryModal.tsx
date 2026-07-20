import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Project } from './ProjectCard';

interface ProjectGalleryModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectGalleryModal = ({ project, isOpen, onClose }: ProjectGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project || !project.screenshots) return null;

  const screenshots = project.screenshots;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={onClose}
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
              <div>
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {screenshots.length}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image container */}
            <div className="relative aspect-video bg-secondary">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={screenshots[currentIndex]}
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

              {/* Navigation arrows */}
              {screenshots.length > 1 && (
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
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentIndex ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
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
  );
};

export default ProjectGalleryModal;
