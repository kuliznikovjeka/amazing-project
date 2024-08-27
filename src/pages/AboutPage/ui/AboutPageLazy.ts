import { lazy } from 'react';
import { artificialDelay } from '../../../shared/lib/artificialDelay/artificialDelay';

export const AboutPageLazy = lazy(() => artificialDelay(import('./AboutPage')));