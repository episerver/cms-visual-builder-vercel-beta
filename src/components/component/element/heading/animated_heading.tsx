import type { HeadingLayoutProps, AnimatedHeadingLayoutProps, HeadingComponent } from './types'
import { type HeadingElementDataFragment } from "@/gql/graphql"
import AnimatedText from "@/components/shared/animated_text"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"

export const AnimatedHeadingElement : HeadingComponent<HeadingElementDataFragment, AnimatedHeadingLayoutProps> = ({ data: { headingText }, layoutProps, className, ...containerProps }) => {
    const cssClasses : string[] = []
    const { textAlign, headingType, delay: delayValue } = extractSettings(layoutProps)
    
    switch (textAlign) {
        case 'left':
            cssClasses.push('text-left mr-auto')
            break
        case 'center':
            cssClasses.push('text-center mx-auto')
            break
        case 'right':
            cssClasses.push('text-right ml-auto')
            break
        case 'justify':
            cssClasses.push('text-justify')
            break
        default:
            break;
    }
    const Component = !headingType || headingType == 'plain' ? 'p' : headingType
    
    let delay = 0
    switch (delayValue) {
        case 'short':
            delay = 500
            break;
        case 'medium':
            delay = 1000
            break;
        case 'long':
            delay = 1500
            break;
        case 'verylong':
            delay = 2000
            break;
        default:
            delay = 0
            break;
    }

    return <div className={ (`${ className } prose prose-h1:text-[72px] prose-p:text-[24px] prose-p:leading-tight ` + cssClasses.join(' ')).trim() } { ...containerProps }>
        <AnimatedText el={ Component } text={ headingText ?? "" } delay={ delay } />
    </div>
}

export function isAnimatedTemplate(props?: HeadingLayoutProps | null) : props is AnimatedHeadingLayoutProps
{
    return props?.template == "AnimatedHeadingStyles"
}