import type { ComponentTypeDictionary } from '@remkoj/optimizely-cms-react'
import elements from "./element"
import blocks from "./block"
import Node from './node'
import DefaultGridComponent from './grid/default-grid'
import CardRow from './row/card-row'
import { prefixDictionaryEntries } from "@/components/utils"

prefixDictionaryEntries(elements, "Element")

export const ComponentModuleList : ComponentTypeDictionary = [
    ...elements,
    ...blocks,
    {
        type: "Node",
        component: Node
    },
    {
        type: "Grid/Section/DefaultGrid",
        component: DefaultGridComponent
    },
    {
        type: "Row/CardRow",
        component: CardRow
    }
]

export default ComponentModuleList