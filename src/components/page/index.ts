import type { ComponentTypeDictionary } from '@remkoj/optimizely-cms-react'
import { prefixDictionaryEntries } from "@/components/utils"
import experiences from "./experience"

prefixDictionaryEntries(experiences, "Experience")

export const PageModuleList : ComponentTypeDictionary = [
    ...experiences
]

export default PageModuleList