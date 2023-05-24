<script lang="ts" setup>
</script>

<template>
  <!-- //SECTION - LAYOUT -->
  <VApp>
    <LayoutTopbarMain />
    <LayoutSidebarMain />
    <VMain>
      <VContainer>
        <slot />
      </VContainer>
    </VMain>
    <VFooter app class="justify-center">
      <LayoutFooterMain />
    </VFooter>
  </VApp>
  <!-- //!SECTION - LAYOUT -->
</template>

<style scoped></style>
