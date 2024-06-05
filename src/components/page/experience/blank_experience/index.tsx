import { type OptimizelyNextPage } from '@remkoj/optimizely-cms-nextjs'
import { type BlankExperienceDataFragment, type ExperienceDataFragment, type Maybe, type CompositionMetadata, BlankExperienceDataFragmentDoc } from '@/gql/graphql'
import { OptimizelyComposition, isNode } from '@remkoj/optimizely-cms-react/rsc'

import { CmsEditable } from '@/components/CmsEditableRSC'
import { getSdk } from '@/sdk'

export const BlankExperience : OptimizelyNextPage<BlankExperienceDataFragment> = ({ data }) => 
{
    const composition = ((data as ExperienceDataFragment).experience as Maybe<CompositionMetadata>)?.composition
    return <CmsEditable as="main" cmsFieldName="unstructuredData" className="flex-grow">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
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