<template>
  <div class="space-y-6">
    <section class="grid grid-cols-12 gap-6 items-start">
      <div class="col-span-8">
        <CardGlass>
          <div class="flex justify-between">
            <div>
              <h1 class="text-3xl font-semibold">Good afternoon</h1>
              <p class="text-white/70 mt-2">
                Next call: <strong>Design sync with Maria — in 45 mins</strong>
              </p>
            </div>
            <div class="text-right">
              <div class="text-xs text-white/60">Availability</div>
              <div class="mt-2 px-3 py-1 rounded-full bg-white/6 inline-block">
                Online
              </div>
            </div>
          </div>
        </CardGlass>

        <div class="mt-6 grid grid-cols-2 gap-4">
          <CardGlass v-for="n in 4" :key="n">
            <div>
              <p class="font-semibold">Design Sync</p>
              <p class="text-sm text-white/70">Today • 9:30 AM • 30 mins</p>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="btn-primary">Join</button>
              <button class="px-3 py-2 rounded-xl bg-white/6">Details</button>
            </div>
          </CardGlass>
        </div>
      </div>

      <div class="col-span-4 space-y-4">
        <CardGlass>
          <small class="text-white/60">This week</small>
          <MiniCalendar />
        </CardGlass>

        <CardGlass>
          <h4 class="font-semibold">Quick Actions</h4>
          <div class="mt-4 flex flex-col gap-3">
            <button class="btn-primary">Schedule a Call</button>
            <button class="px-4 py-3 rounded-xl bg-white/6">
              Invite Contacts
            </button>
          </div>
        </CardGlass>
      </div>
    </section>
  </div>
</template>


<script>
import CardGlass from "@/components/common/CardGlass.vue";
import MiniCalendar from "@/components/MiniCalendar.vue";
export default { components: { CardGlass, MiniCalendar } };
</script>