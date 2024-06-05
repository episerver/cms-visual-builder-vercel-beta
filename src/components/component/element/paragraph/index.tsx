import { gql, type Schema } from '@/gql'
import { type CmsComponent } from '@remkoj/optimizely-cms-react'
import { getServerContext, getFactory } from '@remkoj/optimizely-cms-react/rsc'

import { RichText } from '@/components/StructuredHtml'
import { CmsEditable } from '@/components/CmsEditableRSC'

export const ParagraphElement : CmsComponent<Schema.ParagraphElementDataFragment> = ({ data: { paragraph }, contentLink, inEditMode }) =>
{
    const { factory } = getServerContext()
    return <CmsEditable as={RichText} factory={ factory ?? getFactory() } text={ paragraph?.json } cmsId={ contentLink.key }/>
}
ParagraphElement.getDataFragment = () => ['ParagraphElementData', ParagraphElementData]

export default ParagraphElement

const ParagraphElementData = gql(`fragment ParagraphElementData on ParagraphElement {
    paragraph: text {
        json
    }
}`)