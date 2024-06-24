import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs"
import { ArticleGroupPageDataFragmentDoc, type ArticleGroupPageDataFragment } from "@/gql/graphql";
import { getArticles } from "./api";
import { CmsImage } from "@/components/shared/cms_image";
import { Button } from "@/components/shared/button";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { getServerContext, CmsEditable, CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { getLabel } from "@/labels";
import { linkDataToUrl } from '@/components/shared/cms_link'
import { Card, type ColorOptions } from '@/components/shared/Card'

const cssClasses : Array<ColorOptions> = [ "white", "blue", "dark_blue", "orange", "green", "red", "purple" ]
const buttonColor : Array<"dark" | "light"> = [ "dark", "light", "light", "dark", "dark", "light", "light" ]

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
                <CmsEditable as={ RichText } text={ data.articleGroupIntro?.json } cmsFieldName="articleGroupIntro" factory={ factory } className="prose mx-auto" />
                <CmsContentArea items={ data.MainContent } fieldName="MainContent" className="w-full mt-[32pt]" />
            </div>
            <div className="columns-1 md:columns-1 lg:columns-2 xl:columns-3 gap-8 mb-[24pt]">
            { articles.items.map((item, idx) => {
                const cssClassId = Math.floor(idx % cssClasses.length)
                const url = item.link ? linkDataToUrl(item.link) : undefined
                return <Card key={ item.key } className={`inline-block w-full group mb-8`} cardColor={ cssClasses[cssClassId] } roundedCorners="small">
                    <div className="relative aspect-[4/3] mb-6 rounded-[15px] overflow-hidden">
                        <CmsImage src={ item.image } alt="Hero image" fill className="object-cover not-prose" />
                    </div>
                    <div className="font-bold text-4xl py-6">{ item.title }</div>
                    <RichText as="div" text={ item.intro } factory={ factory } className="prose max-w-none" />
                    <div className="pt-6">
                        <Button url={ url } buttonVariant="default" buttonType="secondary" buttonColor={ buttonColor[cssClassId] }>{ continueReading }</Button>
                    </div>
                </Card>
            })}
            </div>
        </div>
    </div>
}
ArticleGroupPagePage.getDataFragment = () => ['ArticleGroupPageData', ArticleGroupPageDataFragmentDoc]

export default ArticleGroupPagePage