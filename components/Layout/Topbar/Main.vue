<script lang="ts" setup>
import { useCustomizerStore } from '~/store/customizer';

const customizerStore = useCustomizerStore();
</script>

<template>
  <VAppBar density="compact">
    <VBtn @click="customizerStore.toggleDrawer()" icon size="24">
      <VIcon icon="mdi-menu" size="15" />
    </VBtn>
    <VSpacer />

    <!-- //STUB - Notification Button -->
    <LayoutTopbarNotifyButton />
    <LayoutTopbarThemModeButton />

  </VAppBar>
</template>

<style scoped></style>
