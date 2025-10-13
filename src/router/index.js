import { createRouter, createWebHistory } from 'vue-router'

// Auth pages
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'

// Dashboard + others
// import Dashboard from '@/pages/dashboard/Dashboard.vue'
// import ScheduleMeeting from '@/pages/meetings/ScheduleMeeting.vue'
// import MeetingRoom from '@/pages/meetings/MeetingRoom.vue'
// import Settings from '@/pages/settings/Settings.vue'

const routes = [
//   { path: '/', redirect: '/dashboard' },
  { path: '/login', component: Login },
//   { path: '/register', component: Register },
//   { path: '/dashboard', component: Dashboard },
//   { path: '/schedule', component: ScheduleMeeting },
//   { path: '/meeting/:id', component: MeetingRoom },
//   { path: '/settings', component: Settings },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
