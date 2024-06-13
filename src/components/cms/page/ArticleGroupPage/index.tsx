import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs"
import { ArticleGroupPageDataFragmentDoc, type ArticleGroupPageDataFragment } from "@/gql/graphql";
import { getArticles } from "./api";
import { CmsImage } from "@/components/shared/cms_image";
import { Button } from "@/components/shared/button";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { getServerContext, CmsEditable, CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { getLabel } from "@/labels";
import { linkDataToUrl } from '@/components/shared/cms_link'

const cssClasses : Array<string> = [
    "bg-ghost-white border-[2px] text-vulcan",
    "bg-azure dark:bg-transparent dark:border-azure dark:border-4 text-white",
    "bg-vulcan text-white",
    "bg-tangy dark:bg-transparent dark:border-tangy dark:border-4 text-vulcan",
    "bg-verdansk dark:bg-transparent dark:border-verdansk dark:border-4 text-vulcan",
    "bg-paleruby dark:bg-transparent dark:border-paleruby dark:border-4 text-white",
    "bg-people-eater dark:bg-transparent dark:border-people-eater dark:border-4 text-white",
]
const buttonColor : Array<"dark" | "light"> = [
    "dark",
    "light",
    "light",
    "dark",
    "dark",
    "light",
    "light"
]

export const ArticleGroupPagePage : CmsComponent<ArticleGroupPageDataFragment> = async ({ data, contentLink }) => {
    
    const articles = contentLink.key ? await getArticles(contentLink.key, contentLink.locale) : { total: 0, items: []}
    const { factory } = getServerContext()
    const continueReading = await getLabel("Continue reading", { fallback: "Continue reading"})

    return <div className="outer-padding">
        <div className="mx-auto container">
            <div className="py-[32pt]">
                <div className="max-w-prose text-center mb-[32pt] mx-auto">
                    <CmsEditable as="h1" cmsFieldName="articleGroupTitle" className="text-[48pt] font-bold">
                        { data.articleGroupTitle ?? ''}
                    </CmsEditable>
                </div>
                <CmsEditable as={ RichText } text={ data.articleGroupIntro?.json } factory={ factory } className="prose mx-auto" />
                <CmsContentArea items={ data.MainContent } fieldName="MainContent" className="w-full mt-[32pt]" />
            </div>
            <div className="columns-1 md:columns-1 lg:columns-2 xl:columns-3 gap-8 mb-[24pt]">
            { articles.items.map(item => {
                const cssClassId = Math.floor(Math.random() * cssClasses.length)
                const url = item.link ? linkDataToUrl(item.link) : undefined
                return <div key={ item.key } className={`inline-block w-full group ${ cssClasses[cssClassId] } rounded-[20px] overflow-hidden`}>
                    <div className="relative aspect-[4/3] mt-6 m-6 rounded-[15px] overflow-hidden"><CmsImage src={ item.image } alt="Hero image" fill className="object-cover" /></div>
                    <div className="font-bold text-4xl p-6">{ item.title }</div>
                    <RichText as="div" text={ item.intro } factory={ factory } className="prose max-w-none px-6" />
                    <div className="p-6">
                        <Button url={ url } buttonVariant="default" buttonType="secondary" buttonColor={ buttonColor[cssClassId] }>{ continueReading }</Button>
                    </div>
                </div>
            })}
            </div>
        </div>
    </div>
}
ArticleGroupPagePage.getDataFragment = () => ['ArticleGroupPageData', ArticleGroupPageDataFragmentDoc]

export default ArticleGroupPagePage