// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import componentComponents from "./component";
import elementComponents from "./element";
import experienceComponents from "./experience";
import pageComponents from "./page";
import nodeComponents from "./styles"

prefixDictionaryEntries(componentComponents, 'Component');
prefixDictionaryEntries(elementComponents, 'Element');
prefixDictionaryEntries(elementComponents, 'Component'); // Elements are a subtype of Component
prefixDictionaryEntries(experienceComponents, 'Experience');
prefixDictionaryEntries(experienceComponents, 'Page'); // Experiences are a subtype of Page
prefixDictionaryEntries(pageComponents, 'Page');
prefixDictionaryEntries(nodeComponents, 'Component'); // Nodes are considered components as well

export const cmsComponentDictionary : ComponentTypeDictionary = [
    ...componentComponents,
    ...elementComponents,
    ...experienceComponents,
    ...pageComponents,
    ...nodeComponents
]

export default cmsComponentDictionary
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    })
    return list
}