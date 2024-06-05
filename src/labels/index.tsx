import { cache } from 'react'
import { getSdk } from '@/sdk'

export type DictionaryLoadOptions = {
    /**
     * The Locale to load the dictionary in, in Optimizely Graph format
     */
    locale?: string

    /**
     * The name of the dictionary to load
     */
    dictionary?: string
}

export const getLabel = cache(async (key: string, {
    locale,
    dictionary = "website",
    fallback
}: (DictionaryLoadOptions & { fallback?: string }) = {}) =>
{
    try {
        const dict = await getLabelDictionary({ locale, dictionary })
        const value = dict[key]
        if (value == undefined)
            throw new Error(`The key ${ key } is not defined within the ${ dictionary } dictionary ${ locale ? `in locale ${ locale }` : ""}`)
        return value
    } catch (e) {
        if (fallback)
            return fallback
        throw e
    }
})

/**
 * Load the contents of a label dictionary from the Optimizely CMS
 */
export const getLabelDictionary = cache(async ({
    locale,
    dictionary = "website"
}: DictionaryLoadOptions = {}) => {
    const sdk = getSdk();
    const result = getFirstIfExists((await sdk.getDictionary({ dictionary: dictionary, locale: locale as any }))?.getDictionary?.items);
    if (!result)
        throw new Error(`The dictionary with key ${ dictionary }${ locale ? `in locale ${ locale }` : ""} could not be loaded`);
    const contents : Record<string, string> = {};
    (result.contents || []).forEach(item => {
        if (item && item.key)
            contents[item.key] = item.value ?? '';
    })
    return contents;
})

function getFirstIfExists<T>(input: Array<T | null> | null | undefined) : T | undefined
{
    if (!input || !Array.isArray(input))
        return undefined
    return input[0] || undefined
}