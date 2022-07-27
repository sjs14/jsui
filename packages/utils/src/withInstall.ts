import { Plugin } from 'vue'

export function withInstall<T>(comp: T): T & Plugin {
    (comp as T & Plugin).install = (app) => {
        const { name } = comp as T & { name: string }
        app.component(name, comp)
    }

    return comp as (T & Plugin)
}
