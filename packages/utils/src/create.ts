// block 代码块  js-button
// element 元素  js-button__element
// modifier 描述器   js-button__element--disabled
// state 状态    is-checked
function _BEM(prefixName: string, block: string, element: string, modifier: string): string {
    if (block) {
        prefixName += `-${block}`
    }

    if (element) {
        prefixName += `--${element}`
    }

    if (modifier) {
        prefixName += `__${modifier}`
    }

    return prefixName

}

function createBEM(prefixName: string) {

    const b = (block?: string): string => block ? _BEM(prefixName, block, '', '') : ''
    const e = (element?: string): string => element ? _BEM(prefixName, '', element, '') : ''
    const m = (modifier?: string): string => modifier ? _BEM(prefixName, '', '', modifier) : ''
    const be = (block?: string, element?: string): string => block && element ? _BEM(prefixName, block, element, '') : ''
    const bm = (block?: string, modifier?: string): string => block && modifier ? _BEM(prefixName, block, '', modifier) : ''
    const em = (element?: string, modifier?: string): string => element && modifier ? _BEM(prefixName, '', element, modifier) : ''
    const bem = (block?: string, element?: string, modifier?: string): string => block && element && modifier ? _BEM(prefixName, block, element, modifier) : ''
    const is = (name: string, state: boolean): string => (state ? `is-${name}` : '')

    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is,
    }
}


export function createNameSpace(name: string) {

    const prefixName = `js-${name}`

    return createBEM(prefixName)

}


const bem = createNameSpace('image')

console.log(bem.b('box'));
// console.log(bem.e('element'));
// console.log(bem.m('modifier'));

// console.log(bem.be('box', 'element'));
// console.log(bem.bm('box', 'modifier'));
// console.log(bem.em('element', 'modifier'));

// console.log(bem.bem('box', 'element', 'modifier'));

// console.log(bem.is('checked',true));

