import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'small' | 'normal' | 'large' | 'x-large';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: FontSize;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  resetAll: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const FONT_SIZE_ORDER: FontSize[] = ['small', 'normal', 'large', 'x-large'];
const FONT_SIZE_SCALE: Record<FontSize, number> = {
  'small': 87.5,    // 14px base
  'normal': 100,    // 16px base
  'large': 125,     // 20px base
  'x-large': 150,   // 24px base (200% of small)
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  // Load saved preferences from localStorage
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('qix-high-contrast');
      return saved === 'true';
    }
    return false;
  });

  const [fontSize, setFontSize] = useState<FontSize>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('qix-font-size') as FontSize;
      if (saved && FONT_SIZE_ORDER.includes(saved)) {
        return saved;
      }
    }
    return 'normal';
  });

  // Apply high contrast class to document
  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    localStorage.setItem('qix-high-contrast', String(highContrast));
  }, [highContrast]);

  // Apply font size to document
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${FONT_SIZE_SCALE[fontSize]}%`;
    localStorage.setItem('qix-font-size', fontSize);
  }, [fontSize]);

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const increaseFontSize = () => {
    setFontSize(prev => {
      const currentIndex = FONT_SIZE_ORDER.indexOf(prev);
      if (currentIndex < FONT_SIZE_ORDER.length - 1) {
        return FONT_SIZE_ORDER[currentIndex + 1];
      }
      return prev;
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      const currentIndex = FONT_SIZE_ORDER.indexOf(prev);
      if (currentIndex > 0) {
        return FONT_SIZE_ORDER[currentIndex - 1];
      }
      return prev;
    });
  };

  const resetFontSize = () => {
    setFontSize('normal');
  };

  const resetAll = () => {
    setHighContrast(false);
    setFontSize('normal');
    localStorage.removeItem('qix-high-contrast');
    localStorage.removeItem('qix-font-size');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        toggleHighContrast,
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        resetAll,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
