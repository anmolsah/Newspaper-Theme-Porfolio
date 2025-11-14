import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userId] = useState(() => {
    let id = localStorage.getItem('userId');
    if (!id) {
      id = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', id);
    }
    return id;
  });

  useEffect(() => {
    loadThemePreference();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const loadThemePreference = async () => {
    try {
      const { data, error } = await supabase
        .from('theme_preferences')
        .select('theme')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setTheme(data.theme);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };

  const saveThemePreference = async (newTheme) => {
    try {
      const { data: existing } = await supabase
        .from('theme_preferences')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle();

      if (existing) {
        await supabase
          .from('theme_preferences')
          .update({ theme: newTheme, updated_at: new Date().toISOString() })
          .eq('user_id', userId);
      } else {
        await supabase
          .from('theme_preferences')
          .insert([{ user_id: userId, theme: newTheme }]);
      }
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const toggleTheme = () => {
    setIsTransitioning(true);

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    saveThemePreference(newTheme);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
