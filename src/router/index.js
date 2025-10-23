
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Auth/Login.vue";
import Signup from "@/pages/Auth/Signup.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Scheduler from "@/pages/Scheduler/Scheduler.vue";
import Contacts from "@/pages/contacts/Contacts.vue";
// import CallRoom from "@/pages/CallRoom.vue";
import Settings from "@/pages/settings/Settings.vue";

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
