import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import type CardRowLayoutProps from './card.row.opti-style.json'
import { extractSettings, type LayoutProps } from "@remkoj/optimizely-cms-react/components"
import Card from '@/components/shared/Card'

export const CardRow : CmsLayoutComponent<LayoutProps<typeof CardRowLayoutProps>> = ({ layoutProps, children }) => {
    const additionalClasses: string[] = [];
    const {
        rowBackgroundColor: color = "white",
        columnOrderOnSmallScreen: colOrder = "normal",
        vSpacing = "small"
    } = extractSettings(layoutProps)

    switch (vSpacing) {
        case "small":
            additionalClasses.push("my-2")
            break;
        case "medium":
            additionalClasses.push("my-4")
            break;
        case "large":
            additionalClasses.push("my-8")
            break;
        default:
            additionalClasses.push("my-0")
            break;
    }

    return <Card cardColor={ color } className={`vb:row vb:row:Card ${ additionalClasses.join(' ')}`} direction={ colOrder == 'reversed' ? 'row_small_reversed' : 'row'}>
        { children }
    </Card>
}

export default CardRow