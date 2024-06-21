import { OnPageEdit } from '@remkoj/optimizely-cms-nextjs'
import createFactory from '@/components'
import { getAuthorizedServerClient } from '@remkoj/optimizely-cms-nextjs'
import { getContentById } from '@/gql/functions'

const EditPage = OnPageEdit.createEditPageComponent(createFactory(), {
    //@ts-expect-error
    loader: getContentById,
    clientFactory: (token?: string) => {
        const client = getAuthorizedServerClient(token)
        client.updateFlags({ queryCache: false, cache: false })
        return client
    }
})

export const fetchCache = "force-no-store";
export const revalidate = 0;
export default EditPage