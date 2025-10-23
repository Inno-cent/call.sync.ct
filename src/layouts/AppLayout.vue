<template>
  <div
    class="flex min-h-screen bg-[linear-gradient(180deg,#071026,rgba(10,12,16,0.3))] text-white"
  >
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar @toggleSidebar="toggleSidebar" />
      <main class="p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>


<script>
import Sidebar from "@/components/layout/Sidebar.vue";
import Navbar from "@/components/layout/Navbar.vue";
export default {
  components: { Sidebar, Navbar },
  methods: {
    toggleSidebar() {
      /* optional */
    },
  },
};
</script>