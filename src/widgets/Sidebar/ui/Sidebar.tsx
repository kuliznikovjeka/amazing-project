import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true);
  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <aside className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>
        Открыть
      </button>
    </aside>
  );
}