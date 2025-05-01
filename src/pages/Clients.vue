<template>
  <div class="p-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Clients</h2>
      <button
        @click="openForm()"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
      >
        + Add Client
      </button>
    </div>

    <div v-if="showForm" class="mb-6">
      <form @submit.prevent="handleSubmit" class="bg-white p-4 rounded-md shadow-md">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input v-model="form.name" type="text" placeholder="Name" class="px-3 py-2 border rounded" required />
          <input v-model="form.email" type="email" placeholder="Email" class="px-3 py-2 border rounded" required />
        </div>
        <div class="mt-4 flex justify-end space-x-2">
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
            {{ isEditMode ? 'Update' : 'Add' }} Client
          </button>
          <button @click="cancelForm" type="button" class="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-sm">
            Cancel
          </button>
        </div>
      </form>
    </div>

    <div class="bg-white rounded-lg shadow overflow-auto">
      <table class="w-full text-sm">
        <thead class="bg-zinc-100 text-left">
          <tr>
            <th class="p-4">Name</th>
            <th class="p-4">Email</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id" class="border-t hover:bg-zinc-50">
            <td class="p-4">{{ client.name }}</td>
            <td class="p-4">{{ client.email }}</td>
            <td class="p-4">
              <button @click="openForm(client)" class="text-blue-500 text-sm mr-2">Edit</button>
              <button @click="deleteClient(client.id)" class="text-red-500 text-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const clients = ref([])
const showForm = ref(false)
const isEditMode = ref(false)
const editingId = ref(null)

const form = ref({
  name: '',
  email: ''
})

const fetchClients = async () => {
  try {
    const res = await axios.get('https://crm-backend-production-7172.up.railway.app/api/clients')
    clients.value = res.data
  } catch (err) {
    alert('Failed to fetch clients')
  }
}

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email) {
    alert('Please fill in all fields.')
    return
  }

  try {
    if (isEditMode.value) {
      await axios.put(`https://crm-backend-production-7172.up.railway.app/api/clients/${editingId.value}`, form.value)
    } else {
      await axios.post('https://crm-backend-production-7172.up.railway.app/api/clients', form.value)
    }
    cancelForm()
    fetchClients()
  } catch (err) {
    alert('Error while saving client')
  }
}

const deleteClient = async (id) => {
  if (confirm('Are you sure you want to delete this client?')) {
    try {
      await axios.delete(`https://crm-backend-production-7172.up.railway.app/api/clients/${id}`)
      fetchClients()
    } catch (err) {
      alert('Error while deleting client')
    }
  }
}

function openForm(client = null) {
  showForm.value = true
  if (client) {
    form.value = { ...client }
    editingId.value = client.id
    isEditMode.value = true
  } else {
    form.value = {
      name: '',
      email: ''
    }
    editingId.value = null
    isEditMode.value = false
  }
}

function cancelForm() {
  showForm.value = false
  form.value = {
    name: '',
    email: ''
  }
  editingId.value = null
}

onMounted(() => {
  fetchClients()
})
</script>
