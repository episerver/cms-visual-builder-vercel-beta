// Base Optimizely CMS Framework components
import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { type CTAElementDataFragment, CTAElementDataFragmentDoc } from "@/gql/graphql"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

// CTA Element types and templates
import type { CTALayoutProps } from './types'
import { isAnimatedTemplate, AnimatedCTAElement } from './animated_cta'
import { DefaultCTAElement } from "./default_cta"

export const CTAElement : CmsComponent<CTAElementDataFragment, CTALayoutProps> = ({ data, layoutProps }) =>
{
    if (isAnimatedTemplate(layoutProps)) {
        return <CmsEditable as={ AnimatedCTAElement } data={ data } layoutProps={ layoutProps }/>
    }
    return <CmsEditable as={ DefaultCTAElement } data={ data } layoutProps={layoutProps} />
}
CTAElement.getDataFragment = ()=>[ "CTAElementData", CTAElementDataFragmentDoc ]

export default CTAElement