import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import { CmsEditable } from '@/components/CmsEditableRSC'

export const VisualBuilderNode : CmsLayoutComponent = ({ contentLink, layoutProps, children }) =>
{
    let className = ''
    switch (layoutProps?.layoutType ?? '') {
        case "outline":
            className = 'relative w-full flex-1 vb:outline'
            break;
        case "grid":
            className = 'relative w-full flex flex-col flex-nowrap justify-start vb:grid'
            break;
        case "row":
            className = 'flex-1 flex flex-row flex-nowrap justify-start vb:row'
            break;
        case "column":
            className = 'flex-1 flex flex-col flex-nowrap justify-start vb:column'
            break;
        default:
            className = `vb:${layoutProps?.layoutType}`
            break;
    }
    if (layoutProps && layoutProps.layoutType == "grid")
        return <CmsEditable as="div" className={ className } cmsId={ contentLink.key }>{ children }</CmsEditable>
    return <div className={ className }>{ children }</div>
}

export default VisualBuilderNode