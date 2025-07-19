import { FC, useState } from 'react';
// shared
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
// widgets
import { ThemeSwitcher } from 'widgets/theme-switcher';
// local
import styles from './sidebar.module.scss';

interface SidebarProps {
    UNSAFE_styles: string;
}

export const Sidebar: FC<Partial<SidebarProps>> = (props) => {
  const { UNSAFE_styles, children } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded((value) => !value);

  return (
    <aside
      className={classNames(
        styles.sidebar,
        { [styles.expanded]: isExpanded },
        [UNSAFE_styles],
      )}
    >
      <div className={classNames(styles.wrapper)}>
        <Button onClick={toggleExpanded}>
          {isExpanded ? 'Закрыть' : 'Открыть'}
        </Button>
        <ThemeSwitcher />
      </div>
      {children}
    </aside>
  );
};
