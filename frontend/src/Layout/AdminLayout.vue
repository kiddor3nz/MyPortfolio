<template>
    <sidebar>
        <div class="flex flex-col flex-1 overflow-y-auto">
            <div class="p-4">
                <router-view />
            </div>
        </div>
    </sidebar>
</template>

<script setup>
import Sidebar from '@/components/SidebarAdmin.vue';
</script>