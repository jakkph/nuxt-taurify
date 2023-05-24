<script lang="ts" setup>
const tools = ref([
  {
    name: 'Nuxt 3',
    img: 'https://nuxt.com/assets/design-kit/logo/icon-green.svg',
    href: 'https://nuxt.com',
    version: "3.5.1",
  },
  {
    name: 'Tauri',
    img: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png',
    href: 'https://tauri.app',
    version: "1.3.1",
  },
  {
    name: 'Vuetify',
    img: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-dark.svg',
    href: 'https://vuetifyjs.com/',
    version: "3.3.1",
  },
  {
    name: 'Pinia',
    img: 'https://pinia.vuejs.org/logo.svg',
    href: 'https://pinia.vuejs.org/ssr/nuxt.html',
    version: '0.4.11'
  }
])
</script>

<template>
	<VRow>
		<VCol cols="12" class="text-center mt-5"> 
			<VTable>
    <thead>
      <tr>
        <th class="text-center font-weight-bold">
          Tools
        </th>
        <th class="text-center font-weight-bold">
          Version
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tools" :key="item.name">
        <td>
          <a :href="item.href" target="_blank">
            <VImg :src="item.img" height="20" :alt="item.name" />
          </a>
        </td>
        <td>{{ item.version }}</td>
      </tr>
    </tbody>
  </VTable>
		</VCol>
	</VRow>
</template>


<style scoped></style>
