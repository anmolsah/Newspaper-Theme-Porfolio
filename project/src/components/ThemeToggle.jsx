import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <motion.button
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      disabled={isTransitioning}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="toggle-background" />

      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            className="toggle-icon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun size={18} strokeWidth={2.5} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            className="toggle-icon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon size={18} strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>

      {isTransitioning && (
        <motion.div
          className="toggle-ripple"
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
}

export default ThemeToggle;
