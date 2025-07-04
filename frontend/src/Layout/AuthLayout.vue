<template>

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <!-- Back icon section -->
        <div class="mb-4">
            <router-link to="/" type="button" class="flex items-center text-gray-600 hover:text-indigo-600">
                <!-- Back arrow icon -->
                <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
            </router-link>
        </div>
        <img class="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <slot>
        </slot>
    </div>
</template>
