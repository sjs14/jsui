<script setup lang="ts">
import { ref } from 'vue'

const num = ref<number>(111231)
</script>

<template>
  <section class="App">
    <h1>{{ num }}</h1>
    <js-icon color="red" size="32px" name="Airplane" />
    <js-icon color="yellow" size="32px" name="AddCircle" />
    <js-icon color="grren" size="32px" name="Alarm" />
  </section>
</template>

<style lang="less" scoped>
.App {
}
</style>
