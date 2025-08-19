import { Button } from 'shared/ui/button';
// local
import { classNames } from 'shared/lib/class-names';
import styles from './error-boundary-page.module.scss';

export function ErrorBoundaryPage() {
  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <section className={classNames(styles.errorPage, {}, ['app'])}>
      <h1 className={styles.title}>Ууупс! Что-то пошло не так</h1>
      <p>Получена ошибка во время рендеринга, пожалуйста перезагрузите страницу</p>
      <Button onClick={handleRefreshPage} className={styles.refreshButton}>
        Перезагрузить страницу
      </Button>
    </section>
  );
}
