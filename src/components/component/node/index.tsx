import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

export const VisualBuilderNode : CmsLayoutComponent = ({ contentLink, layoutProps, children }) =>
{
    let className = ''
    switch (layoutProps?.layoutType ?? '') {
        case "outline":
            className = 'vb:outline relative w-full'
            break;
        case "grid":
            className = 'vb:grid relative w-full flex flex-col flex-nowrap justify-start'
            break;
        case "row":
            className = 'vb:row flex-1 flex flex-row flex-nowrap justify-start'
            break;
        case "column":
            className = 'vb:column flex-1 flex flex-col flex-nowrap justify-start'
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