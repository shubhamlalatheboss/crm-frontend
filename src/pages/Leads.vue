<template>
  <div class="p-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Leads</h2>
      <button
        @click="openForm()"
        class="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm"
      >
        + Add Lead
      </button>
    </div>

    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search leads..."
        class="w-full px-4 py-2 border border-zinc-300 rounded-md text-sm"
      />
    </div>

    <div v-if="showForm" class="mb-6">
      <form @submit.prevent="handleSubmit" class="bg-white p-4 rounded-md shadow-md">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input v-model="form.name" type="text" placeholder="Name" class="px-3 py-2 border rounded" required />
          <input v-model="form.email" type="email" placeholder="Email" class="px-3 py-2 border rounded" required />
          <input v-model="form.status" type="text" placeholder="Status" class="px-3 py-2 border rounded" required />
          <input v-model="form.source" type="text" placeholder="Source" class="px-3 py-2 border rounded" required />
          <input
            v-model="form.assigned_to"
            type="number"
            placeholder="Assigned To (User ID)"
            class="px-3 py-2 border rounded"
            required
          />
        </div>
        <div class="mt-4 flex justify-end space-x-2">
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
            {{ isEditMode ? 'Update' : 'Add' }} Lead
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
            <th class="p-4">Status</th>
            <th class="p-4">Source</th>
            <th class="p-4">Assigned To</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lead in filteredLeads" :key="lead.id" class="border-t hover:bg-zinc-50">
            <td class="p-4">{{ lead.name }}</td>
            <td class="p-4">{{ lead.email }}</td>
            <td class="p-4">{{ lead.status }}</td>
            <td class="p-4">{{ lead.source }}</td>
            <td class="p-4">{{ lead.assigned_to }}</td>
            <td class="p-4">
              <button @click="openForm(lead)" class="text-blue-500 text-sm mr-2">Edit</button>
              <button @click="deleteLead(lead.id)" class="text-red-500 text-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const leads = ref([])
const search = ref('')
const showForm = ref(false)
const isEditMode = ref(false)
const editingId = ref(null)

const form = ref({
  name: '',
  email: '',
  status: '',
  source: '',
  assigned_to: 1
})

const fetchLeads = async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/leads')
    leads.value = res.data
    alert('Leads fetched: ' + JSON.stringify(res.data))
  } catch (err) {
    alert('Error fetching leads: ' + err.message)
  }
}

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.status || !form.value.source || !form.value.assigned_to) {
    alert('Please fill in all fields.')
    return
  }

  alert((isEditMode.value ? 'Updating' : 'Creating') + ' lead with data:\n' + JSON.stringify(form.value))

  try {
    if (isEditMode.value) {
      await axios.put(`http://localhost:8000/api/leads/${editingId.value}`, form.value)
      alert('Lead updated successfully.')
    } else {
      await axios.post('http://localhost:8000/api/leads', form.value)
      alert('Lead created successfully.')
    }
    cancelForm()
    fetchLeads()
  } catch (error) {
    alert('Error submitting form: ' + error.message)
  }
}

const deleteLead = async (id) => {
  const confirmDelete = confirm('Are you sure you want to delete this lead?')
  if (!confirmDelete) return

  alert('Deleting lead with ID: ' + id)

  try {
    await axios.delete(`http://localhost:8000/api/leads/${id}`)
    alert('Lead deleted successfully.')
    fetchLeads()
  } catch (error) {
    alert('Error deleting lead: ' + error.message)
  }
}

function openForm(lead = null) {
  showForm.value = true
  if (lead) {
    alert('Opening form in edit mode with data:\n' + JSON.stringify(lead))
    form.value = { ...lead }
    editingId.value = lead.id
    isEditMode.value = true
  } else {
    alert('Opening form to add new lead.')
    form.value = {
      name: '',
      email: '',
      status: '',
      source: '',
      assigned_to: 1
    }
    editingId.value = null
    isEditMode.value = false
  }
}

function cancelForm() {
  showForm.value = false
  form.value = {
    name: '',
    email: '',
    status: '',
    source: '',
    assigned_to: 1
  }
  editingId.value = null
}

const filteredLeads = computed(() => {
  if (!search.value) return leads.value
  return leads.value.filter(lead =>
    lead.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

onMounted(() => {
  fetchLeads()
})
</script>
