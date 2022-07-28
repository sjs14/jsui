<script setup lang="ts">
import { computed } from 'vue'
import { nodeProps, NodeProps } from './tree'

defineOptions({
  name: 'treeNode'
})

const props: NodeProps = defineProps(nodeProps)

const key = computed(() => props.node.key)
const label = computed(() => props.node.label)
const style = computed(() => ({
  paddingLeft: `${16 * props.node.level}px`
}))
</script>

<template>
  <div :key="key" class="treeNode" :style="style">{{ label }}</div>
</template>

<style lang="less" scoped>
.treeNode {
  margin-bottom: 8px;
}
</style>
