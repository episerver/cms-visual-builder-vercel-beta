import { type OptimizelyNextPage } from '@remkoj/optimizely-cms-nextjs'
import { type BlankExperienceDataFragment, type ExperienceDataFragment, type Maybe, type ICompositionNode, BlankExperienceDataFragmentDoc } from '@/gql/graphql'
import { OptimizelyComposition, isNode, CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import { getSdk } from '@/sdk'

export const BlankExperience : OptimizelyNextPage<BlankExperienceDataFragment> = ({ data }) => 
{
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <CmsEditable as="main" cmsFieldName="unstructuredData" className="flex-grow overflow-x-hidden">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
BlankExperience.displayName = "BlankExperience"
BlankExperience.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]
BlankExperience.getMetaData = async (contentLink) => {
    const sdk = getSdk()
    const response = await sdk.getBlankExperienceMetaData(contentLink)
    const experienceData = (response?.BlankExperience?.items || [])[0]
    const title = experienceData?.SeoSettings?.metaTitle ?? experienceData?._metadata?.displayName ?? "Unnamed blank experience"
    return {
        title: title
    }
}

export default BlankExperience