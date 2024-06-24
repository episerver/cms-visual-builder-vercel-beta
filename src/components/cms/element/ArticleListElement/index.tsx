import 'server-only'
import { type CmsComponent } from '@remkoj/optimizely-cms-react'
import { type ArticleListElementDataFragment, type Locales, type InputMaybe, ArticleListElementDataFragmentDoc } from '@/gql/graphql'
import { getSdk } from '@/sdk'
import { CmsContentLink } from '@remkoj/optimizely-cms-nextjs/components'
import CmsImage from '@/components/shared/cms_image'
import DateDisplay from '@/components/shared/date'
import { getLabel } from '@/labels'
import { RichText } from '@remkoj/optimizely-cms-react/components'
import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { Card } from '@/components/shared/Card'

export const ArticleListElement : CmsComponent<ArticleListElementDataFragment> = async ({ data: { articleListCount = 3 }, contentLink: { locale } }) => 
{
    const { factory } = getServerContext()
    const sdk = getSdk()
    const articles = ((await sdk.getArticleListElementItems({ 
        count: articleListCount || 3,
        locale: locale as InputMaybe<Locales> | undefined
    }))?.ArticlePage?.items ?? []).filter(isNotNullOrUndefined)
    const byLabel = await getLabel('By', { locale, fallback: 'By'})
    const andLabel = await getLabel('and', { locale, fallback: 'and'})
    
    return <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12">
        { articles.map(article => {
            let authors : string | undefined = undefined
            const authorList = (article.articleAuthors ?? []).filter(isNotNullOrUndefined)
            if (authorList.length > 1) {
                const lastAuthor = authorList.slice(-1)
                const firstAuthors = authorList.slice(0,-1)
                authors = `${ firstAuthors.join(', ')} ${ andLabel } ${ lastAuthor[0] }`
            } else {
                authors = authorList[0]
            }

            return <div key={ article.articleMeta?.key } className="article-list-item w-full h-full relative">
                <CmsContentLink href={article}>
                    {/*
                    <article className="prose max-w-none p-8 pb-16 bg-white rounded-[20px] w-full h-full before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:z-[-1] before:rounded-[20px] before:bg-azure before:transition-transform before:ease-in-out before:duration-300 hover:before:translate-x-8 hover:before:translate-y-8 focus:before:translate-x-8 focus:before:translate-y-8 dark:bg-vulcan-85 dark:text-ghost-white">
                    */}
                    <Card cardColor="white" as="article" className='w-full h-full' withHoverEffect>
                        <CmsImage src={ article.articleHeroImage } width={620} height={430} className='w-full rounded-[20px]' alt={ article.articleTitle ?? '' } />
                        <div className="flex justify-between mb-[16px]">
                            <p className="text-[12px] text-pale-sky my-0">{ byLabel } { authors ? authors : 'Mosey Bank'}</p>
                            <p className="text-[12px] text-pale-sky my-0"><DateDisplay value={ article.articleMeta?.published ?? null } /></p>
                        </div>
                        <h3 className="my-0 mt-[16px]">{ article?.articleTitle ?? ''}</h3>
                        { article?.articleSummary && <RichText factory={ factory } text={ article?.articleSummary?.json } /> }
                    </Card>
                    {/*</article>*/}
                </CmsContentLink>
            </div>
        })}
    </div>
}
ArticleListElement.getDataFragment = () => ['ArticleListElementData', ArticleListElementDataFragmentDoc]

export default ArticleListElement

function isNotNullOrUndefined<T>(input?: T | null | undefined) : input is T
{
    return input ? true : false
}