import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/button';

export function BugButton() {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error('Ошибка для тестирования Error Boundary');
    }
  }, [isError]);

  const onThrowError = () => setIsError(true);

  return <Button onClick={onThrowError}>Выбросить ошибку</Button>;
}
