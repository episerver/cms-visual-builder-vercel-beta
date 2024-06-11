import { CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import type DefaultGridStyles from './default.grid.opti-style.json'
import { type LayoutProps, extractSettings } from "@remkoj/optimizely-cms-react/components"

type DefaultGridLayout = LayoutProps<typeof DefaultGridStyles>

export const DefaultGridComponent : CmsLayoutComponent<DefaultGridLayout> = ({ contentLink, layoutProps, children }) =>
{
    let className = undefined
    const { 
        gridWidth = "default",
        vSpacing = "default"
    } = extractSettings(layoutProps)

    switch (gridWidth) {
        case 'default':
            className = "container mx-auto px-8"
            break
        case 'full':
            className = "w-full"
            break;
        case 'narrow':
            className = "max-w-3xl w-full mx-auto px-8"
            break;
        case 'wide':
            className = "max-w-7xl w-full mx-auto px-8"
            break;
    }

    switch (vSpacing) {
        case 'small':
            className = className + " py-4 md:py-8 lg:py-12"
            break
        case 'large':
            className = className + " py-8 md:py-16 lg:py-24"
            break
    }
    
    return <CmsEditable as="div" className={ `relative ${ className } flex flex-col flex-nowrap justify-start vb:grid` } cmsId={ contentLink.key }>{ children }</CmsEditable>
}

export default DefaultGridComponent