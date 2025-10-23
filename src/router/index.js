// import { createRouter, createWebHistory } from 'vue-router'

// // Auth pages
// import Login from '@/pages/auth/Login.vue'
// import Register from '@/pages/auth/Register.vue'

// // Dashboard + others
// import Dashboard from '@/pages/dashboard/Dashboard.vue'
// import ScheduleMeeting from '@/pages/meetings/ScheduleMeeting.vue'
// import MeetingRoom from '@/pages/meetings/MeetingRoom.vue'
// import Settings from '@/pages/settings/Settings.vue'

// const routes = [
//   { path: '/', redirect: '/dashboard' },
//   { path: '/login', component: Login },
//   { path: '/register', component: Register },
//   { path: '/dashboard', component: Dashboard },
//   { path: '/schedule', component: ScheduleMeeting },
//   { path: '/meeting/:id', component: MeetingRoom },
//   { path: '/settings', component: Settings },
// ]

// export const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Auth/Login.vue";
import Signup from "@/pages/Auth/Signup.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Scheduler from "@/pages/Scheduler/Scheduler.vue";
import Contacts from "@/pages/Contacts.vue";
// import CallRoom from "@/pages/CallRoom.vue";
import Settings from "@/pages/Settings.vue";

const routes = [
  { path: "/", redirect: "/auth/login" },
  { path: "/auth/login", component: Login },
  { path: "/auth/signup", component: Signup },
  {
    path: "/app",
    component: AppLayout,
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "scheduler", component: Scheduler },
      { path: "contacts", component: Contacts },
//       { path: "call/:id", component: CallRoom },
      { path: "settings", component: Settings },
    ],
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
