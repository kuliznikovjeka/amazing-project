import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
// shared
import { classNames } from 'shared/lib/class-names';
// local
import styles from './app-link.module.scss';

interface AppLinkProps extends LinkProps {
  UNSAFE_styles?: string;
  tone?: 'primary' | 'secondary';
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    UNSAFE_styles, tone = 'primary', to, children, ...otherProps
  } = props;

  return (
    <Link
      {...otherProps}
      className={classNames(styles.appLink, {}, [UNSAFE_styles, styles[tone]])}
      to={to}
    >
      {children}
    </Link>
  );
};
