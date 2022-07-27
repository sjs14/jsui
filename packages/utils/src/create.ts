// block 代码块  js-button
// modifier 元素  js-button__element
// element 描述器   js-button__element--disabled
// state 状态    is-checked
function _BEM(prefixName: string, block: string, element: string, modifier: string): string {
    if (block) {
        prefixName += `-${block}`
    }

    if (element) {
        prefixName += `__${element}`
    }

    if (modifier) {
        prefixName += `--${modifier}`
    }

    return prefixName

}

function createBEM(prefixName: string) {

    const b = (block?: string): string => block ? _BEM(prefixName, block, '', '') : prefixName
    const e = (modifier?: string): string => modifier ? _BEM(prefixName, '', '', modifier) : prefixName
    const m = (element?: string): string => element ? _BEM(prefixName, '', element, '') : prefixName
    const be = (block?: string, modifier?: string): string => block && modifier ? _BEM(prefixName, block, '', modifier) : prefixName
    const bm = (block?: string, element?: string): string => block && element ? _BEM(prefixName, block, element, '') : prefixName
    const em = (modifier?: string, element?: string): string => modifier && element ? _BEM(prefixName, '', element, modifier) : prefixName
    const bem = (block?: string, modifier?: string, element?: string): string => block && modifier && element ? _BEM(prefixName, block, element, modifier) : prefixName
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
// console.log(bem.e('modifier'));
// console.log(bem.m('element'));

// console.log(bem.be('box', 'modifier'));
// console.log(bem.bm('box', 'element'));
// console.log(bem.em('modifier', 'element'));

// console.log(bem.bem('box', 'modifier', 'element'));

// console.log(bem.is('checked',true));

