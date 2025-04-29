<template>
  <form @submit.prevent="onSubmit" class="bg-white p-4 rounded-md shadow-md mb-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input v-model="localForm.name" type="text" placeholder="Name" class="px-3 py-2 border rounded" required />
      <input v-model="localForm.status" type="text" placeholder="Status" class="px-3 py-2 border rounded" required />
      <input v-model="localForm.source" type="text" placeholder="Source" class="px-3 py-2 border rounded" required />
    </div>
    <div class="mt-4 flex justify-end space-x-2">
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
        {{ localForm.id ? 'Update' : 'Add' }} Lead
      </button>
      <button @click="$emit('cancel')" type="button" class="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-sm">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  lead: {
    type: Object,
    default: null
  }
})
const emit = defineEmits(['submit', 'cancel'])

const localForm = ref({
  name: '',
  status: '',
  source: '',
  email: '',           // Add this
  assigned_to: 1    // And this
})

watch(() => props.lead, (newLead) => {
  if (newLead) {
    localForm.value = { ...newLead }
  } else {
    localForm.value = { name: '', status: '', source: '' }
  }
}, { immediate: true })

function onSubmit() {
  emit('submit', { ...localForm.value })
}
</script>
