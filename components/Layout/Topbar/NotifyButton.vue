<script lang="ts" setup>
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

const notify = async () => {
	const permissionGranted = await isPermissionGranted();

	if (!permissionGranted) {
		const permission = requestPermission();
		await permission === 'granted';
	}
	if (permissionGranted) {
		sendNotification({
			title: "Notification Title",
			body: "This is a notification body",
		});
	}
}
</script>

<template>
	<VBtn @click="notify" icon size="24">
		<VIcon icon="mdi-bell" size="15" />
	</VBtn>
</template>

<style scoped></style>
