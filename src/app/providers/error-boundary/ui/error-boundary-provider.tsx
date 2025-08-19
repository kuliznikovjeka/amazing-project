import { FC } from 'react';
// pages
import { ErrorBoundaryPage } from 'pages/error-boundary-page';
// local
import { ErrorBoundary } from './error-boundary';

export const ErrorBoundaryProvider: FC = (props) => (
  <ErrorBoundary fallback={<ErrorBoundaryPage />}>{props.children}</ErrorBoundary>
);
