import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ArticleGroupPageDataFragmentDoc, type ArticleGroupPageDataFragment } from "@/gql/graphql";

export const ArticleGroupPagePage : CmsComponent<ArticleGroupPageDataFragment> = ({ data }) => {
    const componentName = 'Article Group Page'
    const componentInfo = 'Provides a listing of all articles added as child of this page, used for news sections, blogs, etc...'
    return <div className="mx-auto px-2 container">
        <div>{ componentName }</div>
        <div>{ componentInfo }</div>
        <pre className="w-full overflow-x-hidden font-mono text-sm">{ JSON.stringify(data, undefined, 4) }</pre>
    </div>
}
ArticleGroupPagePage.getDataFragment = () => ['ArticleGroupPageData', ArticleGroupPageDataFragmentDoc]

export default ArticleGroupPagePage