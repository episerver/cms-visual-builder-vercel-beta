import { CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import { CmsEditable } from '@/components/CmsEditableRSC'

type LayoutSettings = Array<{ key: string, value: string }>

export const DefaultGridComponent : CmsLayoutComponent = ({ contentLink, layoutProps, children }) =>
{
    const settings = layoutProps?.settings as LayoutSettings | undefined
    let className = undefined
    const width = settings?.filter(x => x.key == "gridWidth")[0]?.value
    switch (width) {
        case 'default':
            className = "container mx-auto"
            break
        case 'full':
            className = "w-full"
            break;
        case 'narrow':
            className = "max-w-3xl w-full mx-auto"
            break;
        case 'wide':
            className = "max-w-7xl w-full mx-auto"
            break;
        default:
            // Do nothing
            break
    }
    
    return <CmsEditable as="div" className={ `relative ${ className } flex flex-col flex-nowrap justify-start vb:grid` } cmsId={ contentLink.key }>{ children }</CmsEditable>
}

export default DefaultGridComponent