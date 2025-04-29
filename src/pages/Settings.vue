<!-- src/pages/Settings.vue -->
<template>
  <div>
    <h1 class="text-2xl font-semibold text-primary">Settings</h1>
    <p class="mt-4">Configure your CRM settings here.</p>

    <!-- Settings Form -->
    <div class="mt-6">
      <form>
        <div class="mb-4">
          <label for="username" class="block text-sm">Username</label>
          <input type="text" id="username" class="w-full px-4 py-2 border rounded-lg" placeholder="Enter your username">
        </div>
        
        <div class="mb-4">
          <label for="email" class="block text-sm">Email</label>
          <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg" placeholder="Enter your email">
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm">Password</label>
          <input type="password" id="password" class="w-full px-4 py-2 border rounded-lg" placeholder="Enter your password">
        </div>

        <button type="submit" class="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Add logic for settings if needed
</script>

<style scoped>
/* Add custom styles for the Settings page if needed */
</style>
