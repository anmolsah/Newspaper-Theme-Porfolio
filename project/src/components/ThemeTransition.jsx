import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeTransition.css';

function ThemeTransition() {
  const { isTransitioning } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          <motion.div
            className="theme-transition-overlay"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          />

          <motion.div
            className="theme-transition-particles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  x: '50vw',
                  y: '50vh',
                  scale: 0,
                  opacity: 1
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: Math.random() * 2 + 1,
                  opacity: 0
                }}
                transition={{
                  duration: Math.random() * 1 + 0.5,
                  ease: 'easeOut'
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="theme-transition-text"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div
              className="transition-icon"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 0.6, ease: 'easeInOut' },
                scale: { duration: 0.6, repeat: 1, ease: 'easeInOut' }
              }}
            >
              ✦
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ThemeTransition;
