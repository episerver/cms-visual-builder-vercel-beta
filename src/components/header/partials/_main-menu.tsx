"use client";

import { useContext, useMemo, useId, type FunctionComponent } from "react";
import { HeaderContext } from "../_header";
import { contentLinkToString } from "@remkoj/optimizely-graph-client/utils";
import { type Schema } from "@/gql"
import dynamic from 'next/dynamic'

type ContentLinkArg = Parameters<typeof contentLinkToString>[0]
type DropdownMenuProps = Schema.MegaMenuGroupBlockDataFragment & Omit<JSX.IntrinsicElements['li'], 'className' | 'onMouseOver' | 'onFocus'>

const MenuItem = dynamic(() => import('./_menu-item'), { ssr: false })

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
        <section className="outer-padding absolute pt-10 pb-20 z-50 top-[88px] left-0 bg-ghost-white w-full shadow-[0_14px_4px_6px_rgba(0,0,0,0.1)] dark:bg-vulcan-85">
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