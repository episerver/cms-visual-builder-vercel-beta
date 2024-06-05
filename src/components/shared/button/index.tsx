import { type PropsWithChildren, type ComponentProps } from "react"
import Link from "next/link"

type ButtonTypes = typeof buttonTypes
type ButtonVariants = typeof buttonVariants

export type ButtonProps = Readonly<PropsWithChildren<{
    url?: string | URL
    buttonType?: keyof ButtonTypes
    buttonVariant?: keyof ButtonVariants
}> & Omit<ComponentProps<typeof Link>, 'href'>>

const buttonTypes = {
    primary: "btn--primary",
    secondary: "btn--secondary",
};
const buttonVariants = {
    default: "btn--default",
    cta: "btn--cta",
};
export function Button ({
    className = "",
    buttonType = "primary",
    buttonVariant = "default",
    url = "#", 
    children, 
    ...props }: ButtonProps
) {
    const hrefValue = url ? (typeof url == 'string' ? url : url.href) : "#"
    const classNameValue = `${buttonTypes[buttonType]} ${ buttonVariants[buttonVariant] } ${className}`.trim()

    return <Link href={ hrefValue } className={ classNameValue } {...props}>
        <div className="btn__content">{children}</div>
    </Link> 
  }
  
  export default Button;