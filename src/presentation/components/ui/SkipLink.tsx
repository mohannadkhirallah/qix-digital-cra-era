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
      className="skip-to-content focus-enhanced"
      aria-label={t('header.skipToContent')}
    >
      {t('header.skipToContent')}
    </a>
  );
};
