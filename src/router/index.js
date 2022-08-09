import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/views/LoginView.vue'
import MainView from '@/views/MainView.vue'
import MainAlaram from '@/components/alarm/MainAlaram.vue'
import MainCalendar from '@/components/calendar/MainCalendar.vue'
import MainHeader from '@/components/common/MainHeader.vue'
import MainSidebar from '@/components/common/MainSidebar.vue'
import MainFriend from '@/components/friend/MainFriend.vue'
import MainProfile from '@/components/profile/MainProfile.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LogIn,
  },
  {
    path: '/signin',
    name: 'singin',
    component: LogIn,
  },
  {
    // 추후 수정필요
    path: '/main',
    name: 'Main',
    component: MainView,
    children: [
      { path: 'profile', component: MainProfile },
      { path: 'profile/:id', component: MainProfile },
      { path: 'friend', component: MainFriend },
      { path: 'calendar', component: MainCalendar },
      { path: 'alarm', component: MainAlaram },
    ],
  },
  {
    path: '/test1',
    name: 'test1',
    component: MainAlaram,
  },
  {
    path: '/test2',
    name: 'test',
    component: MainCalendar,
  },
  {
    path: '/test4',
    name: 'test4',
    component: MainHeader,
  },
  {
    path: '/test5',
    name: 'test5',
    component: MainSidebar,
  },
  {
    path: '/test6',
    name: 'test6',
    component: MainFriend,
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/components/modal/ProfileModal.vue'),
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
