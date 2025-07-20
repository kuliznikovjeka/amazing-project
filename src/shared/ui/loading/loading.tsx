import React from 'react';
// shared
import { classNames } from 'shared/lib/class-names';
// local
import styles from './loading.module.scss';

interface LoadingProps {
  UNSAFE_classname?: string;
}

export function Loading(props: LoadingProps) {
  return <span className={classNames(styles.loader, {}, [props.UNSAFE_classname])} />;
}
