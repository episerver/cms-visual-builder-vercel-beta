import type { CTALayoutProps, DefaultCTALayoutProps, CTAComponent } from './types'
import { type CTAElementDataFragment } from "@/gql/graphql"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"
import Button from './base'

export const DefaultCTAElement : CTAComponent<CTAElementDataFragment, DefaultCTALayoutProps> = ({ data: { link, text }, layoutProps, className, ...containerProps }) => {
    const { 
        buttonAlign = "auto", 
        buttonType ="primary", 
        buttonColor = "default" 
    } = extractSettings(layoutProps)
    const cssClasses : (string | undefined)[] = [ "block w-fit", className ] 
    switch (buttonAlign) {
        case "left":
            cssClasses.push('ml-0','mr-auto')
            break;
        case "center":
            cssClasses.push('mx-auto')
            break;
        case "right":
            cssClasses.push('ml-auto','mr-0')
            break;
        default:
            // Nothing
            break;
    }
    
    return <div { ...containerProps } className='py-4'>
        <Button href={link} className={ cssClasses.join(' ') } text={text} buttonType={ buttonType } buttonColor={ buttonColor } />
    </div>
}

/**
 * Check if the default template should be applied to this CTA component
 * 
 * @param       props   The Layout properties
 * @returns     Whether or not these properties are for a Default CTA Template
 */
export function isDefaultTemplate(props?: CTALayoutProps | null) : props is DefaultCTALayoutProps
{
    return props?.template == "CTAElementDefaultStyles" || props?.template == null
}