import { lazy } from 'react';
import { artificialDelay } from '../../helpers/artificialDelay';

export const MainPageLazy = lazy(() => artificialDelay(import('./MainPage')));