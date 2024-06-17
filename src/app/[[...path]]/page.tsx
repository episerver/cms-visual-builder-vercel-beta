import { CmsPage } from '@remkoj/optimizely-cms-nextjs'
import createFactory from '@/components'
import { getContentByPath } from '@/gql'

const { CmsPage:OptimizelyPage, generateMetadata, generateStaticParams } = CmsPage.createPage(createFactory(), {
    //@ts-expect-error We have the actual types on this query, not on the generic one
    getContentByPath
})

export const dynamic = "force-static"; // Make sure we cache pages
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default
export { generateStaticParams, generateMetadata };
export default OptimizelyPage;