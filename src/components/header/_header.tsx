"use client";

import { createContext, useRef, useState } from "react";
import Logo from "./partials/_logo";
import MainMenu from "./partials/_main-menu";
import SecondaryMenu from "./partials/_secondary-menu";
import { type HeaderContextType, type MenuItems, type UtilityItems } from "./types/headerTypes";
import { type Maybe, type ReferenceDataFragment } from '@/gql/graphql'
import { extractLabel } from "@/labels/client";
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(() => import('./partials/_mobile-menu'), { ssr: false })

export const HeaderContext = createContext<HeaderContextType>({
  menuItems: [],
  utilityItems: [],
  currentMenu: "",
  setCurrentMenu: (name: string) => {},
  mobileMenuOpen: false,
});

type HeaderProps = {
  logoItem?: Maybe<ReferenceDataFragment>
  darkLogoItem?: Maybe<ReferenceDataFragment>
  menuItems: MenuItems
  utilityItems: UtilityItems
  labels?: Record<string,string>
}

/**
 * Renders the Header component with a specific locale.
 *
 * @return the rendered Header component
 */
export default function Header({ menuItems, utilityItems, logoItem, darkLogoItem, labels = {} }: HeaderProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const secondaryMenuRef = useRef<HTMLUListElement>(null);
  const [currentMenu, setCurrentMenu] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mouseLeaveTimer = useRef<undefined | NodeJS.Timeout>();

  const headerContext = {
    menuItems,
    utilityItems,
    currentMenu,
    setCurrentMenu,
    mobileMenuOpen,
  };

  // This will close the dropdown after 500ms of the mouse not being over any header element.
  function handleMouseLeave() {
    mouseLeaveTimer.current = setTimeout(() => {
      setCurrentMenu("");
    }, 800);
  }

  // Clears timeout if we detect that the mouse is still over the header
  function handleMouseEnter() {
    clearTimeout(mouseLeaveTimer.current);
  }

  // Checks if the focus leaves the header and closes the dropdown menu if it does.
  function handleFocusLeave(e: React.FocusEvent<HTMLElement>) {
    if (
      (secondaryMenuRef.current &&
        secondaryMenuRef.current.contains(e.relatedTarget)) ||
      (logoRef.current && logoRef.current.contains(e.relatedTarget))
    ) {
      setCurrentMenu("");
    }
  }

  return (
    <HeaderContext.Provider value={headerContext}>
      <header
        className="outer-padding bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onBlur={handleFocusLeave}
      >
        <div className="py-8 container mx-auto flex items-center w-full justify-between lg:justify-normal">
          <Logo ref={ logoRef } logoItem={ logoItem } darkLogoItem={ darkLogoItem } />

          <div className="lg:hidden">
            <button className="btn btn--secondary ml-[10px]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
              <div className="btn__content">
                {mobileMenuOpen ? extractLabel(labels, "close", { fallback: "CLOSE" }) : extractLabel(labels, "menu", { fallback: "MENU" })}
              </div>
            </button>
            { mobileMenuOpen && <MobileMenu /> }
          </div>

          <div className="hidden justify-between grow lg:flex">
            <MainMenu />
            <SecondaryMenu ref={secondaryMenuRef} />
          </div>
        </div>
      </header>
    </HeaderContext.Provider>
  );
}
