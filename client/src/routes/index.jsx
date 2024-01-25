import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Register from '@pages/Register';
import Login from '@pages/Login';
import Profile from '@pages/Profile';
import Bookmark from '@pages/Bookmark';
import DetailPost from '@pages/DetailPost';
import NewPost from '@pages/NewPost';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: false,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    protected: false,
    component: Bookmark,
    layout: MainLayout,
  },
  {
    path: '/detail-post',
    name: 'DetailPost',
    protected: false,
    component: DetailPost,
    layout: MainLayout,
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    protected: false,
    component: NewPost,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
