import { type PropsWithChildren } from 'react'
import { OnPageEdit } from '@remkoj/optimizely-cms-nextjs'
import createFactory from '@/components'
import { getAuthorizedServerClient } from '@remkoj/optimizely-cms-nextjs'
import { getContentById } from '@/gql/functions'
import { RectangleGroupIcon } from '@heroicons/react/24/solid'

function LoadingOverlay({ children }: PropsWithChildren<{}>) {
    return <div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur z-[9999]'>
        <div className='bg-ghost-white mx-auto max-w-lg drop-shadow-xl rounded-lg mt-12 overflow-hidden'>
            <div className='bg-azure w-full text-3xl font-bold p-4 text-ghost-white'>Visual Builder</div>
            <div className='p-4'><RectangleGroupIcon className='inline-block h-10 w-10 text-independence animate-pulse' /> Updating preview</div>
            { children && <div className='p-4'>{ children }</div> }
        </div>
    </div>
}

const EditPage = OnPageEdit.createEditPageComponent(createFactory(), {
    //@ts-expect-error
    loader: getContentById,
    refreshNotice: LoadingOverlay,
    clientFactory: (token?: string) => {
        const client = getAuthorizedServerClient(token)
        client.updateFlags({ queryCache: false, cache: false })
        return client
    }
})

export const fetchCache = "force-no-store";
export const revalidate = 0;
export default EditPage