import { withInstall } from '@jsui/utils/src/withInstall'
import _Tree from './src/tree.vue'

const Tree = withInstall(_Tree)

export default Tree

declare module 'vue' {
  export interface GlobalComponents {
    JsTree: typeof Tree
  }
}
