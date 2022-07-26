import { welcome } from '../pages/welcome';
import { Stories } from '../pages/Stories';

export default [
  {
    path: '/',
    component: welcome
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  }
]