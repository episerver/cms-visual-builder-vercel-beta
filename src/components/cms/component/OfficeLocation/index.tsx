import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { OfficeLocationDataFragmentDoc, type OfficeLocationDataFragment } from "@/gql/graphql";
import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/solid'

/**
 * Office Location
 * 
 */
export const OfficeLocationComponent : CmsComponent<OfficeLocationDataFragment> = ({ data }) => {
    return <address className="prose bg-white p-10 rounded-[20px]">
        <span className="font-bold border-b-[1px] border-b-slate-900 inline-block w-full pb-2 mb-2">{ data.title ?? '' }</span><br/>
        { data.street1 && <>{ data.street1 }<br/></> }
        { data.street2 && <>{ data.street2 }<br/></> }
        { data.city && <>{ data.city }, </> }{ data.postalcode ?? ''}{(data.city || data.postalcode ) && <br/>}
        { data.country && <>{ data.country }<br/></> }
        <br/>
        { data.email && <a href={`mailto:${ data.email }`} className="no-underline"><AtSymbolIcon className="inline-block h-6 w-6"/> { data.email ?? '-' }<br/></a> }
        { data.phone && <a href={`tel:${ data.phone }`} className="no-underline"><PhoneIcon className="inline-block h-6 w-6" /> { data.phone }<br/></a> }
    </address>
}
OfficeLocationComponent.displayName = "Office Location (Component/OfficeLocation)"
OfficeLocationComponent.getDataFragment = () => ['OfficeLocationData', OfficeLocationDataFragmentDoc]

export default OfficeLocationComponent