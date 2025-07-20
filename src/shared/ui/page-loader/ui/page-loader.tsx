import { FC } from 'react';
// shared
import { classNames } from 'shared/lib/class-names';
import { Loading } from 'shared/ui/loading';
// local
import styles from './page-loader.module.scss';

interface PageLoaderProps {
  UNSAFE_classname?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => (
  <div className={classNames(styles.pageLoader, {}, [props.UNSAFE_classname])}>
    <Loading />
  </div>
);
