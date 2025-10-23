

<template>
  <aside
    class="w-72 p-6 border-r border-white/6 bg-gradient-to-b from-transparent to-white/2"
  >
    <div class="flex items-center gap-3 mb-8">
      <div
        class="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold"
      >
        CS
      </div>
      <div>
        <div class="font-bold text-lg">CallSync</div>
        <div class="text-sm text-white/60">Schedule • Sync • Connect</div>
      </div>
    </div>

    <nav class="flex flex-col gap-2">
      <router-link
        to="/app/dashboard"
        class="py-2 px-3 rounded-lg hover:bg-white/6 flex items-center gap-3"
      >
        <span class="w-2.5 h-2.5 bg-white/80 rounded-full" />
        <span>Dashboard</span>
      </router-link>
      <router-link
        to="/app/scheduler"
        class="py-2 px-3 rounded-lg hover:bg-white/6 flex items-center gap-3"
        >Scheduler</router-link
      >
      <router-link
        to="/app/contacts"
        class="py-2 px-3 rounded-lg hover:bg-white/6 flex items-center gap-3"
        >Contacts</router-link
      >
      <router-link
        to="/app/settings"
        class="py-2 px-3 rounded-lg hover:bg-white/6 flex items-center gap-3"
        >Settings</router-link
      >
    </nav>

    <div class="mt-auto pt-6">
      <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-white/4">
        <img
          src="/avatar.jpg"
          class="w-10 h-10 rounded-full border border-white/10"
        />
        <div>
          <div class="font-medium">Innocent</div>
          <div class="text-xs text-white/60">Available</div>
        </div>
      </div>
    </div>
  </aside>
</template>


<script>
export default { name: "Sidebar" };
</script>
