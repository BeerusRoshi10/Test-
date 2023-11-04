import { lazy } from 'react';

const Landing = lazy(() => import('../components/Landing/Index'));
const Booking = lazy(() => import('../components/Booking/Index'));

export const ALL_ROUTES_PATHS = {
  LANDING: '/',
  BOOKING: '/booking'
};

export const ALL_ROUTES = [
  {
    pathName: ALL_ROUTES_PATHS.LANDING,
    Component: Landing,
    heading: 'Home'
  },
  {
    pathName: ALL_ROUTES_PATHS.BOOKING,
    Component: Booking,
    heading: 'Booking'
  }
];

export const NAVBAR_ROUTES = [ALL_ROUTES[0], ALL_ROUTES[1]];
