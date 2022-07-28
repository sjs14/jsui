<script setup lang="ts">
import { ref, watch } from 'vue'
import { Tree, TreeItem, treeProps, TreeProps } from './tree'
import TreeNode from './treeNode.vue'
defineOptions({
  name: 'JsTree'
})

const props: TreeProps = defineProps(treeProps)

const tree = ref<TreeItem[]>([])

watch(
  () => props.data,
  () => {
    tree.value = createTree(props.data as Tree[])

    console.log(tree.value)
  },
  {
    immediate: true
  }
)

function createTree(data: Tree[], level = 0): TreeItem[] {
  if (!data) return []
  level += 1
  return data.map(item => ({
    label: item[props.labelField!],
    key: item[props.keyField!],
    children: createTree(item[props.childrenField!] as Tree[], level),
    level,
    rawNode: item,
    isLeaf: !item[props.childrenField] || item[props.childrenField].length === 0
  }))
}
</script>

<template>
  <section class="Tree">
    <div>
      <TreeNode v-for="item in tree" :key="item.key" :node="item" />
    </div>
  </section>
</template>

<style lang="less" scoped></style>
