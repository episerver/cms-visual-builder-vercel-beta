import type { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";

/**
 * Modify the ComponentTypeDictionary in place
 * 
 * @param       list        The ComponentTypeDictionary to modify
 * @param       prefix      The prefix to add to each of the type definitions in the list
 * @returns     The modified list
 */
export function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    })
    return list
}