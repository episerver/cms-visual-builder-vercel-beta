import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"

export const CardRow : CmsLayoutComponent = ({ layoutProps, children }) => {
    const additionalClasses: string[] = [];
    const innerClasses: string[] = [];
    const button: { className: string } = {className: ""}
    const color = layoutProps?.settings?.filter((x: {key: string, value: string}) => x.key == 'rowBackgroundColor')[0]?.value
    const colOrder = layoutProps?.settings?.filter((x: {key: string, value: string}) => x.key == 'columnOrderOnSmallScreen')[0]?.value
    switch (color) {
        case "white":
            additionalClasses.push("bg-ghost-white border-[2px]");
            innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
            break;
        case "blue":
            additionalClasses.push("bg-azure dark:bg-transparent dark:border-azure dark:border-4");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white ");
            if (button) button.className = "btn--light";
            break;
        case "dark-blue":
            additionalClasses.push("bg-vulcan ");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            if (button) button.className = "btn--light";
            break;
        case "orange":
            additionalClasses.push("bg-tangy dark:bg-transparent dark:border-tangy dark:border-4");
            innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
            if (button) button.className = "btn--dark";
            break;
        case "green":
            additionalClasses.push("bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4");
            innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
            if (button) button.className = "btn--dark";
            break;
        case "red":
            additionalClasses.push("bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            if (button) button.className = "btn--light";
            break;
        case "purple":
            additionalClasses.push("bg-people-eater");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            if (button) button.className = "btn--light";
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

    return <div className={`flex-1 mt-16 mb-16 relative p-12 lg:p-24 rounded-[40px] @container/card vb:row ${ additionalClasses.join(' ')}`}>
        <div className={ `flex ${ innerClasses.join(' ') } flex-nowrap justify-start gap-16` }>
            { children }
        </div>
    </div>
}

export default CardRow