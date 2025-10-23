<template>
  <aside class="w-72 bg-gradient-to-b from-transparent to-white/2 p-6 min-h-screen">
    <div class="mb-8 flex items-center gap-3">
      <img src="/logo.svg" class="w-10 h-10" />
      <div>
        <h4 class="text-white font-bold">CallSync</h4>
        <p class="text-white/60 text-sm">Schedule • Sync • Connect</p>
      </div>
    </div>

    <nav class="flex flex-col gap-1">
      <NavItem to="/app/dashboard" icon="calendar" label="Dashboard" />
      <NavItem to="/app/scheduler" icon="clock" label="Scheduler" />
      <NavItem to="/app/contacts" icon="users" label="Contacts" />
      <NavItem to="/app/settings" icon="cog" label="Settings" />
    </nav>

    <div class="mt-auto pt-6">
      <ProfileCard />
    </div>
  </aside>
</template>

<script>
import NavItem from './NavItem.vue'
import ProfileCard from './ProfileCard.vue'
export default { components: { NavItem, ProfileCard } }
</script>
