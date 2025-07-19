import { Suspense, FC } from 'react';
import { Loading } from 'shared/ui/loading';

export const SuspenseWrapper:FC = ({ children }) => (
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>
);
