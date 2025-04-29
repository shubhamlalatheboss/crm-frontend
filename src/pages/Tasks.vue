<!-- src/pages/Tasks.vue -->
<template>
  <div>
    <h1 class="text-2xl font-semibold text-primary">Tasks</h1>
    <p class="mt-4">Track and manage your tasks here.</p>
    
    <!-- Add your tasks table, list, or cards here -->
    <div class="mt-6">
      <button class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Add New Task</button>
    </div>

    <!-- Placeholder for displaying tasks -->
    <div class="mt-4">
      <ul>
        <li class="border-b py-2">Task 1 - In Progress</li>
        <li class="border-b py-2">Task 2 - Completed</li>
        <li class="border-b py-2">Task 3 - Pending</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Add logic for tasks if needed
</script>

<style scoped>
/* Add custom styles for the Tasks page if needed */
</style>
