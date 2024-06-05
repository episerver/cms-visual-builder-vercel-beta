import type { ComponentTypeDictionary } from '@remkoj/optimizely-cms-react'
import CTAElement from './cta'
import HeadingElement from './heading'
import ImageElement from './image'
import ParagraphElement from './paragraph'
import TestimonialElement from './testimonial'

export const ElementList: ComponentTypeDictionary = [{
    type: 'CTAElement',
    component: CTAElement
}, {
    type: 'HeadingElement',
    component: HeadingElement
}, {
    type: 'ImageElement',
    component: ImageElement
}, {
    type: 'ParagraphElement',
    component: ParagraphElement
}, {
    type: 'TestimonialElement',
    component: TestimonialElement
}]

export default ElementList