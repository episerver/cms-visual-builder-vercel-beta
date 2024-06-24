import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import DefaultColumn from "./DefaultColumn";
import CardColumn from "./CardColumn";

export const ColumnComponents : ComponentTypeDictionary = [
    {
        type: "Column/DefaultColumn",
        component: DefaultColumn
    },
    {
        type: "Column/CardColumn",
        component: CardColumn
    }
]

export default ColumnComponents
