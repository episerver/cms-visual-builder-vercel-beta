import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import type DefaultRowStyles from './default.row.opti-style.json'
import { extractSettings, type LayoutProps } from "@remkoj/optimizely-cms-react/components"

export const DefaultRow : CmsLayoutComponent<LayoutProps<typeof DefaultRowStyles>> = ({ layoutProps, children }) => {
    const cssClasses : string[] = ['flex-1', 'flex', 'flex-col', 'flex-nowrap', 'vb:row','vb:default-row']
    const { 
        contentSpacing = "none", 
        justifyContent = "start", 
        alignContent = "start", 
        verticalSpacing = "small",
        showAsRowFrom = "lg"
    } = extractSettings(layoutProps)

    switch (showAsRowFrom) {
        case 'md':
            cssClasses.push('md:flex-row')
            break;
        case 'lg':
            cssClasses.push('lg:flex-row')
            break;
        case 'xl':
            cssClasses.push('xl:flex-row')
            break;
    }

    switch (contentSpacing) {
        case 'small':
            cssClasses.push('gap-2')
            break;
        case 'medium':
            cssClasses.push('gap-4')
            break;
        case 'large':
            cssClasses.push('gap-4 lg:gap-8')
            break;
        case 'xl':
            cssClasses.push('gap-4 lg:gap-24')
            break;
        case 'xxl':
            cssClasses.push('gap-4 lg:gap-72')
            break;
        default:
            cssClasses.push('gap-0')
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

    switch (verticalSpacing) {
        case "small":
            cssClasses.push("my-2")
            break;
        case "medium":
            cssClasses.push("my-4")
            break;
        case "large":
            cssClasses.push("my-8")
            break;
        case 'verylarge':
            cssClasses.push('lg:my-40 my-20')
            break;
        default:
            cssClasses.push("my-0")
            break;
    }

    return <div className={ cssClasses.join(' ') }>{ children }</div>
}

export default DefaultRow