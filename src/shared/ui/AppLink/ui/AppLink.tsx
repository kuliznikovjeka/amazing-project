import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export function AppLink(props: AppLinkProps) {
  const {
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    className,
    ...otherProps
  } = props;

  return (
   <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
   >
      {children}
    </Link>
  )
}
