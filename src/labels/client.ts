'use client'

export function extractLabel(dictionary: Record<string,string>, key: string, { fallback } : { fallback?: string})
{
    const val = dictionary[key] ?? fallback
    if (val == undefined)
        throw new Error(`There's no entry for ${ key } within the dictionary and there's no fall-back value provided`)
    return val
}