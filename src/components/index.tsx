import { cache } from 'react'
import { getFactory, setFactory } from '@remkoj/optimizely-cms-react'
import { prefixDictionaryEntries } from "@/components/utils"
import pages from './page'
import components from './component'
import richText from './rich-text'

export const getComponentFactory = cache(() => {
    const factory = getFactory()
    prefixDictionaryEntries(pages, "Page")
    prefixDictionaryEntries(components, "Component")
    factory.registerAll(pages)
    factory.registerAll(components)
    factory.registerAll(richText)
    setFactory(factory)
    return factory
})

export default getComponentFactory