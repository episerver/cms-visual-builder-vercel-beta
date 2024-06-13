// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
//import componentComponents from "./component";
//import elementComponents from "./element";
import experienceComponents from "./experience";
import pageComponents from "./page";
//import sectionComponents from "./section";

//prefixDictionaryEntries(componentComponents, 'Component');
//prefixDictionaryEntries(elementComponents, 'Element');
prefixDictionaryEntries(experienceComponents, 'Experience');
prefixDictionaryEntries(pageComponents, 'Page');
//prefixDictionaryEntries(sectionComponents, 'Section');

export const cmsComponentDictionary : ComponentTypeDictionary = [
//    ...componentComponents,
//    ...elementComponents,
    ...experienceComponents,
    ...pageComponents,
//    ...sectionComponents,
]

export default cmsComponentDictionary
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    })
    return list
}