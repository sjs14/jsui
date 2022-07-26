<script setup lang="ts">
import { createNameSpace } from '@jsui/utils/src/create'
import { computed, toRefs } from 'vue';
// import { IconProps } from './index'
defineOptions({
    name: 'JsIcon'
})

type IconProps = {
    color?: string,
    size?: number | string
}

const props = withDefaults(defineProps<IconProps>(), {
    color: 'inherit',
    size: 'inherit'
})

computed(() => {
    return {
        ...(props.color ? { color: props.color } : {}),
        ...(props.size ? { fontSize: props.size } : {})
    }
})

const classNs = createNameSpace('icon')
</script>

<template>
    <i :class="classNs.b()">
        <slot />
    </i>
</template>

<style lang="less" scoped>
.JsIcon {}
</style>
