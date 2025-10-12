<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 class="text-lg font-semibold">CallSync</h1>
      <nav class="space-x-4">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/schedule">Schedule</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
    </header>

    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>
