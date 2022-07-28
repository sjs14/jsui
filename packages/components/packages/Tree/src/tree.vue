<script setup lang="ts">
import { ref, watch, computed } from 'vue'
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

const expendedKeysSet = ref(new Set(props.defaultExpandedKeys))

const flatTree = computed(() => {
  const stack = []
  const flatTree = []
  const expendedKeys = expendedKeysSet.value
  for (let i = tree.value.length - 1; i >= 0; i--) {
    stack.push(tree.value[i])
  }
  while (stack.length) {
    const item = stack.pop()
    if (!item) continue
    flatTree.push(item)
    if (expendedKeys.has(item.key)) {
      if (item.children && item.children.length > 0) {
        for (let i = item.children.length - 1; i >= 0; i--) {
          stack.push(item.children[i])
        }
      }
    }
  }
  return flatTree
})

console.log(56, flatTree)
</script>

<template>
  <section class="Tree">
    <div>
      <TreeNode v-for="item in flatTree" :key="item.key" :node="item" />
    </div>
  </section>
</template>

<style lang="less" scoped></style>
