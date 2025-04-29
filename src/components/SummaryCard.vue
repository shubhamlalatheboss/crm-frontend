<!-- src/components/SummaryCard.vue -->
<template>
  <div class="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-zinc-500">{{ label }}</span>
      <span class="text-teal-500">{{ icon }}</span>
    </div>
    <h3 class="text-3xl font-bold text-zinc-800">{{ value }}</h3>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  icon: String,
  value: [String, Number]
})
</script>
