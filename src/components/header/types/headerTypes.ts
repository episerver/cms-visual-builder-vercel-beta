import { type MegaMenuGroupBlockDataFragment, type IContentDataFragment, type ButtonBlockDataFragment  } from '@/gql/graphql'

export type MenuItems = Array<MegaMenuGroupBlockDataFragment & IContentDataFragment>
export type UtilityItems = Array<ButtonBlockDataFragment & IContentDataFragment>

export type HeaderContextType = {
    menuItems: MenuItems
    utilityItems: UtilityItems
    currentMenu: string
    setCurrentMenu: (name: string) => void
    mobileMenuOpen: boolean
};

// The list of links
export type MenuList = {
    title: string;
    items: MenuItem[];
};

// The individual links
export type MenuItem = {
    title: string;
    url: string;
};

export type Promo = {
  // If promo added, limit menu items to 2 entries if possible? This shows as a card inside the dropdown.
  title: string;
  description: string;
  link: {
    title: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  } | null;
};

// The entire dropdown menu
export type MenuData = {
  menuLists: MenuList[]; // Limit to 4 entries of lists.
  promo?: Promo;
};

export interface DropdownMenuProps {
  menuName: string;
  menuData: MenuData | null;
}