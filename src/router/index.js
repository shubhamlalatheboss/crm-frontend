import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import HomeView from '../views/HomeView.vue'
import Dashboard from '../pages/Dashboard.vue'
import Clients from '../pages/Clients.vue'
import Leads from '../pages/Leads.vue'
import Deals from '../pages/Deals.vue'
import Tasks from '../pages/Tasks.vue'
import Settings from '../pages/Settings.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // Default page (could be a landing page)
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard, // Dashboard page
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients, // Clients management page
  },
  {
    path: '/leads',
    name: 'Leads',
    component: Leads, // Leads management page
  },
  {
    path: '/deals',
    name: 'Deals',
    component: Deals, // Deals page
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks, // Tasks management page
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings, // Settings page
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Automatically picks up base URL
  routes, // Routes array
})

export default router
