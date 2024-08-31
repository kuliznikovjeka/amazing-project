import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme: ThemeButton;
}

export function Button(props: ButtonProps) {
  const { children, theme, className, onClick, ...otherProps } = props;

  return (
    <button
      onClick={onClick}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}