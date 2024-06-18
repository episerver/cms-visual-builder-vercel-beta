import { CardBlockDataFragmentDoc, type CardBlockDataFragment, type ButtonBlockPropertyDataFragment, type ButtonBlockDataFragment } from "@/gql/graphql";
import Image from '@/components/shared/cms_image'
import { CmsEditable, CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import AnimatedImage from "./motion";
import ButtonBlock from '@/components/component/block/button_block'

/**
 * Card Component
 * Reusable card component
 */
export const CardBlockComponent : CmsComponent<CardBlockDataFragment> = ({ data: { layout: imageLayout = "before", image, heading = "", subheading = "", description = {json: null}, color = "blue", link: button, icon }, inEditMode }) => {
    const additionalClasses: string[] = [];
    const innerClasses: string[] = [];
    const buttonClasses : string[] = [];

    switch (color) {
        case "white":
            additionalClasses.push("bg-ghost-white border-[2px]");
            innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
            break;

        case "blue":
            additionalClasses.push("bg-azure dark:bg-transparent dark:border-azure dark:border-4");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            if (button) {
                buttonClasses.push("btn--light");
            }
            break;

        case "dark-blue":
            additionalClasses.push("bg-vulcan ");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            if (button) {
                buttonClasses.push("btn--light");
            }
            break;

        case "orange":
            additionalClasses.push("bg-tangy dark:bg-transparent dark:border-tangy dark:border-4");
            innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan");
            if (button) {
                buttonClasses.push("btn--dark");
            }
            break;

        case "green":
            additionalClasses.push("bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4");
            innerClasses.push("text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan ");
            if (button) {
                buttonClasses.push("btn--dark");
            }
            break;

        case "red":
            additionalClasses.push("bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            if (button) {
                buttonClasses.push("btn--light");
            }
            break;

        case "purple":
            additionalClasses.push("bg-people-eater");
            innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
            if (button) {
                buttonClasses.push("btn--light");
            }
            break;
    }

    return (
<section className={`w-full h-full p-12 lg:p-24 rounded-[40px] @container/card ${additionalClasses.join(" ")} dark:!text-ghost-white dark:prose-h3:text-ghost-white dark:prose-h2:text-ghost-white`}>
    <div className="w-full h-full grid auto-rows-auto @[80rem]/card:items-center grid-cols-1 gap-16 @[80rem]/card:grid-cols-12">
        <div className={`prose prose-h2:text-[48px] prose-h2:mb-[24px] prose-h2:mt-[24px] prose-h3:text-[24px] prose-p:text-[20px] prose-img:my-4 @[80rem]/card:col-span-5 ${innerClasses.join(" ")} dark:!text-ghost-white dark:prose-h3:text-ghost-white dark:prose-h2:text-ghost-white`}>
            { (icon || inEditMode) && <CmsEditable as={Image} cmsFieldName="CardIcon" src={ icon } alt={""} width={48} height={48} /> }
            { (heading || inEditMode) && <CmsEditable as="h2" cmsFieldName="CardHeading">{ heading }</CmsEditable> }
            { (subheading || inEditMode) && <CmsEditable as="h3" cmsFieldName="CardSubHeading">{ subheading }</CmsEditable> }
            { (description || inEditMode) && <CmsEditable as={RichText} cmsFieldName="CardDescription" text={ description?.json } /> }
            { <CmsEditable as={ButtonBlock} cmsFieldName="CardButton" contentLink={{ key: null }} data={{
                ...button,
                __typename: undefined,          // Remove data type, so only data fields will be matched
                ' $fragmentName': undefined,    // Remove fragment source, so only data fields will be matched
                className: `${ (button as ButtonBlockPropertyDataFragment | undefined | null)?.className ?? '' } ${ buttonClasses.join(' ')}`.trim() || undefined // Apply additional classes
            }} /> }
        </div>
        { (image || inEditMode) && <AnimatedImage imageLayout={ imageLayout }><CmsEditable as={Image} cmsFieldName="CardImage" className="rounded-[40px] w-full" src={ image } alt={""} width={660} height={440} /></AnimatedImage> }
    </div>
</section>);
}
CardBlockComponent.displayName = "Card Component (Component/CardBlock)"
CardBlockComponent.getDataFragment = () => ['CardBlockData', CardBlockDataFragmentDoc]

export default CardBlockComponent

function isButtonBlock(toTest ?: Record<string, any> | null) : toTest is ButtonBlockPropertyDataFragment
{
    return typeof(toTest) == 'object' && toTest != null && (toTest as ButtonBlockPropertyDataFragment).text != null
}