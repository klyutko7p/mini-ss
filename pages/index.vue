<script lang="ts" setup>
import { YandexMap } from "vue-yandex-maps";

const router = useRouter();

const coordinates = ref([47.98958366983051, 37.8955255423278]);
const controls = [];

let selectedAddress = ref([47.98958366983051, 37.8955255423278]);
function changeAddress() {
  coordinates.value = selectedAddress.value;
}

definePageMeta({
  layout: false,
});

onBeforeMount(() => {
  router.push('/auth/login')
})
</script>

<template>
  <Head>
    <Title>MiniSS</Title>
  </Head>
  <NuxtLayout name="main-page">
    
  </NuxtLayout>
</template>
