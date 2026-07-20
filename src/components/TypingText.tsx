import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypingText = ({ text, className = '', speed = 80, delay = 0 }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: isComplete ? [1, 0] : 1 }}
        transition={{ 
          duration: 0.5, 
          repeat: isComplete ? Infinity : 0,
          repeatType: 'reverse'
        }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </motion.span>
  );
};

export default TypingText;
