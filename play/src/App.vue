<script setup lang="ts">
import { ref } from 'vue';

const num = ref<number>(1)

setTimeout(() => {
  num.value = 2
}, 2000);
</script>

<template>
  <section class="App">
    <h1>{{ num }}</h1>
    <js-icon color="red" size="32px" name="Airplane"></js-icon>
    <js-icon color="yellow" size="32px" name="AddCircle"></js-icon>
    <js-icon color="grren" size="32px" name="Alarm"></js-icon>
  </section>
</template>

<style lang="less" scoped>
.App {}
</style>
