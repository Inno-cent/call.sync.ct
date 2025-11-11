<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/40" @click="$emit('close')"></div>
    <div class="z-50 w-full max-w-2xl p-6 card-glass">
      <h3 class="text-xl font-semibold">Schedule Call</h3>
      <form @submit.prevent="save" class="mt-4 grid grid-cols-2 gap-4">
        <div class="col-span-2">
          <label class="text-sm text-white/80">Title</label>
          <input v-model="title" class="input-glass mt-2" />
        </div>
        <div>
          <label class="text-sm text-white/80">Date</label>
          <input type="date" v-model="date" class="input-glass mt-2" />
        </div>
        <div>
          <label class="text-sm text-white/80">Time</label>
          <input type="time" v-model="time" class="input-glass mt-2" />
        </div>
        <div class="col-span-2">
          <label class="text-sm text-white/80"
            >Participants (comma separated emails)</label
          >
          <input v-model="participants" class="input-glass mt-2" />
        </div>

        <div class="col-span-2 flex gap-3 justify-end mt-2">
          <button
            type="button"
            class="px-4 py-2 rounded-xl bg-white/6"
            @click="$emit('close')"
          >
            Cancel
          </button>
          <button type="submit" class="btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  props: ["eventData"],
  data() {
    return { title: "", date: "", time: "", participants: "" };
  },
  methods: {
    save() {
      console.log("create", {
        title: this.title,
        date: this.date,
        time: this.time,
      });
      this.$emit("close");
    },
  },
};
</script>