<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      <div>
        <h1 class="text-2xl font-bold text-teal-500 mb-10">MiniCRM</h1>
        <nav class="space-y-4">
          <router-link to="/dashboard" class="flex items-center text-zinc-700 hover:text-teal-500 transition">
            📊 <span class="ml-2">Dashboard</span>
          </router-link>
          <router-link to="/leads" class="flex items-center text-zinc-700 hover:text-teal-500 transition">
            👤 <span class="ml-2">Leads</span>
          </router-link>
          <router-link to="/clients" class="flex items-center text-zinc-700 hover:text-teal-500 transition">
            🤝 <span class="ml-2">Clients</span>
          </router-link>
          <router-link to="/deals" class="flex items-center text-zinc-700 hover:text-teal-500 transition">
            📂 <span class="ml-2">Deals</span>
          </router-link>
          <router-link to="/tasks" class="flex items-center text-zinc-700 hover:text-teal-500 transition">
            ✅ <span class="ml-2">Tasks</span>
          </router-link>
          <router-link to="/settings" class="flex items-center text-zinc-700 hover:text-teal-500 transition">
            ⚙️ <span class="ml-2">Settings</span>
          </router-link>
        </nav>
      </div>
      <button class="text-sm text-zinc-500 hover:text-teal-500 transition">Logout</button>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 overflow-y-auto sliver">
      <!-- Topbar -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-3xl font-bold">Dashboard</h2>
          <p class="text-sm text-zinc-500 mt-1">Overview of your CRM activity</p>
        </div>
        <div class="flex items-center gap-4">
          <input type="text" placeholder="Search..." v-model="searchQuery" class="px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm" />
          <button class="bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-md" @click="addLead">+ Add Lead</button>
          <img src="https://i.pravatar.cc/40" alt="Avatar" class="rounded-full w-10 h-10" />
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-zinc-500">Total Leads</span>
            <span class="text-teal-500">📈</span>
          </div>
          <h3 class="text-3xl font-bold text-zinc-800">{{ totalLeads }}</h3>
        </div>
        <div class="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-zinc-500">Clients</span>
            <span class="text-teal-500">👥</span>
          </div>
          <h3 class="text-3xl font-bold text-zinc-800">{{ totalClients }}</h3>
        </div>
        <div class="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-zinc-500">Active Deals</span>
            <span class="text-teal-500">💼</span>
          </div>
          <h3 class="text-3xl font-bold text-zinc-800">{{ activeDeals }}</h3>
        </div>
        <div class="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-zinc-500">Pending Tasks</span>
            <span class="text-teal-500">📝</span>
          </div>
          <h3 class="text-3xl font-bold text-zinc-800">{{ pendingTasks }}</h3>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul class="space-y-4 text-sm">
          <li class="flex justify-between border-b pb-2">
            <div>✅ Followed up with <strong>Acme Inc</strong></div>
            <span class="bg-zinc-100 text-zinc-500 px-2 py-1 rounded text-xs">3 hrs ago</span>
          </li>
          <li class="flex justify-between border-b pb-2">
            <div>📞 Scheduled a call with <strong>Sarah Lee</strong></div>
            <span class="bg-zinc-100 text-zinc-500 px-2 py-1 rounded text-xs">Yesterday</span>
          </li>
          <li class="flex justify-between">
            <div>✉️ Sent welcome email to <strong>New Lead</strong></div>
            <span class="bg-zinc-100 text-zinc-500 px-2 py-1 rounded text-xs">2 days ago</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      searchQuery: '',
      totalLeads: 128,
      totalClients: 45,
      activeDeals: 12,
      pendingTasks: 7,
    };
  },
  methods: {
    addLead() {
      alert('Add Lead button clicked');
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}

.sliver {background:rgb(250 250 250 / var(--tw-bg-opacity, 1));}
</style>
