import { ROUTER_PATHS } from 'shared/constants/router-paths';
import { AppLink } from 'shared/ui/app-link';
import { classNames } from 'shared/lib/class-names';
// local
import styles from './error-page.module.scss';

export function ErrorPage() {
  return (
    <section className={classNames('app', {}, [styles.errorPage])}>
      <div>
        <h1 className={styles.title}>Упс! ОШИБКА 404 </h1>
        <p>Такой страницы не существует</p>
        <AppLink UNSAFE_styles={styles.block} to={ROUTER_PATHS.main}>
          На главную
        </AppLink>
      </div>
    </section>
  );
}
