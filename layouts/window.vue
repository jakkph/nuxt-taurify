<script lang="ts" setup>
</script>

<template> 
  <VApp> 
    <VMain>
      <VContainer>
        <slot />
      </VContainer>
    </VMain>
    <VFooter app class="justify-center">
      <LayoutFooterMain />
    </VFooter>
  </VApp> 
</template>

<style scoped></style>
