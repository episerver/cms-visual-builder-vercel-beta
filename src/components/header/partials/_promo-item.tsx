'use client'

import { type FunctionComponent } from "react";
import { type Schema } from "@/gql"
import Link from "next/link";
import { linkDataToUrl } from '@/components/shared/cms_link'
import { CmsImage } from '@/components/shared/cms_image'
import { RichText, DefaultComponents } from '@remkoj/optimizely-cms-react/components'
import { DefaultComponentFactory } from "@remkoj/optimizely-cms-react";

type PromoItemProps = Schema.CardBlockDataFragment

export const PromoItem : FunctionComponent<PromoItemProps> = ({ heading, description, link, image }) => {
    const linkUrl = linkDataToUrl((link as Schema.ButtonBlockPropertyDataFragment)?.link)
    const linkTitle = (link as Schema.ButtonBlockPropertyDataFragment).text
    const factory = new DefaultComponentFactory()
    factory.registerAll(DefaultComponents)
    return (
      <article className="grid grid-cols-2 gap-12 max-w-[500px] bg-white dark:bg-vulcan rounded-[20px] p-12">
        <div className="prose">
          {heading && <h3 className="mb-4 leading-[1.5]">{heading}</h3>}
          {description && <RichText className="leading-[1.5]" text={ description.json } factory={ factory } />}
          {linkUrl && linkTitle && (
            <Link className="link--arrow" href={ linkUrl.href }>
              { linkTitle }
            </Link>
          )}
        </div>
        <div>
          {image && (<CmsImage className="w-full rounded-[20px]" alt="" src={ image as Schema.ReferenceDataFragment } width={207} height={232} />
          )}
        </div>
      </article>
    );
}

export default PromoItem