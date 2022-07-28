<script setup lang="ts">
import { computed } from 'vue'
import { nodeProps, NodeProps, TreeItem } from './tree'

defineOptions({
  name: 'treeNode'
})

const props: NodeProps = defineProps(nodeProps)

const key = computed(() => props.node.key)
const label = computed(() => props.node.label)
const children = computed(() => props.node.children as TreeItem[])
const style = computed(() => ({
  paddingLeft: `${10 * props.node.level}px`
}))
</script>

<template>
  <div :key="key" class="treeNode" :style="style">
    <p>{{ label }}</p>
    <div v-if="children && children.length > 0">
      <treeNode v-for="item in children" :key="item.key" :node="item" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.treeNode{
  margin-bottom: 8px;
}
</style>
