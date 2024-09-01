import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <aside className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <div className='switchers'>
        <Button
          theme={ThemeButton.DEFAULT}
          onClick={onToggle}
        >
          {t('Открыть')}
        </Button>
        <LanguageSwitcher />
      </div>
    </aside>
  );
}