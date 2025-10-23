<template>
  <div class="space-y-6">
    <CardGlass>
      <h3 class="font-semibold">Profile</h3>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label class="text-sm text-white/80">Full name</label>
          <input class="input-glass mt-2" />
        </div>
        <div>
          <label class="text-sm text-white/80">Timezone</label>
          <select class="input-glass mt-2">
            <option>UTC</option>
          </select>
        </div>
      </div>
    </CardGlass>

    <CardGlass>
      <h3 class="font-semibold">Integrations</h3>
      <div class="mt-4 flex gap-3">
        <button class="btn-primary">Connect Google Calendar</button>
      </div>
    </CardGlass>
  </div>
</template>
<script>
import CardGlass from "@/components/common/CardGlass.vue";
export default { components: { CardGlass } };
</script>