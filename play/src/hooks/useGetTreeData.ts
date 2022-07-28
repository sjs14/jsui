import { reactive } from 'vue'

interface Tree {
  id?: string
  label?: string
  children?: Tree[]
  [key: string]: unknown
}

const fieldList = {
  label: 'label',
  key: 'id',
  children: 'children'
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        [fieldList.key]: nodeKey,
        [fieldList.label]: nodeKey.replace('node', '节点'),
        [fieldList.children]: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined
      }
    })
}
export default function useGetTreeData() {
  const data = reactive(createData(3, 3, 4))

  return {
    data
  }
}
