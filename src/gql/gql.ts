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
    "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}": types.getContentTypeDocument,
    "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}": types.ReferenceDataFragmentDoc,
    "fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": types.LinkItemDataFragmentDoc,
    "fragment ElementData on _IElement {\n  ...IElementData\n}": types.ElementDataFragmentDoc,
    "fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionData\n  }\n}": types.ExperienceDataFragmentDoc,
    "fragment IElementData on _IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IElementDataFragmentDoc,
    "fragment IContentListItem on _IContent {\n  ...IContentData\n}": types.IContentListItemFragmentDoc,
    "fragment PageData on _IContent {\n  ...IContentData\n}": types.PageDataFragmentDoc,
    "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}": types.CompositionDataFragmentDoc,
    "fragment BlockData on _IContent {\n  ...IContentData\n}": types.BlockDataFragmentDoc,
    "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}": types.IContentInfoFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}": types.getContentByIdDocument,
    "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: _Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}": types.getContentByPathDocument,
    "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}": types.LinkDataFragmentDoc,
    "fragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IContentDataFragmentDoc,
    "fragment CardBlockData on CardBlock {\n  heading: CardHeading\n  subheading: CardSubheading\n  description: CardDescription {\n    json\n  }\n  icon: CardIcon {\n    ...ReferenceData\n  }\n  image: CardImage {\n    ...ReferenceData\n  }\n  link: CardButton {\n    ...ButtonBlockPropertyData\n  }\n  color: CardColor\n  layout: CardImageLayout\n}": types.CardBlockDataFragmentDoc,
    "fragment OfficeLocationData on OfficeLocation {\n  title: OfficeTitle\n  street1: OfficeAddressStreet1\n  street2: OfficeAddressStreet2\n  postalcode: OfficeAddressPostalCode\n  city: OfficeAddressCity\n  country: OfficeAddressCountry\n  phone: OfficePhone\n  email: OfficeEmail\n}": types.OfficeLocationDataFragmentDoc,
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n}": types.ArticleListElementDataFragmentDoc,
    "query getArticleListElementItems($count: Int, $locale: [Locales]) {\n  ArticlePage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}}}\n  ) {\n    items {\n      ...IContentData\n      articleTitle\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      articleAuthors\n      articleSummary {\n        json\n      }\n      articleHeroImage {\n        ...ReferenceData\n      }\n    }\n  }\n}": types.getArticleListElementItemsDocument,
    "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "query getBlankExperienceMetaData($key: String!, $version: String) {\n  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {\n    items {\n      _metadata {\n        displayName\n      }\n      SeoSettings {\n        metaTitle\n      }\n    }\n  }\n}": types.getBlankExperienceMetaDataDocument,
    "fragment ArticleGroupPageData on ArticleGroupPage {\n  articleGroupTitle\n  articleGroupIntro {\n    json\n  }\n  MainContent {\n    ...BlockData\n  }\n}": types.ArticleGroupPageDataFragmentDoc,
    "query getArticleGroupPageItems($key: String!, $locale: [Locales], $pageSize: Int, $skip: Int) {\n  group: ArticleGroupPage(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {\n    data: items {\n      children: _link(type: ITEMS) {\n        listing: ArticlePage(\n          limit: $pageSize\n          locale: $locale\n          skip: $skip\n          where: {_metadata: {status: {eq: \"Published\"}}}\n        ) {\n          total\n          items {\n            ...IContentData\n            _metadata {\n              published\n            }\n            articleHeroImage {\n              ...ReferenceData\n            }\n            articleTitle\n            articleSummary {\n              json\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.getArticleGroupPageItemsDocument,
    "query getArticlePageMetaData($key: String!, $version: String) {\n  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {\n    items {\n      _metadata {\n        displayName\n      }\n      SeoSettings {\n        metaTitle\n      }\n    }\n  }\n}": types.getArticlePageMetaDataDocument,
    "fragment ArticlePageData on ArticlePage {\n  metadata: _metadata {\n    published\n  }\n  articleHeroImage {\n    ...ReferenceData\n  }\n  articleAuthors\n  articleTitle\n  articleBody {\n    json\n  }\n}": types.ArticlePageDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}": types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  text\n  link {\n    ...LinkData\n  }\n  className\n  buttonType\n  variant\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  text: Text\n  link: Link {\n    ...LinkData\n  }\n}": types.CTAElementDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": types.HeadingElementDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": types.ImageElementDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n    paragraph: text {\n        json\n    }\n}": types.ParagraphElementDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  referenceTitle\n  referenceText {\n    json\n  }\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n}": types.TestimonialElementDataFragmentDoc,
    "query getFooter {\n  footer: WebsiteFooter(where: {_metadata: {status: {eq: \"Published\"}}}) {\n    total\n    items {\n      address: FooterMainOfficeLocation {\n        ...OfficeLocationData\n      }\n      firstMenu: FooterFirstLinkList {\n        ...MenuContent\n      }\n      secondMenu: FooterSecondLinkList {\n        ...MenuContent\n      }\n      thirdMenu: FooterThirdLinkList {\n        ...MenuContent\n      }\n      logo: FooterLogo {\n        ...ReferenceData\n      }\n      logoAlt: FooterLogoAltText\n      legal: FooterLegalLinks {\n        ...LinkItemData\n      }\n    }\n  }\n}\n\nfragment MenuContent on NavigationMenuBlockProperty {\n  heading: MenuNavigationHeading\n  links: NavigationLinks {\n    ...LinkItemData\n  }\n}": types.getFooterDocument,
    "query getHeader {\n  menuItems: HeaderBlock(where: {_metadata: {status: {eq: \"Published\"}}}) {\n    items {\n      logo: site_logo {\n        ...ReferenceData\n      }\n      darkLogo: site_logo_dark {\n        ...ReferenceData\n      }\n      headerNavigation: site_main_navigation {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      utilityNavigation: site_utility_navigation {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}": types.getHeaderDocument,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  menuName: MenuMenuHeading\n  menuLink: MegaMenuUrl {\n    ...LinkData\n  }\n  menuData: MegaMenuContentArea {\n    __typename\n    ...IContentData\n    ...NavigationMenuBlockData\n    ...CardBlockData\n  }\n}": types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  title: MenuNavigationHeading\n  items: NavigationLinks {\n    ...LinkItemData\n  }\n}": types.NavigationMenuBlockDataFragmentDoc,
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
export function gql(source: "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"): (typeof documents)["query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ElementData on _IElement {\n  ...IElementData\n}"): (typeof documents)["fragment ElementData on _IElement {\n  ...IElementData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionData\n  }\n}"): (typeof documents)["fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IElementData on _IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IElementData on _IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentListItem on _IContent {\n  ...IContentData\n}"): (typeof documents)["fragment IContentListItem on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageData on _IContent {\n  ...IContentData\n}"): (typeof documents)["fragment PageData on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"): (typeof documents)["fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockData on _IContent {\n  ...IContentData\n}"): (typeof documents)["fragment BlockData on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: _Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: _Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"): (typeof documents)["fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CardBlockData on CardBlock {\n  heading: CardHeading\n  subheading: CardSubheading\n  description: CardDescription {\n    json\n  }\n  icon: CardIcon {\n    ...ReferenceData\n  }\n  image: CardImage {\n    ...ReferenceData\n  }\n  link: CardButton {\n    ...ButtonBlockPropertyData\n  }\n  color: CardColor\n  layout: CardImageLayout\n}"): (typeof documents)["fragment CardBlockData on CardBlock {\n  heading: CardHeading\n  subheading: CardSubheading\n  description: CardDescription {\n    json\n  }\n  icon: CardIcon {\n    ...ReferenceData\n  }\n  image: CardImage {\n    ...ReferenceData\n  }\n  link: CardButton {\n    ...ButtonBlockPropertyData\n  }\n  color: CardColor\n  layout: CardImageLayout\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OfficeLocationData on OfficeLocation {\n  title: OfficeTitle\n  street1: OfficeAddressStreet1\n  street2: OfficeAddressStreet2\n  postalcode: OfficeAddressPostalCode\n  city: OfficeAddressCity\n  country: OfficeAddressCountry\n  phone: OfficePhone\n  email: OfficeEmail\n}"): (typeof documents)["fragment OfficeLocationData on OfficeLocation {\n  title: OfficeTitle\n  street1: OfficeAddressStreet1\n  street2: OfficeAddressStreet2\n  postalcode: OfficeAddressPostalCode\n  city: OfficeAddressCity\n  country: OfficeAddressCountry\n  phone: OfficePhone\n  email: OfficeEmail\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n}"): (typeof documents)["fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getArticleListElementItems($count: Int, $locale: [Locales]) {\n  ArticlePage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}}}\n  ) {\n    items {\n      ...IContentData\n      articleTitle\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      articleAuthors\n      articleSummary {\n        json\n      }\n      articleHeroImage {\n        ...ReferenceData\n      }\n    }\n  }\n}"): (typeof documents)["query getArticleListElementItems($count: Int, $locale: [Locales]) {\n  ArticlePage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}}}\n  ) {\n    items {\n      ...IContentData\n      articleTitle\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      articleAuthors\n      articleSummary {\n        json\n      }\n      articleHeroImage {\n        ...ReferenceData\n      }\n    }\n  }\n}"];
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
export function gql(source: "fragment ArticleGroupPageData on ArticleGroupPage {\n  articleGroupTitle\n  articleGroupIntro {\n    json\n  }\n  MainContent {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment ArticleGroupPageData on ArticleGroupPage {\n  articleGroupTitle\n  articleGroupIntro {\n    json\n  }\n  MainContent {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getArticleGroupPageItems($key: String!, $locale: [Locales], $pageSize: Int, $skip: Int) {\n  group: ArticleGroupPage(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {\n    data: items {\n      children: _link(type: ITEMS) {\n        listing: ArticlePage(\n          limit: $pageSize\n          locale: $locale\n          skip: $skip\n          where: {_metadata: {status: {eq: \"Published\"}}}\n        ) {\n          total\n          items {\n            ...IContentData\n            _metadata {\n              published\n            }\n            articleHeroImage {\n              ...ReferenceData\n            }\n            articleTitle\n            articleSummary {\n              json\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getArticleGroupPageItems($key: String!, $locale: [Locales], $pageSize: Int, $skip: Int) {\n  group: ArticleGroupPage(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {\n    data: items {\n      children: _link(type: ITEMS) {\n        listing: ArticlePage(\n          limit: $pageSize\n          locale: $locale\n          skip: $skip\n          where: {_metadata: {status: {eq: \"Published\"}}}\n        ) {\n          total\n          items {\n            ...IContentData\n            _metadata {\n              published\n            }\n            articleHeroImage {\n              ...ReferenceData\n            }\n            articleTitle\n            articleSummary {\n              json\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getArticlePageMetaData($key: String!, $version: String) {\n  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {\n    items {\n      _metadata {\n        displayName\n      }\n      SeoSettings {\n        metaTitle\n      }\n    }\n  }\n}"): (typeof documents)["query getArticlePageMetaData($key: String!, $version: String) {\n  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {\n    items {\n      _metadata {\n        displayName\n      }\n      SeoSettings {\n        metaTitle\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticlePageData on ArticlePage {\n  metadata: _metadata {\n    published\n  }\n  articleHeroImage {\n    ...ReferenceData\n  }\n  articleAuthors\n  articleTitle\n  articleBody {\n    json\n  }\n}"): (typeof documents)["fragment ArticlePageData on ArticlePage {\n  metadata: _metadata {\n    published\n  }\n  articleHeroImage {\n    ...ReferenceData\n  }\n  articleAuthors\n  articleTitle\n  articleBody {\n    json\n  }\n}"];
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
export function gql(source: "fragment CTAElementData on CTAElement {\n  text: Text\n  link: Link {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment CTAElementData on CTAElement {\n  text: Text\n  link: Link {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingElementData on HeadingElement {\n  headingText\n}"): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  headingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"];
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
export function gql(source: "query getFooter {\n  footer: WebsiteFooter(where: {_metadata: {status: {eq: \"Published\"}}}) {\n    total\n    items {\n      address: FooterMainOfficeLocation {\n        ...OfficeLocationData\n      }\n      firstMenu: FooterFirstLinkList {\n        ...MenuContent\n      }\n      secondMenu: FooterSecondLinkList {\n        ...MenuContent\n      }\n      thirdMenu: FooterThirdLinkList {\n        ...MenuContent\n      }\n      logo: FooterLogo {\n        ...ReferenceData\n      }\n      logoAlt: FooterLogoAltText\n      legal: FooterLegalLinks {\n        ...LinkItemData\n      }\n    }\n  }\n}\n\nfragment MenuContent on NavigationMenuBlockProperty {\n  heading: MenuNavigationHeading\n  links: NavigationLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["query getFooter {\n  footer: WebsiteFooter(where: {_metadata: {status: {eq: \"Published\"}}}) {\n    total\n    items {\n      address: FooterMainOfficeLocation {\n        ...OfficeLocationData\n      }\n      firstMenu: FooterFirstLinkList {\n        ...MenuContent\n      }\n      secondMenu: FooterSecondLinkList {\n        ...MenuContent\n      }\n      thirdMenu: FooterThirdLinkList {\n        ...MenuContent\n      }\n      logo: FooterLogo {\n        ...ReferenceData\n      }\n      logoAlt: FooterLogoAltText\n      legal: FooterLegalLinks {\n        ...LinkItemData\n      }\n    }\n  }\n}\n\nfragment MenuContent on NavigationMenuBlockProperty {\n  heading: MenuNavigationHeading\n  links: NavigationLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getHeader {\n  menuItems: HeaderBlock(where: {_metadata: {status: {eq: \"Published\"}}}) {\n    items {\n      logo: site_logo {\n        ...ReferenceData\n      }\n      darkLogo: site_logo_dark {\n        ...ReferenceData\n      }\n      headerNavigation: site_main_navigation {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      utilityNavigation: site_utility_navigation {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}"): (typeof documents)["query getHeader {\n  menuItems: HeaderBlock(where: {_metadata: {status: {eq: \"Published\"}}}) {\n    items {\n      logo: site_logo {\n        ...ReferenceData\n      }\n      darkLogo: site_logo_dark {\n        ...ReferenceData\n      }\n      headerNavigation: site_main_navigation {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      utilityNavigation: site_utility_navigation {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}"];
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
export function gql(source: "query getDictionary($dictionary: String!, $locale: [Locales]) {\n  getDictionary: Dictionary(\n    where: {DictionaryKey: {eq: $dictionary}}\n    locale: $locale\n  ) {\n    total\n    items {\n      key: DictionaryKey\n      contents: DictionaryItems {\n        key: DictionaryItemKey\n        value: DictionaryItemValue\n      }\n    }\n  }\n}"): (typeof documents)["query getDictionary($dictionary: String!, $locale: [Locales]) {\n  getDictionary: Dictionary(\n    where: {DictionaryKey: {eq: $dictionary}}\n    locale: $locale\n  ) {\n    total\n    items {\n      key: DictionaryKey\n      contents: DictionaryItems {\n        key: DictionaryItemKey\n        value: DictionaryItemValue\n      }\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;