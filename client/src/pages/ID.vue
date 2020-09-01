<!--
ID displays the route ID.
-->

<template>
  <div>Visited page with id {{ id }}.</div>
  <div>
    Try
    <router-link :to="`/${ id + 'X' }`">another page</router-link>.
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const id = ref('')
    watch(
      route,
      () => {
        id.value = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
      },
      { immediate: true }
    )
    return { id }
  },
})
</script>
