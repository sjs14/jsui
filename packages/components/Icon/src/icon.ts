// 定义组件的类型声明
import { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
  name: String
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
