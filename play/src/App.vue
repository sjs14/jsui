<script setup lang="ts">
import { toRefs } from 'vue'
import useGetTreeData from './hooks/useGetTreeData'

const { data } = toRefs(useGetTreeData())
</script>

<template>
  <section class="App">
    <js-icon color="red" size="32px" name="Add" />
    <js-icon color="yellow" size="32px" name="AddCircle" />
    <js-icon color="grren" size="32px" name="Alarm" />

    <js-tree :data="data" key-field="id" />
  </section>
</template>

<style lang="less" scoped>
.App {
  text-align: left;
}
</style>
