import { welcome } from '../pages/welcome';
import { Stories } from '../pages/Stories';

export default [
  {
    path: '/',
    component: welcome
  },
  {
    path: '/Stories',
    name: 'Stories',
    component: Stories
  }
]