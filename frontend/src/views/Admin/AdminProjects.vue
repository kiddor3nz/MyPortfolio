<template>
    <div class="max-w-4xl mx-auto p-6">
        <h2 class="text-2xl font-bold mb-4">Projects</h2>

        <!-- Upload New Project Form -->
        <form @submit.prevent="createProject" enctype="multipart/form-data" class="space-y-4 mb-8">
            <div>
                <label class="block mb-1 font-medium">Project Name</label>
                <input v-model="form.projectName" type="text" required class="w-full px-4 py-2 border rounded" />
            </div>

            <div>
                <label class="block mb-1 font-medium">Description</label>
                <textarea v-model="form.description" required class="w-full px-4 py-2 border rounded"></textarea>
            </div>

            <div>
                <label class="block mb-1 font-medium">Image</label>
                <input type="file" @change="handleFileUpload" accept="image/*" class="w-full" />
            </div>

            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Upload Project
            </button>
        </form>

        <!-- Projects Table -->
        <table class="min-w-full border border-gray-200 rounded shadow-sm text-sm">
            <thead class="bg-gray-100 text-left">
                <tr>
                    <th class="px-4 py-2">#</th>
                    <th class="px-4 py-2">Project</th>
                    <th class="px-4 py-2">Description</th>
                    <th class="px-4 py-2">Image</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project, index) in projects" :key="project.id" class="border-t">
                    <td class="px-4 py-2">{{ index + 1 }}</td>
                    <td class="px-4 py-2">{{ project.projectName }}</td>
                    <td class="px-4 py-2">{{ project.description }}</td>
                    <td class="px-4 py-2">
                        <img v-if="project.image" :src="project.image" alt="Project"
                            class="w-20 h-20 object-cover rounded" />
                        <span v-else class="text-gray-400 italic">No image</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '@/axios'

const projects = ref([])

const form = ref({
    projectName: '',
    description: '',
    image: null
})

const handleFileUpload = (event) => {
    form.value.image = event.target.files[0]
}

const createProject = async () => {
    try {
        const formData = new FormData()
        formData.append('projectName', form.value.projectName)
        formData.append('description', form.value.description)
        if (form.value.image) {
            formData.append('image', form.value.image)
        }

        const response = await axiosClient.post('/api/projects', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        projects.value.push(response.data)

        // Reset form
        form.value = {
            projectName: '',
            description: '',
            image: null
        }
    } catch (error) {
        console.error('Upload failed:', error.response?.data || error.message)
    }
}

onMounted(() => {
    axiosClient.get('/api/projects')
        .then((res) => {
            projects.value = res.data
        })
})
</script>
