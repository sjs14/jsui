import { ExtractPropTypes, PropType } from 'vue'

export interface TreeItem extends Required<Tree> {
  level: number
  rawNode: Tree,
  children:TreeItem[],
  isLeaf:boolean
}

export interface Tree {
  key?: string
  label?: string
  children?: Tree[]
  [key: string]: unknown
}

export const treeProps = {
  data: {
    type: Array as PropType<Tree[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  }
} as const

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>

export const nodeProps = {
  node: {
    type: Object as PropType<TreeItem>,
    default: () => []
  }
}

export type NodeProps = ExtractPropTypes<typeof nodeProps>
