<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold">Contacts</h2>
      <div class="flex gap-2">
        <input
          v-model="q"
          placeholder="Search contacts..."
          class="input-glass"
        />
        <button class="btn-primary">Invite</button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <ContactCard v-for="c in contacts" :key="c.id" :contact="c" />
    </div>
  </div>
</template>


<script>
import ContactCard from "@/components/ContactCard.vue";
export default {
  components: { ContactCard },
  data() {
    return {
      q: "",
      contacts: Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        name: `Person ${i + 1}`,
        email: `p${i}@mail.com`,
      })),
    };
  },
};
</script>