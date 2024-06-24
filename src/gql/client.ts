import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const IContentInfoFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const IContentListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IElementData on _IElement {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ArticleListElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
}
    `;
export const CTAElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CTAElementData on CTAElement {
  text: Text
  link: Link {
    ...LinkData
  }
}
    `;
export const HeadingElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const ReferenceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const ImageElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    ...ReferenceData
  }
}
    `;
export const ParagraphElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ParagraphElementData on ParagraphElement {
  paragraph: text {
    json
  }
}
    `;
export const TestimonialElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment TestimonialElementData on TestimonialElement {
  referenceTitle
  referenceText {
    json
  }
  customerName
  customerLocation
  customerImage {
    ...ReferenceData
  }
}
    `;
export const ElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ElementData on _IElement {
  ...IElementData
  ...ArticleListElementData
  ...CTAElementData
  ...HeadingElementData
  ...ImageElementData
  ...ParagraphElementData
  ...TestimonialElementData
}
    `;
export const CompositionDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CompositionData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
  ... on ICompositionStructureNode {
    nodes @recursive(depth: 10) {
      name: displayName
    }
  }
  ... on ICompositionElementNode {
    element {
      ...ElementData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const BlankExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlankExperienceData on BlankExperience {
  ...ExperienceData
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  text
  link {
    ...LinkData
  }
  className
  buttonType
  variant
}
    `;
export const CardBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CardBlockData on CardBlock {
  heading: CardHeading
  subheading: CardSubheading
  description: CardDescription {
    json
  }
  icon: CardIcon {
    ...ReferenceData
  }
  image: CardImage {
    ...ReferenceData
  }
  link: CardButton {
    ...ButtonBlockPropertyData
  }
  color: CardColor
  layout: CardImageLayout
}
    `;
export const OfficeLocationDataFragmentDoc = /*#__PURE__*/ gql`
    fragment OfficeLocationData on OfficeLocation {
  title: OfficeTitle
  street1: OfficeAddressStreet1
  street2: OfficeAddressStreet2
  postalcode: OfficeAddressPostalCode
  city: OfficeAddressCity
  country: OfficeAddressCountry
  phone: OfficePhone
  email: OfficeEmail
}
    `;
export const ButtonBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ButtonBlockData on ButtonBlock {
  text
  link {
    ...LinkData
  }
  className
  buttonType
  variant
}
    `;
export const LinkItemDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const NavigationMenuBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment NavigationMenuBlockData on NavigationMenuBlock {
  title: MenuNavigationHeading
  items: NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  menuName: MenuMenuHeading
  menuLink: MegaMenuUrl {
    ...LinkData
  }
  menuData: MegaMenuContentArea {
    __typename
    ...IContentData
    ...NavigationMenuBlockData
    ...CardBlockData
  }
}
    `;
export const BlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlockData on _IContent {
  ...IContentData
  ...CardBlockData
  ...OfficeLocationData
  ...ButtonBlockData
  ...MegaMenuGroupBlockData
  ...NavigationMenuBlockData
}
    `;
export const ArticleGroupPageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ArticleGroupPageData on ArticleGroupPage {
  articleGroupTitle
  articleGroupIntro {
    json
  }
  MainContent {
    ...BlockData
  }
}
    `;
export const ArticlePageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ArticlePageData on ArticlePage {
  metadata: _metadata {
    published
  }
  articleHeroImage {
    ...ReferenceData
  }
  articleAuthors
  articleTitle
  articleBody {
    json
  }
}
    `;
export const PageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PageData on _IContent {
  ...IContentData
  ...BlankExperienceData
  ...ArticleGroupPageData
  ...ArticlePageData
}
    `;
export const MenuContentFragmentDoc = /*#__PURE__*/ gql`
    fragment MenuContent on NavigationMenuBlockProperty {
  heading: MenuNavigationHeading
  links: NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const getContentTypeDocument = /*#__PURE__*/ gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      _metadata {
        types
      }
    }
  }
}
    `;
export const getContentByIdDocument = /*#__PURE__*/ gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${ArticleGroupPageDataFragmentDoc}
${ArticlePageDataFragmentDoc}`;
export const getContentByPathDocument = /*#__PURE__*/ gql`
    query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {
  content: _Content(
    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}
    locale: $locale
  ) {
    total
    items {
      ...PageData
    }
  }
}
    ${PageDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${ArticleGroupPageDataFragmentDoc}
${BlockDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${ArticlePageDataFragmentDoc}`;
export const getArticleListElementItemsDocument = /*#__PURE__*/ gql`
    query getArticleListElementItems($count: Int, $locale: [Locales]) {
  ArticlePage(
    orderBy: {_metadata: {published: DESC}}
    limit: $count
    locale: $locale
    where: {_metadata: {status: {eq: "Published"}}}
  ) {
    items {
      ...IContentData
      articleTitle
      articleMeta: _metadata {
        key
        published
        lastModified
      }
      articleAuthors
      articleSummary {
        json
      }
      articleHeroImage {
        ...ReferenceData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getBlankExperienceMetaDataDocument = /*#__PURE__*/ gql`
    query getBlankExperienceMetaData($key: String!, $version: String) {
  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {
    items {
      _metadata {
        displayName
      }
      SeoSettings {
        metaTitle
      }
    }
  }
}
    `;
export const getArticleGroupPageItemsDocument = /*#__PURE__*/ gql`
    query getArticleGroupPageItems($key: String!, $locale: [Locales], $pageSize: Int, $skip: Int) {
  group: ArticleGroupPage(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {
    data: items {
      children: _link(type: ITEMS) {
        listing: ArticlePage(
          limit: $pageSize
          locale: $locale
          skip: $skip
          where: {_metadata: {status: {eq: "Published"}}}
        ) {
          total
          items {
            ...IContentData
            _metadata {
              published
            }
            articleHeroImage {
              ...ReferenceData
            }
            articleTitle
            articleSummary {
              json
            }
          }
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getArticlePageMetaDataDocument = /*#__PURE__*/ gql`
    query getArticlePageMetaData($key: String!, $version: String) {
  BlankExperience(where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}) {
    items {
      _metadata {
        displayName
      }
      SeoSettings {
        metaTitle
      }
    }
  }
}
    `;
export const getFooterDocument = /*#__PURE__*/ gql`
    query getFooter {
  footer: WebsiteFooter(where: {_metadata: {status: {eq: "Published"}}}) {
    total
    items {
      address: FooterMainOfficeLocation {
        ...OfficeLocationData
      }
      firstMenu: FooterFirstLinkList {
        ...MenuContent
      }
      secondMenu: FooterSecondLinkList {
        ...MenuContent
      }
      thirdMenu: FooterThirdLinkList {
        ...MenuContent
      }
      logo: FooterLogo {
        ...ReferenceData
      }
      logoAlt: FooterLogoAltText
      legal: FooterLegalLinks {
        ...LinkItemData
      }
    }
  }
}
    ${OfficeLocationDataFragmentDoc}
${MenuContentFragmentDoc}
${LinkItemDataFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getHeaderDocument = /*#__PURE__*/ gql`
    query getHeader {
  menuItems: HeaderBlock(where: {_metadata: {status: {eq: "Published"}}}) {
    items {
      logo: site_logo {
        ...ReferenceData
      }
      darkLogo: site_logo_dark {
        ...ReferenceData
      }
      headerNavigation: site_main_navigation {
        ...IContentData
        ...MegaMenuGroupBlockData
      }
      utilityNavigation: site_utility_navigation {
        ...IContentData
        ...ButtonBlockData
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ButtonBlockDataFragmentDoc}`;
export const getDictionaryDocument = /*#__PURE__*/ gql`
    query getDictionary($dictionary: String!, $locale: [Locales]) {
  getDictionary: Dictionary(
    where: {DictionaryKey: {eq: $dictionary}}
    locale: $locale
  ) {
    total
    items {
      key: DictionaryKey
      contents: DictionaryItems {
        key: DictionaryItemKey
        value: DictionaryItemValue
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getArticleListElementItems(variables?: Schema.getArticleListElementItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticleListElementItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticleListElementItemsQuery>(getArticleListElementItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticleListElementItems', 'query', variables);
    },
    getBlankExperienceMetaData(variables: Schema.getBlankExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlankExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceMetaDataQuery>(getBlankExperienceMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlankExperienceMetaData', 'query', variables);
    },
    getArticleGroupPageItems(variables: Schema.getArticleGroupPageItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticleGroupPageItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticleGroupPageItemsQuery>(getArticleGroupPageItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticleGroupPageItems', 'query', variables);
    },
    getArticlePageMetaData(variables: Schema.getArticlePageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticlePageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticlePageMetaDataQuery>(getArticlePageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticlePageMetaData', 'query', variables);
    },
    getFooter(variables?: Schema.getFooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getFooterQuery>(getFooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFooter', 'query', variables);
    },
    getHeader(variables?: Schema.getHeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getHeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHeaderQuery>(getHeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHeader', 'query', variables);
    },
    getDictionary(variables: Schema.getDictionaryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getDictionaryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getDictionaryQuery>(getDictionaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDictionary', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;