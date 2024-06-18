'use client'
import { forwardRef, useContext, useId } from "react"
import { HeaderContext } from "../_header"
import Button, { type ButtonProps } from "@/components/shared/button"
import { type Schema } from "@/gql"
import { contentLinkToString, type ContentLink, type InlineContentLink } from "@remkoj/optimizely-graph-client"
import ThemePicker from "./_themepicker"

function isButtonBlockFragment(toTest: any) : toTest is (Schema.IContentDataFragment & Schema.ButtonBlockDataFragment)
{
    if (typeof(toTest) != 'object' || toTest == null)
        return false
    return toTest._type == 'ButtonBlock'
}

const SecondaryMenu = forwardRef<HTMLUListElement>((props, ref) => {
    const { utilityItems } = useContext(HeaderContext)
    const id = useId()

    if (!utilityItems) return null;
    return (
        <ul ref={ref} className="flex items-center justify-end gap-4">
            <li><ThemePicker /></li>
            { utilityItems
                .filter(isButtonBlockFragment)
                .map((item) => {
                    const link : Schema.LinkDataFragment | undefined = item.link ?? undefined
                    const meta : Schema.IContentInfoFragment | undefined = item._metadata ?? undefined
                    const key = id + contentLinkToString(meta as InlineContentLink | ContentLink | undefined, true)
                    const hrefBase = link?.base ?? 'https://example.com'
                    const hrefPath = link?.default ?? '/'
                    const href = new URL(hrefPath, hrefBase)

                    const buttonType : ButtonProps["buttonType"] = (item.buttonType ?? 'primary') as ButtonProps["buttonType"]
                    const buttonVariant : ButtonProps["buttonVariant"] = (item.variant ?? 'default') as ButtonProps["buttonVariant"]
                    const className = item.className ?? undefined


                    return <li key={key}>
                        <Button url={href} buttonType={ buttonType } buttonVariant={ buttonVariant } className={ className }>{ item.text }</Button>
                    </li>
                })
            }
        </ul>
    )
})

SecondaryMenu.displayName = "SecondaryMenu";

export default SecondaryMenu;
