<script lang="ts" setup>
import { useTheme } from "vuetify"

const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
    <VBtn @click="toggleTheme" icon size="24">
      <VIcon icon="mdi-theme-light-dark" size="15" />
    </VBtn>
</template>

<style scoped></style>
