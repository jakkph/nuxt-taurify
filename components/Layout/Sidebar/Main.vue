<script lang="ts" setup> 
import { useCustomizerStore } from '~/store/customizer';
import sidebarItems from './sidebarItems';

const customizerStore = useCustomizerStore(); 
</script>

<template>
  <VNavigationDrawer v-model="customizerStore.drawer"> 
    <VList v-for="item in sidebarItems" class="mx-2">
      <VListItem :to="item.to" :href="item.to" rounded>
        <template v-slot:prepend>
          <VIcon :icon="item.icon" size="15"/>
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </template>
      </VListItem>
    </VList> 
  </VNavigationDrawer>
</template>

<style scoped></style>
