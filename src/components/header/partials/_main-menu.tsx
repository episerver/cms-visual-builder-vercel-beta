"use client";

import Link from "next/link";
import { useContext, useMemo, useId, type FunctionComponent } from "react";
import { HeaderContext } from "../_header";
import { contentLinkToString } from "@remkoj/optimizely-graph-client/utils";
import { type Schema } from "@/gql"
import { linkDataToUrl } from '@/components/shared/cms_link'
import { CmsImage } from '@/components/shared/cms_image'
import { RichText } from '@remkoj/optimizely-cms-react/components'
import { CmsLink } from '@/components/shared/cms_link'

type ContentLinkArg = Parameters<typeof contentLinkToString>[0]

type PromoItemProps = Schema.CardBlockDataFragment
type DropdownMenuProps = Schema.MegaMenuGroupBlockDataFragment & Omit<JSX.IntrinsicElements['li'], 'className' | 'onMouseOver' | 'onFocus'>
type MenuItemProps = {
    menuList: Schema.NavigationMenuBlockDataFragment | Schema.CardBlockDataFragment
} & JSX.IntrinsicElements['div']

const MenuItem : FunctionComponent<MenuItemProps> = ({ menuList, ...props }) => {
    if (menuList.__typename === "NavigationMenuBlock") {
        return <div {...props}>
            {menuList.title && <h3 className="text-[16px] font-semibold uppercase tracking-[1px]">{ menuList.title }</h3> }
            {menuList.items && (
            <ul className="grid gap-5">
                {menuList.items.map((menuItem: any) => {
                    return <li key={menuItem.text}>
                        <CmsLink className="hover:text-azure focus:text-azure" href={menuItem} />
                    </li>
                })}
            </ul>
            )}
        </div>
    }
    if (menuList.__typename === "CardBlock") {
        return <div className="col-span-2 flex justify-end"><PromoItem {...menuList} /></div>
    }
}

/**
 * Renders a dropdown menu with the specified menu name.
 *
 * @param menuName - The name of the dropdown menu
 * @return The rendered dropdown menu
 */
const DropdownMenu : FunctionComponent<DropdownMenuProps> = ({ menuName, menuData = [], menuLink, ...props }) => {
  const { currentMenu, setCurrentMenu } = useContext(HeaderContext);
  const gridColumnClass = useMemo(() => {
    let columns = (menuData?.length ?? 0) + (menuData?.filter(itm => itm?.__typename == "CardBlock")?.length ?? 0)
    return `grid-cols-${ columns }` 
  }, [ menuData ])

  function handleToggle() {
    setCurrentMenu(menuName ?? "");
  }

  return (
    <li
      className="mx-4 xl:mx-8 h-full flex items-center"
      onMouseOver={handleToggle}
      onFocus={handleToggle}
      {...props}
    >
      <button className="hover:text-azure focus:text-azure font-semibold">
        {menuName}
      </button>
      {menuData && currentMenu === menuName ? (
        <section className="outer-padding absolute pt-10 pb-20 z-50 top-[88px] left-0 bg-ghost-white w-full shadow-[0_14px_4px_6px_rgba(0,0,0,0.1)]">
          <div className={`container mx-auto grid ${gridColumnClass}`}>
            {menuData.map((menuList, index) => {
                const itemKey = (menuList as Schema.NavigationMenuBlockDataFragment)?.title || "menuListItem"
                return <MenuItem key={itemKey + index} menuList={ menuList as Schema.NavigationMenuBlockDataFragment } />
            })}
          </div>
        </section>
      ) : null}
    </li>
  );
}

const PromoItem : FunctionComponent<PromoItemProps> = ({ heading, description, link, image }) => {
  const linkUrl = linkDataToUrl((link as Schema.ButtonBlockPropertyDataFragment)?.link)
  const linkTitle = (link as Schema.ButtonBlockPropertyDataFragment).text
  return (
    <article className="grid grid-cols-2 gap-12 max-w-[500px] bg-white rounded-[20px] p-12">
      <div className="prose">
        {heading && <h3 className="mb-4 leading-[1.5]">{heading}</h3>}
        {description && <RichText className="leading-[1.5]" text={ description.json } />}
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

export const MainMenu : FunctionComponent<{}> = () => {
    const { menuItems } = useContext(HeaderContext)
    const id = useId()
    return <ul className="flex justify-between items-center">
        { menuItems.map(navigationItem => {
            const itemKey = contentLinkToString((navigationItem as Schema.IContentDataFragment)?._metadata as ContentLinkArg, true)
            return <DropdownMenu key={ id + itemKey } {...navigationItem} />
        })}
    </ul>
}

export default MainMenu