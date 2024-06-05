'use client'

import { FunctionComponent } from 'react'
import { normalizeContentLink, isInlineContentLink } from '@remkoj/optimizely-graph-client'

// To be internalized
import { type ContentType, Utils } from '@remkoj/optimizely-cms-react'
import { type CmsContentProps } from '@remkoj/optimizely-cms-react/rsc'

// Relative
import useOptimizelyCms from './CmsContext'

export const CmsContent : FunctionComponent<CmsContentProps> = ({ contentLink: rawContentLink, contentType: rawContentType, fragmentData, contentTypePrefix }, context) =>
{
    const contentLink = normalizeContentLink(rawContentLink)
    const isInline = isInlineContentLink(contentLink)
    const contentType = applyContentTypePrefix(rawContentType, contentTypePrefix)
    const { factory, client } = useOptimizelyCms()

    if (isInline && !fragmentData)
        throw new Error("Inline CMS Content can only be rendered from the fragmentData")
    if (!contentType && !client)
        throw new Error("Client side CMS Content required either contentType or a context with Optimizely Graph Client")
    if (!fragmentData && !client)
        throw new Error("Client side CMS Content required either fragmentData or a context with Optimizely Graph Client")
    
    if (!contentType)
        throw new Error("Loading without content type is not supported yet")

    const Component = factory.resolve(contentType)
    if (!Component)
        throw new Error(`The content type ${ contentType.join('/') } is not supported by the factory`)


    return <>Client side CMS Content</>
}

export default CmsContent

/**
 * Apply the content type prefix, returns a new instance when a modification needs to be applied, the provided contentType otherwise
 * 
 * @param contentType 
 * @param prefix 
 * @param debug 
 * @returns 
 */
function applyContentTypePrefix(contentType: ContentType | undefined, prefix: string | undefined, debug: boolean = false) : ContentType | undefined
{
    if (Array.isArray(contentType) && Utils.isNonEmptyString(prefix) && contentType.length > 0 && contentType[0] != prefix) {
        if (debug)
            console.info(`⚪ [CmsContent] Component type [${ contentType.join('/')}] doesn't have the configured prefix, adding ${ prefix } as prefix`)
        return [ prefix, ...contentType ]
    }
    return contentType
}