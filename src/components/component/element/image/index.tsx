import 'server-only'
import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { gql, type Schema } from "@/gql"
import Image from 'next/image'

// To be moved to library
import { CmsEditable } from '@/components/CmsEditableRSC'

export const ImageElement : CmsComponent<Schema.ImageElementDataFragment> = ({ data: { altText, imageLink }, contentLink }) => {
    const srcBase = ((imageLink as Schema.ReferenceDataFragment).url as Schema.Maybe<Schema.LinkDataFragment> | undefined)?.base ?? 'https://example.com'
    const srcPath = ((imageLink as Schema.ReferenceDataFragment).url as Schema.Maybe<Schema.LinkDataFragment> | undefined)?.default ?? '/'
    const src = new URL(srcPath, srcBase).href
    return <CmsEditable className="relative w-full aspect-square" cmsId={ contentLink.key }>
        <Image alt={altText ?? ""} src={ src } fill className="object-cover" />
    </CmsEditable>
}
ImageElement.getDataFragment = () => ['ImageElementData', ImageElementDataFragment]

export default ImageElement

const ImageElementDataFragment = gql(`fragment ImageElementData on ImageElement {
    altText
    imageLink {
        ...ReferenceData
    }
}`)