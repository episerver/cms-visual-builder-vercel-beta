import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { gql, type Schema } from "@/gql"

export const HeadingElement : CmsComponent<Schema.HeadingElementDataFragment> = ({ data: { headingText }, contentLink, inEditMode }) => {
    return <div className="text-5xl p-4 md:p-8 xl:p-10" data-epi-block-id={ inEditMode ? contentLink.key : undefined }>{ headingText ?? ""}</div>
}
HeadingElement.getDataFragment = () => ['HeadingElementData', HeadingElementDataFragment]

export default HeadingElement

const HeadingElementDataFragment = gql(`fragment HeadingElementData on HeadingElement {
    headingText
}`)