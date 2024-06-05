import 'server-only'
import { CmsComponentWithFragment } from '@remkoj/optimizely-cms-react'
import { type TestimonialElementDataFragment, TestimonialElementDataFragmentDoc } from '@/gql/graphql'

export const TestimonialElement : CmsComponentWithFragment<TestimonialElementDataFragment> = ({ data }) => {
    return <>Testimonial</>
}
TestimonialElement.getDataFragment = () => ['TestimonialElementData', TestimonialElementDataFragmentDoc]

export default TestimonialElement