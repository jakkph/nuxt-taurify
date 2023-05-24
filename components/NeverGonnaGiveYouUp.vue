<script lang="ts" setup>
import { WebviewWindow } from '@tauri-apps/api/window'

const newWindow = () => {
  const webview = new WebviewWindow('Never Gonna Give You Up', {
    title: 'Never Gonna Give You Up',
    width: 800,
    height: 600,
    resizable: true,
  })
}
</script>

<template> 
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe> 
</template>

<style scoped></style>
