import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import { type CardColumnProps } from "../displayTemplates"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"
import { Card } from "@/components/shared/Card"

export const CardColumn : CmsLayoutComponent<CardColumnProps> = ({ layoutProps, children }) => {
    const tpl = layoutProps?.template ?? "none"
    const outerCssClasses : string = `vb:column vb:template: ${tpl} flex-1`
    const innerCssClasses: string = `flex flex-col prose prose-p:text-[2rem] prose-span:text-[2rem] max-w-full gap-4 lg:gap-8`;
    const {
        colBackgroundColor = 'blue',
        itemOrderOnSmallScreen = 'normal'
    } = extractSettings(layoutProps)
    
    return <Card cardColor={ colBackgroundColor } className={ outerCssClasses } innerClassName={ innerCssClasses } direction="col">{ children }</Card>
}

export default CardColumn