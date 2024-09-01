import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

import cls from './LanguageSwitcher.module.scss';

export const LOCAL_STORAGE_LANGUAGE_KEY = 'language';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(currentLanguage);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, currentLanguage)
  }

  return (
    <Button
      theme={ThemeButton.DEFAULT}
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      onClick={toggleLanguage}
    >
      {t('Изменить язык')}
    </Button>
  );
}