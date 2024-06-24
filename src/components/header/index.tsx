import "server-only"
import { getSdk } from "@/sdk"
import Header from "./_header"
import { getLabelDictionary } from '@/labels'
import type { MenuItems, UtilityItems } from './types/headerTypes'

export async function MoseyBankHeader() {
    const sdk = getSdk()
    const config = getFirstIfExists((await sdk.getHeader())?.menuItems?.items)
    const labels = await getLabelDictionary()
    if (!config) {
        console.log("🔴 Header not found")
        return null
    }
    const menuItems = filterMaybeArray(config.headerNavigation) as MenuItems
    const utilityItems = filterMaybeArray(config.utilityNavigation) as UtilityItems

    return <Header logoItem={ config.logo } darkLogoItem={ config.darkLogo } menuItems={ menuItems } utilityItems={ utilityItems } labels={ labels } />
}

export default MoseyBankHeader

function getFirstIfExists<T>(input: Array<T | null> | null | undefined) : T | undefined
{
    if (!input || !Array.isArray(input))
        return undefined
    return input[0] || undefined
}

function filterMaybeArray<T>(input: Array<T | null> | T | null | undefined) : Array<T>
{
    if (!input)
        return []
    if (!Array.isArray(input))
        return [ input ]
    return input.filter(x => x) as Array<T>
}