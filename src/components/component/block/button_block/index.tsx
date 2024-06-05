import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import Button from "@/components/shared/button"
import { ButtonBlockDataFragmentDoc, type ButtonBlockDataFragment, type LinkDataFragment } from "@/gql/graphql"

export const ButtonBlock : CmsComponent<ButtonBlockDataFragment> = ({ data }) => 
{
    const link : LinkDataFragment | undefined | null = data.link
    const hrefBase = link?.base ?? 'http://example.com'
    const hrefPath = link?.default ?? '/'
    const href = new URL(hrefPath, hrefBase)
    return <Button url={ href } buttonType={ (data.buttonType ?? undefined) as "primary" | "secondary" | undefined } buttonVariant={ (data.variant ?? undefined) as "default" | "cta" | undefined } className={ data.className ?? undefined } >{data.text ?? ''}</Button>
}
ButtonBlock.getDataFragment = () => ['ButtonBlockData', ButtonBlockDataFragmentDoc ]

export default ButtonBlock