<script lang="ts" setup>
import { WebviewWindow } from '@tauri-apps/api/window';

const newWindow = () => {
	const webview = new WebviewWindow('Never-gonna-give-you-up', {
		url: '/popup/youtube',
		width: 800,
		height: 600,
		resizable: false,
		title: 'Never Gonna Give You Up'
	});
	webview.once('tauri://created', function () {
		// webview window successfully created
	});
	webview.once('tauri://error', function (e) {
		// an error happened creating the webview window
	});
}
</script>

<template>
	<VRow>
		<VCol cols="12" class="text-center justify-center">
			<div class="my-5">
				<h1>Click the image to open the popup</h1>
			</div>
			<VCard @click="newWindow">
				<VImg src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
			</VCard>
		</VCol>
	</VRow>
</template>

<style scoped></style>
