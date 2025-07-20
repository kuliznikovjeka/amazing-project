import { Suspense, FC } from 'react';
// shared
import { PageLoader } from 'shared/ui/page-loader';

export const SuspenseWrapper: FC = ({ children }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);
