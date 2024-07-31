import { getSdk } from "@/sdk";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";
import { type LinkDataFragment, type IContentDataFragment, type IContentInfoFragment, type Locales, type ReferenceDataFragment } from "@/gql/graphql";
import { type NodeInput } from "@remkoj/optimizely-cms-react/components";

export type ArticleListItem = {
    key: string
    link?: LinkDataFragment
    title: string
    image?: ReferenceDataFragment
    intro?: NodeInput
    published: Date
}

export type ArticleList = {
    total: number
    items: Array<ArticleListItem>
}

export async function getArticles(parent: string, locale?: string, pageSize: number = 10, skip: number = 0) : Promise<ArticleList>
{
    const sdk = getSdk()
    const articlesResult = await sdk.getArticleGroupPageItems({
        key: parent,
        locale: locale ? localeToGraphLocale(locale) as Locales : null,
        pageSize: pageSize,
        skip: skip
    })

    const parentGroup = (Array.isArray(articlesResult.group?.data) && articlesResult.group?.data[0]) || undefined
    if (!parentGroup)
        return { total: 0, items: [] }

    const total = parentGroup.children?.listing?.total ?? 0
    const items = (parentGroup.children?.listing?.items || []).map(article => {
        if (!article)
            return undefined
        const listItem : ArticleListItem = {
            key: ((article as IContentDataFragment)._metadata as IContentInfoFragment).key || '',
            link: ((article as IContentDataFragment)._metadata as IContentInfoFragment).url || undefined,
            title: article.articleTitle || '',
            image: article.articleHeroImage || undefined,
            intro: article.articleSummary?.json || undefined,
            published: article._metadata?.published ? new Date(article._metadata?.published) : new Date()
        }
        return listItem
    }).filter(isNotNullOrUndefined)

    return {
        total: total,
        items: items
    }
}

function isNotNullOrUndefined<T>(input: T | undefined | null) : input is T
{
    return input ? true : false
}

export async function getJobListings(query: string){
    const searchQuery = {
        q: query,
        numberOfResults: 10
      };
      
      const response = await fetch('https://platform.cloud.coveo.com/rest/search/v2', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer xx6d214dcf-77bf-4154-921e-8a555ea089dc',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchQuery)
      });

      return response.json();      
}