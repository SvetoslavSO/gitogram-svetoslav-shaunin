import { welcome } from '../pages/welcome';
import { Stories } from '../pages/Stories';
import { auth } from '../pages/auth';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: welcome
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth';
  if (authRoute) {
    from.name === 'main' ? next(false) : next();
    return;
  }
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`
      }
    })
    if (response.status === 401) throw new Error();
    next();
  } catch (e) {
    next({ name: 'auth' });
  }

  const storiesRoute = to.name === 'stories';
  if (storiesRoute) {
    from.name === undefined ? next({ name: 'main' }) : next()
  }
});

export default router;