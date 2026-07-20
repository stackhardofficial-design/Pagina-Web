import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.742 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.598c-.39 1.1-1.932 2.012-3.182 2.278-.856.182-1.974.326-5.74-1.234-4.818-1.994-7.92-6.898-8.16-7.218-.232-.32-1.942-2.586-1.942-4.932s1.228-3.5 1.664-3.98c.39-.432 1.032-.64 1.648-.64.198 0 .376.01.536.018.474.02.712.048 1.024.792.39.93 1.338 3.264 1.456 3.502.118.238.236.56.076.88-.152.328-.286.474-.524.746-.238.272-.464.48-.702.774-.218.254-.464.526-.198.992.266.458 1.182 1.948 2.538 3.156 1.744 1.552 3.212 2.034 3.668 2.26.356.178.78.138 1.054-.158.348-.376.778-.998 1.216-1.612.31-.438.702-.492 1.096-.336.4.148 2.53 1.194 2.966 1.412.436.218.726.326.832.508.108.182.108 1.054-.282 2.154z"/>
  </svg>
);

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/542617737367"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      }}
    >
      <WhatsAppIcon />
      
      {/* Pulse effect */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.4],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;
