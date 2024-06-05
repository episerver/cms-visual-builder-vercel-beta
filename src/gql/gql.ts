/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment PageData on IContent {\n  ...IContentData\n}": types.PageDataFragmentDoc,
    "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}": types.ReferenceDataFragmentDoc,
    "fragment IContentListItem on IContent {\n  ...IContentData\n}": types.IContentListItemFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}": types.getContentByIdDocument,
    "fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": types.LinkItemDataFragmentDoc,
    "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}": types.getContentTypeDocument,
    "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}": types.getContentByPathDocument,
    "fragment ExperienceData on IExperience {\n  experience: _metadata {\n    ... on CompositionMetadata {\n      composition {\n        ...CompositionData\n      }\n    }\n  }\n}": types.ExperienceDataFragmentDoc,
    "fragment ElementData on IElement {\n  ...IElementData\n}": types.ElementDataFragmentDoc,
    "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}": types.CompositionDataFragmentDoc,
    "fragment BlockData on IContent {\n  ...IContentData\n}": types.BlockDataFragmentDoc,
    "fragment IElementData on IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IElementDataFragmentDoc,
    "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}": types.IContentInfoFragmentDoc,
    "fragment IContentData on IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IContentDataFragmentDoc,
    "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}": types.LinkDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}": types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CardBlockData on CardBlock {\n  heading: CardHeading\n  subheading: CardSubheading\n  description: CardDescription {\n    json\n  }\n  icon: CardIcon {\n    ...ReferenceData\n  }\n  image: CardImage {\n    ...ReferenceData\n  }\n  link: CardButton {\n    ...ButtonBlockPropertyData\n  }\n  color: CardColor\n  layout: CardImageLayout\n}": types.CardBlockDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n    text: Text\n    link: Link {\n        ...LinkData\n    }\n}": types.CTAElementDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n    headingText\n}": types.HeadingElementDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n    altText\n    imageLink {\n        ...ReferenceData\n    }\n}": types.ImageElementDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n    paragraph: text {\n        json\n    }\n}": types.ParagraphElementDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  referenceTitle\n  referenceText {\n    json\n  }\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n}": types.TestimonialElementDataFragmentDoc,
    "query getFooter {\n  footer: WebsiteFooter {\n    total\n    items {\n      address: FooterMainOfficeLocation {\n        ...OfficeLocationData\n      }\n      firstMenu: FooterFirstLinkList {\n        ...MenuContent\n      }\n      secondMenu: FooterSecondLinkList {\n        ...MenuContent\n      }\n      thirdMenu: FooterThirdLinkList {\n        ...MenuContent\n      }\n      logo: FooterLogo {\n        ...ReferenceData\n      }\n      logoAlt: FooterLogoAltText\n      legal: FooterLegalLinks {\n        ...LinkItemData\n      }\n    }\n  }\n}\n\nfragment MenuContent on NavigationMenuBlockProperty {\n  heading: MenuNavigationHeading\n  links: NavigationLinks {\n    ...LinkItemData\n  }\n}\n\nfragment OfficeLocationData on OfficeLocation {\n  title: OfficeTitle\n  street1: OfficeAddressStreet1\n  street2: OfficeAddressStreet2\n  postalcode: OfficeAddressPostalCode\n  city: OfficeAddressCity\n  country: OfficeAddressCountry\n  phone: OfficePhone\n  email: OfficeEmail\n}": types.getFooterDocument,
    "query getHeader {\n  menuItems: HeaderBlock {\n    items {\n      logo: site_logo {\n        ...ReferenceData\n      }\n      headerNavigation: site_main_navigation {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      utilityNavigation: site_utility_navigation {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}": types.getHeaderDocument,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  menuName: MenuMenuHeading\n  menuLink: MegaMenuUrl {\n    ...LinkData\n  }\n  menuData: MegaMenuContentArea {\n    __typename\n    ...IContentData\n    ...NavigationMenuBlockData\n    ...CardBlockData\n  }\n}": types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  title: MenuNavigationHeading\n  items: NavigationLinks {\n    ...LinkItemData\n  }\n}": types.NavigationMenuBlockDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "query getBlankExperienceMetaData($key: String!, $version: String) {\n  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {\n    items {\n      _metadata {\n        displayName\n      }\n      SeoSettings {\n        metaTitle\n      }\n    }\n  }\n}": types.getBlankExperienceMetaDataDocument,
    "query getDictionary($dictionary: String!, $locale: [Locales]) {\n  getDictionary: Dictionary(\n    where: {DictionaryKey: {eq: $dictionary}}\n    locale: $locale\n  ) {\n    total\n    items {\n      key: DictionaryKey\n      contents: DictionaryItems {\n        key: DictionaryItemKey\n        value: DictionaryItemValue\n      }\n    }\n  }\n}": types.getDictionaryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageData on IContent {\n  ...IContentData\n}"): (typeof documents)["fragment PageData on IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentListItem on IContent {\n  ...IContentData\n}"): (typeof documents)["fragment IContentListItem on IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"): (typeof documents)["query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceData on IExperience {\n  experience: _metadata {\n    ... on CompositionMetadata {\n      composition {\n        ...CompositionData\n      }\n    }\n  }\n}"): (typeof documents)["fragment ExperienceData on IExperience {\n  experience: _metadata {\n    ... on CompositionMetadata {\n      composition {\n        ...CompositionData\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ElementData on IElement {\n  ...IElementData\n}"): (typeof documents)["fragment ElementData on IElement {\n  ...IElementData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"): (typeof documents)["fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockData on IContent {\n  ...IContentData\n}"): (typeof documents)["fragment BlockData on IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IElementData on IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IElementData on IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IContentData on IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"): (typeof documents)["fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockData on ButtonBlock {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"): (typeof documents)["fragment ButtonBlockData on ButtonBlock {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"): (typeof documents)["fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CardBlockData on CardBlock {\n  heading: CardHeading\n  subheading: CardSubheading\n  description: CardDescription {\n    json\n  }\n  icon: CardIcon {\n    ...ReferenceData\n  }\n  image: CardImage {\n    ...ReferenceData\n  }\n  link: CardButton {\n    ...ButtonBlockPropertyData\n  }\n  color: CardColor\n  layout: CardImageLayout\n}"): (typeof documents)["fragment CardBlockData on CardBlock {\n  heading: CardHeading\n  subheading: CardSubheading\n  description: CardDescription {\n    json\n  }\n  icon: CardIcon {\n    ...ReferenceData\n  }\n  image: CardImage {\n    ...ReferenceData\n  }\n  link: CardButton {\n    ...ButtonBlockPropertyData\n  }\n  color: CardColor\n  layout: CardImageLayout\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CTAElementData on CTAElement {\n    text: Text\n    link: Link {\n        ...LinkData\n    }\n}"): (typeof documents)["fragment CTAElementData on CTAElement {\n    text: Text\n    link: Link {\n        ...LinkData\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingElementData on HeadingElement {\n    headingText\n}"): (typeof documents)["fragment HeadingElementData on HeadingElement {\n    headingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n    altText\n    imageLink {\n        ...ReferenceData\n    }\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n    altText\n    imageLink {\n        ...ReferenceData\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ParagraphElementData on ParagraphElement {\n    paragraph: text {\n        json\n    }\n}"): (typeof documents)["fragment ParagraphElementData on ParagraphElement {\n    paragraph: text {\n        json\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialElementData on TestimonialElement {\n  referenceTitle\n  referenceText {\n    json\n  }\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment TestimonialElementData on TestimonialElement {\n  referenceTitle\n  referenceText {\n    json\n  }\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getFooter {\n  footer: WebsiteFooter {\n    total\n    items {\n      address: FooterMainOfficeLocation {\n        ...OfficeLocationData\n      }\n      firstMenu: FooterFirstLinkList {\n        ...MenuContent\n      }\n      secondMenu: FooterSecondLinkList {\n        ...MenuContent\n      }\n      thirdMenu: FooterThirdLinkList {\n        ...MenuContent\n      }\n      logo: FooterLogo {\n        ...ReferenceData\n      }\n      logoAlt: FooterLogoAltText\n      legal: FooterLegalLinks {\n        ...LinkItemData\n      }\n    }\n  }\n}\n\nfragment MenuContent on NavigationMenuBlockProperty {\n  heading: MenuNavigationHeading\n  links: NavigationLinks {\n    ...LinkItemData\n  }\n}\n\nfragment OfficeLocationData on OfficeLocation {\n  title: OfficeTitle\n  street1: OfficeAddressStreet1\n  street2: OfficeAddressStreet2\n  postalcode: OfficeAddressPostalCode\n  city: OfficeAddressCity\n  country: OfficeAddressCountry\n  phone: OfficePhone\n  email: OfficeEmail\n}"): (typeof documents)["query getFooter {\n  footer: WebsiteFooter {\n    total\n    items {\n      address: FooterMainOfficeLocation {\n        ...OfficeLocationData\n      }\n      firstMenu: FooterFirstLinkList {\n        ...MenuContent\n      }\n      secondMenu: FooterSecondLinkList {\n        ...MenuContent\n      }\n      thirdMenu: FooterThirdLinkList {\n        ...MenuContent\n      }\n      logo: FooterLogo {\n        ...ReferenceData\n      }\n      logoAlt: FooterLogoAltText\n      legal: FooterLegalLinks {\n        ...LinkItemData\n      }\n    }\n  }\n}\n\nfragment MenuContent on NavigationMenuBlockProperty {\n  heading: MenuNavigationHeading\n  links: NavigationLinks {\n    ...LinkItemData\n  }\n}\n\nfragment OfficeLocationData on OfficeLocation {\n  title: OfficeTitle\n  street1: OfficeAddressStreet1\n  street2: OfficeAddressStreet2\n  postalcode: OfficeAddressPostalCode\n  city: OfficeAddressCity\n  country: OfficeAddressCountry\n  phone: OfficePhone\n  email: OfficeEmail\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getHeader {\n  menuItems: HeaderBlock {\n    items {\n      logo: site_logo {\n        ...ReferenceData\n      }\n      headerNavigation: site_main_navigation {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      utilityNavigation: site_utility_navigation {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}"): (typeof documents)["query getHeader {\n  menuItems: HeaderBlock {\n    items {\n      logo: site_logo {\n        ...ReferenceData\n      }\n      headerNavigation: site_main_navigation {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      utilityNavigation: site_utility_navigation {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  menuName: MenuMenuHeading\n  menuLink: MegaMenuUrl {\n    ...LinkData\n  }\n  menuData: MegaMenuContentArea {\n    __typename\n    ...IContentData\n    ...NavigationMenuBlockData\n    ...CardBlockData\n  }\n}"): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  menuName: MenuMenuHeading\n  menuLink: MegaMenuUrl {\n    ...LinkData\n  }\n  menuData: MegaMenuContentArea {\n    __typename\n    ...IContentData\n    ...NavigationMenuBlockData\n    ...CardBlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  title: MenuNavigationHeading\n  items: NavigationLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment NavigationMenuBlockData on NavigationMenuBlock {\n  title: MenuNavigationHeading\n  items: NavigationLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getBlankExperienceMetaData($key: String!, $version: String) {\n  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {\n    items {\n      _metadata {\n        displayName\n      }\n      SeoSettings {\n        metaTitle\n      }\n    }\n  }\n}"): (typeof documents)["query getBlankExperienceMetaData($key: String!, $version: String) {\n  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {\n    items {\n      _metadata {\n        displayName\n      }\n      SeoSettings {\n        metaTitle\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getDictionary($dictionary: String!, $locale: [Locales]) {\n  getDictionary: Dictionary(\n    where: {DictionaryKey: {eq: $dictionary}}\n    locale: $locale\n  ) {\n    total\n    items {\n      key: DictionaryKey\n      contents: DictionaryItems {\n        key: DictionaryItemKey\n        value: DictionaryItemValue\n      }\n    }\n  }\n}"): (typeof documents)["query getDictionary($dictionary: String!, $locale: [Locales]) {\n  getDictionary: Dictionary(\n    where: {DictionaryKey: {eq: $dictionary}}\n    locale: $locale\n  ) {\n    total\n    items {\n      key: DictionaryKey\n      contents: DictionaryItems {\n        key: DictionaryItemKey\n        value: DictionaryItemValue\n      }\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;