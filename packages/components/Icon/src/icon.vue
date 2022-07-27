<script setup lang="ts">
import * as ionicons5 from '@vicons/ionicons5'
import { createNameSpace } from '@jsui/utils/src/create'
import { computed } from 'vue'
import { iconProps, IconProps } from './icon'
defineOptions({
  name: 'JsIcon'
})

const props: IconProps = defineProps(iconProps)

const style = computed(() => {
  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size ? { fontSize: props.size } : {})
  }
})

const a = '1'

console.log(a)

const iconComp = computed(() => {
  return props.name && (ionicons5 as { [key: string]: any })[props.name]
})

const classNs = createNameSpace('icon')

console.log(classNs.b())
</script>

<template>
  <i :class="classNs.b()" :style="style">
    <slot>
      <component :is="iconComp" v-if="props.name" />
    </slot>
  </i>
</template>
