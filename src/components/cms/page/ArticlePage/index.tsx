import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";

export const ArticlePagePage : CmsComponent<ArticlePageDataFragment> = ({ data }) => {
    const componentName = 'Article'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div>{ componentName }</div>
        <div>{ componentInfo }</div>
        <pre className="w-full overflow-x-hidden font-mono text-sm">{ JSON.stringify(data, undefined, 4) }</pre>
    </div>
}
ArticlePagePage.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc]

export default ArticlePagePage