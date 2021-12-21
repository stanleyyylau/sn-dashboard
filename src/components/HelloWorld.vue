<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const userStore = useUserStore();

onMounted(() => {
  userStore.setUser({
    name: "stanley",
    avatar: "baidu.com"
  })
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>user: {{userStore.user?.name}}</h2>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="scss">
</style>
