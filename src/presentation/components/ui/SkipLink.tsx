import React from 'react';
import { useLanguage } from '@/shared/i18n/LanguageContext';

interface SkipLinkProps {
  targetId?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ targetId = 'main-content' }) => {
  const { t } = useLanguage();

  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
    >
      {t('header.skipToContent')}
    </a>
  );
};
