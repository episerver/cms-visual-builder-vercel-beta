'use client'

import { createContext, useContext, useState, type FunctionComponent, type PropsWithChildren } from "react"
import { IOptiGraphClient } from "@remkoj/optimizely-graph-client"

// To be internalized
import { type GenericContext, type ComponentFactory } from "@remkoj/optimizely-cms-react"

const NoImplementationFactory : ComponentFactory = { has: () => false, register: () => {}, registerAll: () => {}, resolve: () => undefined }

interface ClientContext extends GenericContext {
    readonly factory: ComponentFactory
}

const OptimizelyCmsContext = createContext<ClientContext>({
    factory: NoImplementationFactory,
    inEditMode: false,
    isDebug: false,
    isDebugOrDevelopment: false,
    isDevelopment: false
})
OptimizelyCmsContext.displayName = "Optimizely CMS Context"

export function useOptimizelyCms() : ClientContext
{
    return useContext(OptimizelyCmsContext)
}

type ProviderProps = PropsWithChildren<{
    debug?: boolean
    development?: boolean
    client?: IOptiGraphClient
    factory?: ComponentFactory
}>

export const OptimizelyCmsProvider : FunctionComponent<ProviderProps> = ({ children, debug, development, client, factory = NoImplementationFactory }) =>
{
    const [locale, setLocale] = useState<string | undefined>()

    return <OptimizelyCmsContext.Provider value={{
        locale,
        client,
        factory,
        inEditMode: false,
        isDebug: debug ?? false,
        isDevelopment: development ?? false,
        isDebugOrDevelopment: (debug ?? false) || (development ?? false)
    }}>{ children }</OptimizelyCmsContext.Provider>
}

export default useOptimizelyCms