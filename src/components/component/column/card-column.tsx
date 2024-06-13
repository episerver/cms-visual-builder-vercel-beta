import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import type CardColumnStyles from './card.column.opti-style.json'
import { extractSettings, type LayoutProps } from "@remkoj/optimizely-cms-react/components"

export const CardColumn : CmsLayoutComponent<LayoutProps<typeof CardColumnStyles>> = ({ layoutProps, children }) => {
    const tpl = layoutProps?.template ?? "none"
    const outerCssClasses : string[] = ['vb:column', 'vb:template:'+tpl, 'flex-1', 'rounded-[40px] overflow-hidden p-12 lg:p-24']
    const innerCssClasses: string[] = ["flex flex-col", 'prose prose-p:text-[2rem] prose-span:text-[2rem] max-w-full gap-4 lg:gap-8'];
    const {
        colBackgroundColor = 'blue',
        itemOrderOnSmallScreen = 'normal'
    } = extractSettings(layoutProps)

    switch (colBackgroundColor) {
        case "white":
            outerCssClasses.push("bg-ghost-white border-[2px]");
            innerCssClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan prose-figcaption:text-vulcan prose-blockquote:text-vulcan");
            break;
        case "blue":
            outerCssClasses.push("bg-azure dark:bg-transparent dark:border-azure dark:border-4");
            innerCssClasses.push("text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white");
            break;
        case "dark_blue":
            outerCssClasses.push("bg-vulcan");
            innerCssClasses.push("text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white");
            break;
        case "orange":
            outerCssClasses.push("bg-tangy dark:bg-transparent dark:border-tangy dark:border-4");
            innerCssClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan prose-figcaption:text-vulcan prose-blockquote:text-vulcan");
            break;
        case "green":
            outerCssClasses.push("bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4");
            innerCssClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan prose-figcaption:text-vulcan prose-blockquote:text-vulcan");
            break;
        case "red":
            outerCssClasses.push("bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4");
            innerCssClasses.push("text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white");
            break;
        case "purple":
            outerCssClasses.push("bg-people-eater dark:bg-transparent dark:border-people-eater dark:border-4");
            innerCssClasses.push("text-white prose-h3:text-white prose-h2:text-white prose-figcaption:text-white prose-blockquote:text-white");
            break;
    }

    return <div className={ outerCssClasses.join(' ') }>
        <div className={ innerCssClasses.join(' ') }>
            { children }
        </div>
    </div>
}

export default CardColumn