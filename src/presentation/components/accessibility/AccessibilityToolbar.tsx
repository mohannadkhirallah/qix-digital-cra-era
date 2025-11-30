import React from 'react';
import { Contrast, Minus, Plus, RotateCcw, Eye } from 'lucide-react';
import { useAccessibility } from '@/shared/accessibility/AccessibilityContext';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface AccessibilityToolbarProps {
  variant?: 'header' | 'floating';
  className?: string;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({ 
  variant = 'header',
  className 
}) => {
  const { t, isRTL } = useLanguage();
  const { 
    highContrast, 
    toggleHighContrast, 
    fontSize, 
    increaseFontSize, 
    decreaseFontSize, 
    resetFontSize 
  } = useAccessibility();

  const canDecrease = fontSize !== 'small';
  const canIncrease = fontSize !== 'x-large';

  const buttonBaseClass = cn(
    "inline-flex items-center justify-center rounded-md transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variant === 'header' 
      ? "h-8 w-8 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10" 
      : "h-9 w-9 bg-card text-foreground border border-border hover:bg-muted hover:border-primary/30"
  );

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        isRTL && "flex-row-reverse",
        className
      )}
      role="toolbar"
      aria-label={t('a11y.toolbar.label')}
    >
      {/* High Contrast Toggle */}
      <button
        type="button"
        onClick={toggleHighContrast}
        className={cn(
          buttonBaseClass,
          highContrast && (variant === 'header' 
            ? "bg-white/20 ring-2 ring-white/30" 
            : "bg-primary text-primary-foreground border-primary")
        )}
        aria-pressed={highContrast}
        aria-label={t('a11y.toolbar.highContrast')}
        title={t('a11y.toolbar.highContrast')}
      >
        {highContrast ? (
          <Eye className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Contrast className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {highContrast ? t('a11y.toolbar.highContrastOn') : t('a11y.toolbar.highContrastOff')}
        </span>
      </button>

      {/* Font Size Controls */}
      <div 
        className={cn(
          "flex items-center gap-0.5",
          variant === 'header' ? "mx-1 border-x border-white/20 px-2" : "mx-1"
        )}
        role="group"
        aria-label={t('a11y.toolbar.fontSizeGroup')}
      >
        {/* Decrease Font Size */}
        <button
          type="button"
          onClick={decreaseFontSize}
          disabled={!canDecrease}
          className={buttonBaseClass}
          aria-label={t('a11y.toolbar.decreaseFont')}
          title={t('a11y.toolbar.decreaseFont')}
        >
          <span className="text-xs font-bold" aria-hidden="true">A</span>
          <Minus className="h-2.5 w-2.5 -ml-0.5" aria-hidden="true" />
        </button>

        {/* Reset Font Size */}
        <button
          type="button"
          onClick={resetFontSize}
          className={cn(buttonBaseClass, "text-xs font-medium w-auto px-2")}
          aria-label={t('a11y.toolbar.resetFont')}
          title={t('a11y.toolbar.resetFont')}
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
        </button>

        {/* Increase Font Size */}
        <button
          type="button"
          onClick={increaseFontSize}
          disabled={!canIncrease}
          className={buttonBaseClass}
          aria-label={t('a11y.toolbar.increaseFont')}
          title={t('a11y.toolbar.increaseFont')}
        >
          <span className="text-sm font-bold" aria-hidden="true">A</span>
          <Plus className="h-2.5 w-2.5 -ml-0.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
