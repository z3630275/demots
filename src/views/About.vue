<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ count }}
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(10)
    return {
      count,
    }
  },
})
</script>
