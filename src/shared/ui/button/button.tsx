import { ButtonHTMLAttributes, FC } from 'react';
// shared
import { classNames } from 'shared/lib/class-names';
// local
import styles from './button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  UNSAFE_classnames?: string;
  variant?: 'clear' | 'outline' | 'filled';
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = 'filled', children, UNSAFE_classnames, ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(styles.button, {}, [UNSAFE_classnames, styles[variant]])}
    >
      {children}
    </button>
  );
};
