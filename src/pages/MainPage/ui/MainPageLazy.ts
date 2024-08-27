import { lazy } from 'react';
import { artificialDelay } from '../../../shared/lib/artificialDelay/artificialDelay';

export const MainPageLazy = lazy(() => artificialDelay(import('./MainPage')));