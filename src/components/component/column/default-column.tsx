import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import type DefaultColumnStyles from './default.column.opti-style.json'
import { extractSettings, type LayoutProps } from "@remkoj/optimizely-cms-react/components"

export const DefaultColumn : CmsLayoutComponent<LayoutProps<typeof DefaultColumnStyles>> = ({ layoutProps, children }) => {
    const tpl = layoutProps?.template ?? "none"
    const baseClasses : string[] = ['vb:column', 'vb:template:'+tpl, 'flex-1']
    const cssClasses : string[] = ['flex', 'flex-col']
    const { contentSpacing, justifyContent, alignContent, showFrom, minWidth, overflow } = extractSettings(layoutProps)

    switch (contentSpacing) {
        case 'small':
            cssClasses.push('gap-2 py-2')
            break;
        case 'medium':
            cssClasses.push('gap-4 py-4')
            break;
        case 'large':
            cssClasses.push('gap-8 py-8 lg:gap-8 lg:py-8')
            break;
        case 'xl':
            cssClasses.push('gap-12 py-12 lg:gap-24 lg:py-24')
            break;
        case 'xxl':
            cssClasses.push('gap-16 py-16 lg:gap-72 lg:py-72')
            break;
        default:
            cssClasses.push('gap-0 py-0')
            break;
    }

    switch (justifyContent) {
        case 'center':
            cssClasses.push('justify-center')
            break;
        case 'end':
            cssClasses.push('justify-end')
            break;
        default:
            cssClasses.push('justify-start')
            break;
    }

    switch (alignContent) {
        case 'center':
            cssClasses.push('content-center')
            break;
        case 'end':
            cssClasses.push('content-end')
            break;
        default:
            cssClasses.push('content-start')
            break;
    }

    switch (showFrom) {
        case 'fromSmall':
            cssClasses.push('hidden sm:block')
            break;
        case 'fromMedium':
            cssClasses.push('hidden md:block')
            break;
        case 'fromLarge':
            cssClasses.push('hidden lg:block')
            break;
    }

    switch (minWidth) {
        case 'small':
            cssClasses.push('lg:min-w-[24rem]')
            break;
        case 'medium':
            cssClasses.push('lg:min-w-[48rem]')
            break;
        case 'large':
            cssClasses.push('lg:min-w-[64rem]')
            break;
    }

    if (!overflow || overflow == "clip") {
        cssClasses.push('overflow-hidden')
        return <div className={ [...baseClasses, ...cssClasses].join(' ') }>{ children }</div>
    }

    cssClasses.push('relative top-0')
    switch (overflow) {
        case 'right':
            cssClasses.push('left-0')
            break
        case 'left':
            cssClasses.push('right-0')
            break
    }

    switch (showFrom) {
        case 'fromSmall':
            baseClasses.push('hidden sm:block')
            break;
        case 'fromMedium':
            baseClasses.push('hidden md:block')
            break;
        case 'fromLarge':
            baseClasses.push('hidden lg:block')
            break;
    }

    return <div className={ baseClasses.join(' ')+' relative' } data-overflow={ overflow }>
        <div className={ cssClasses.join(' ') }>
            { children }
        </div>
    </div>
}

export default DefaultColumn