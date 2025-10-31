<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold">Scheduler</h2>
      <button class="btn-primary" @click="openCreate">Schedule new call</button>
    </div>

    <div class="bg-white/3 rounded-2xl p-4">
      <FullCalendar :options="calendarOptions" />
    </div>

    <SchedulerModal
      v-if="showModal"
      :eventData="selectedEvent"
      @close="closeModal"
    />
  </div>
</template>


<script>


export default {
  components: { FullCalendar, SchedulerModal },
  setup() {
    const showModal = ref(false);
    const selectedEvent = ref(null);
    const calendarOptions = {
      plugins: [timeGridPlugin, interactionPlugin],
      initialView: "timeGridWeek",
      events: [],
    };
    function openCreate() {
      selectedEvent.value = null;
      showModal.value = true;
    }
    function closeModal() {
      showModal.value = false;
    }
    return {
      calendarOptions,
      showModal,
      selectedEvent,
      openCreate,
      closeModal,
    };
  },
};
</script>