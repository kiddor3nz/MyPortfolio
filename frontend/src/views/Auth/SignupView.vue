<template>
    <AuthLayout>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create your new Account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="submit" class="space-y-6">
                <div>
                    <label for="name" class="block text-sm/6 font-medium text-gray-900">Full Name</label>
                    <div class="mt-2">
                        <input type="name" v-model="data.name" name="name" id="name" autocomplete="name"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input type="email" name="email" v-model="data.email" id="email" autocomplete="email"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input type="password" v-model="data.password" name="password" id="password"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="confirm-pass" class="block text-sm/6 font-medium text-gray-900">Confirm
                            Password</label>
                    </div>
                    <div class="mt-2">
                        <input type="password" v-model="data.password_confirmation" name="password" id="passwordConfirmation"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm/6 text-gray-500">
                Have an Account?
                <RouterLink :to="{ name: 'login' }" class="font-semibold text-indigo-600 hover:text-indigo-500">Login
                    Here</RouterLink>
            </p>
        </div>
    </AuthLayout>
</template>

<script setup>
import axiosClient from '@/axios';
import AuthLayout from '@/Layout/AuthLayout.vue';
import { ref } from 'vue';
import router from '@/router';


const data = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

function submit() {
axiosClient.get('/sanctum/csrf-cookie').then(response => {
    axiosClient.post("/register", data.value).then(response => {
        router.push({name: 'login'})
    })
});
}
</script>