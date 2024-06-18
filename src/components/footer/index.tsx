import 'server-only'
import { type OfficeLocationDataFragment, type MenuContentFragment, type Maybe } from '@/gql/graphql'
import { getSdk } from '@/sdk'
import { CmsLink, createListKey } from '@/components/shared/cms_link'
import { CmsImage } from '@/components/shared/cms_image'
import { getLabel } from '@/labels'

export type FooterProps = {

}

function getFirstIfExists<T>(input: Array<T | null> | null | undefined) : T | undefined
{
    if (!input || !Array.isArray(input))
        return undefined
    return input[0] || undefined
}

export const MoseyBankFooter = async ({} : FooterProps) => {
    const sdk = getSdk()
    const footerInfo = getFirstIfExists((await sdk.getFooter()).footer?.items)

    if (!footerInfo) {
        console.log("🔴 Footer not found")
        return <></>
    }
    const address = getFirstIfExists(footerInfo.address) as OfficeLocationDataFragment | undefined
    
    return <footer className='bg-vulcan py-16 lg:py-32 outer-padding dark:bg-vulcan-85'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white'>
            <div className='mb-16 col-span-2 lg:col-span-1'>
                <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:underline hover:prose-a:no-underline prose-a:not-italic">
                    <h1>{ address?.title }</h1>
                    <address>
                        <p>{ address?.street1 }{ address?.street2 && <><br/>{ address?.street2 }</>}<br/>{ address?.city }, { address?.postalcode }, { address?.country }</p>
                        <p>
                            { getLabel('contactus', { fallback: 'Contact Us' }) }<br/>
                            { address?.phone && <>Phone: { address?.phone }</>}
                            { address?.email && <>E-Mail: { address?.email }</>}
                        </p>
                    </address>
                </section>
            </div>
            <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
                <FooterMenu menu={ footerInfo?.firstMenu } />
            </div>
            <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
                <FooterMenu menu={ footerInfo?.secondMenu } />
            </div>
            <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
                <FooterMenu menu={ footerInfo?.thirdMenu } />
            </div>
        </div>
        <div className="container mx-auto grid text-white mt-16 lg:mt-32 lg:text-center lg:justify-center">
            <div className="lg:justify-center flex mb-16">
                <CmsImage src={ footerInfo?.logo } alt={ footerInfo.logoAlt ?? "" } loading="lazy" width={200} height={35} decoding="async" data-nimg="1" style={{color: "transparent"}} />
            </div>
            <div className="md:flex items-center md:prose-li:ml-[24px] prose-a:text-[12px] prose-p:text-[12px]">
                <p>{ getLabel('copynotice', { fallback: '© Optimizely / Remko Jantzen / Contributors. All rights reserved' }) }</p>
                <ul className="list-none md:flex mt-6 md:mt-0">
                    { footerInfo?.legal && footerInfo.legal.map(link => link && <li key={ createListKey(link)}><CmsLink href={link} /></li>)}
                </ul>
            </div>
        </div>
    </footer>
}

type FooterMenuProps = {
    menu?: Maybe<MenuContentFragment>
}

const FooterMenu = ( {menu}: FooterMenuProps) =>
{
    if (!menu)
        return <></>

    return <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
        { menu.heading && <h1>{ menu.heading }</h1> }
        <ul className="list-none pl-0">
            { menu.links && menu.links.map(link => link && <li key={createListKey(link)}><CmsLink href={link} /></li> )}
        </ul>
    </section>
}

export default MoseyBankFooter