// Get React Cache
import { cache } from 'react'

// Get the parts from the Optimizely CMS SDK
import { getFactory, setFactory } from '@remkoj/optimizely-cms-react'
import { DefaultComponents } from '@remkoj/optimizely-cms-react/components'

// Get the implementation parts
import { prefixDictionaryEntries } from "@/components/utils"
import cmsComponents from './cms'
import components from './component'
import richText from './rich-text'

export const getComponentFactory = cache(() => {
    const factory = getFactory()
    
    prefixDictionaryEntries(components, "Component")
    prefixDictionaryEntries(richText, 'RichText')
    
    factory.registerAll(cmsComponents)
    factory.registerAll(components)
    factory.registerAll(DefaultComponents)
    factory.registerAll(richText) // Register the rich text components after the defaults to override them
    setFactory(factory)
    return factory
})

export default getComponentFactory