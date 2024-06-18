import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import type CardRowLayoutProps from './card.row.opti-style.json'
import { extractSettings, type LayoutProps } from "@remkoj/optimizely-cms-react/components"


export const CardRow : CmsLayoutComponent<LayoutProps<typeof CardRowLayoutProps>> = ({ layoutProps, children }) => {
    const additionalClasses: string[] = [];
    const innerClasses: string[] = ['prose prose-p:text-[2rem] prose-span:text-[2rem]'];
    const {
        rowBackgroundColor: color = "white",
        columnOrderOnSmallScreen: colOrder = "normal",
        vSpacing = "small"
    } = extractSettings(layoutProps)

    switch (color) {
        case "white":
            additionalClasses.push("bg-ghost-white border-[2px]");
            innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
            break;
        case "blue":
            additionalClasses.push("bg-azure dark:bg-transparent dark:border-azure dark:border-4");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white ");
            break;
        case "dark_blue":
            additionalClasses.push("bg-vulcan");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            break;
        case "orange":
            additionalClasses.push("bg-tangy dark:bg-transparent dark:border-tangy dark:border-4");
            innerClasses.push("text-vulcan prose-blockquote:text-vulcan prose-figcaption:text-vulcan dark:text-ghost-white dark:prose-blockquote:text-ghost-white dark:prose-figcaption:text-ghost-white");
            break;
        case "green":
            additionalClasses.push("bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4");
            innerClasses.push("text-vulcan prose-blockquote:text-vulcan prose-figcaption:text-vulcan dark:text-ghost-white dark:prose-blockquote:text-ghost-white dark:prose-figcaption:text-ghost-white");
            break;
        case "red":
            additionalClasses.push("bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            break;
        case "purple":
            additionalClasses.push("bg-people-eater dark:bg-transparent dark:border-people-eater dark:border-4");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            break;
    }

    switch (colOrder) {
        case "reversed":
            innerClasses.push("flex-col-reverse @[80rem]/card:flex-row")
            break;
        default:
            innerClasses.push("flex-col @[80rem]/card:flex-row")
            break;
    }

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

    return <div className={`flex-1 relative p-12 lg:p-24 rounded-[40px] @container/card vb:row ${ additionalClasses.join(' ')}`}>
        <div className={ `flex ${ innerClasses.join(' ') } flex-nowrap justify-stretch gap-16 w-full max-w-none` }>
            { children }
        </div>
    </div>
}

export default CardRow