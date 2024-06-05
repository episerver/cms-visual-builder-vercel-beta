import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { gql, type Schema } from "@/gql"
import Button from "@/components/shared/button"

export const CTAElement : CmsComponent<Schema.CTAElementDataFragment> = ({ contentLink, data, inEditMode }) =>
{
    const href : Schema.LinkDataFragment | undefined = data.link ?? undefined
    const text = data.text ?? "Call-to-action"
    if (!href)
        return <div className="cta">{ text }</div>

    const base = href.base ?? 'https://example.com'
    const path = href.hierarchical ?? '/'
    return <Button url={ new URL(path, base) } buttonType="primary" data-epi-block-id={ inEditMode && contentLink.key }>{ text }</Button>
}
CTAElement.getDataFragment = ()=>[ "CTAElementData", fragment ]
export default CTAElement

const fragment = gql(`fragment CTAElementData on CTAElement {
    text: Text
    link: Link {
        ...LinkData
    }
}`)