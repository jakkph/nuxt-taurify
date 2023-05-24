<script setup lang="ts">
import { getName, getTauriVersion, getVersion } from '@tauri-apps/api/app';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

definePageMeta({
    layout: 'window',
})
</script>

<template>
    <div></div>
</template>

<style scoped>
</style>