<script lang="ts" setup>
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

const notify = async ()  => {
  const permissionGranted = await isPermissionGranted();

	if (!permissionGranted) {
		const permission = requestPermission();
		await permission === 'granted';
	}
	if (permissionGranted) {
		sendNotification({ title: 'Nuxt Taurify', body: 'Never Gonna Give You Up' });
	}
}
</script>

<template>
   <VBtn @click="notify" icon size="24">
      <VIcon icon="mdi-bell" size="15" />
    </VBtn>
</template>

<style scoped></style>
