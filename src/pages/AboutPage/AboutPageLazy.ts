import { lazy } from 'react';
import { artificialDelay } from '../../helpers/artificialDelay';

export const AboutPageLazy = lazy(() => artificialDelay(import('./AboutPage')));