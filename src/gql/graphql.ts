/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type BannerBlock = IComponent & IContent & IData & {
  __typename?: 'BannerBlock';
  Title?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BannerBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BannerBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BannerBlockAutocomplete = {
  __typename?: 'BannerBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BannerBlockFacet = {
  __typename?: 'BannerBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BannerBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type BannerBlockOutput = {
  __typename?: 'BannerBlockOutput';
  autocomplete?: Maybe<BannerBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BannerBlockFacet>;
  items?: Maybe<Array<Maybe<BannerBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BannerBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
};

export type BlankExperience = IContent & IData & IExperience & IPage & {
  __typename?: 'BlankExperience';
  AdditionalData?: Maybe<Array<Maybe<IContent>>>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BlankExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  AdditionalData?: Maybe<IContentAutocomplete>;
  SeoSettings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};


export type BlankExperienceAutocompleteSeoSettingsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  AdditionalData?: Maybe<IContentFacet>;
  SeoSettings?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type BlankExperienceFacetSeoSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlankExperienceOrderByInput = {
  AdditionalData?: InputMaybe<IContentOrderByInput>;
  SeoSettings?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  AdditionalData?: InputMaybe<IContentWhereInput>;
  SeoSettings?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
};

export type BlankSection = IComponent & IContent & IData & ISection & {
  __typename?: 'BlankSection';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BlankSection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
};

export type ButtonBlock = IComponent & IContent & IData & {
  __typename?: 'ButtonBlock';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  buttonType?: Maybe<Scalars['String']['output']>;
  className?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ContentUrl>;
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


export type ButtonBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  link?: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  link?: Maybe<ContentUrlFacet>;
};

export type ButtonBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  link?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete?: Maybe<ButtonBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ButtonBlockFacet>;
  items?: Maybe<Array<Maybe<ButtonBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  buttonType?: Maybe<Scalars['String']['output']>;
  className?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ContentUrl>;
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  link?: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  link?: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  link?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  link?: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  link?: InputMaybe<ContentUrlWhereInput>;
};

export type CTAElement = IComponent & IContent & IData & IElement & {
  __typename?: 'CTAElement';
  Link?: Maybe<ContentUrl>;
  Text?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CTAElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CTAElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CTAElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CTAElementFacet = {
  __typename?: 'CTAElementFacet';
  Link?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CTAElementOrderByInput = {
  Link?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CTAElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete?: Maybe<CTAElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CTAElementFacet>;
  items?: Maybe<Array<Maybe<CTAElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CTAElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CTAElementWhereInput = {
  Link?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
};

export type CardBlock = IComponent & IContent & IData & {
  __typename?: 'CardBlock';
  CardButton?: Maybe<ButtonBlockProperty>;
  CardColor?: Maybe<Scalars['String']['output']>;
  CardDescription?: Maybe<RichText>;
  CardHeading?: Maybe<Scalars['String']['output']>;
  CardIcon?: Maybe<ContentReference>;
  CardImage?: Maybe<ContentReference>;
  CardImageLayout?: Maybe<Scalars['String']['output']>;
  CardSubheading?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CardBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CardBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  CardButton?: Maybe<ButtonBlockPropertyAutocomplete>;
  CardDescription?: Maybe<RichTextAutocomplete>;
  CardIcon?: Maybe<ContentReferenceAutocomplete>;
  CardImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CardBlockFacet = {
  __typename?: 'CardBlockFacet';
  CardButton?: Maybe<ButtonBlockPropertyFacet>;
  CardDescription?: Maybe<RichTextFacet>;
  CardIcon?: Maybe<ContentReferenceFacet>;
  CardImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CardBlockOrderByInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  CardDescription?: InputMaybe<RichTextOrderByInput>;
  CardIcon?: InputMaybe<ContentReferenceOrderByInput>;
  CardImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CardBlockOutput = {
  __typename?: 'CardBlockOutput';
  autocomplete?: Maybe<CardBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CardBlockFacet>;
  items?: Maybe<Array<Maybe<CardBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CardBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardBlockWhereInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyWhereInput>;
  CardDescription?: InputMaybe<RichTextWhereInput>;
  CardIcon?: InputMaybe<ContentReferenceWhereInput>;
  CardImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

export type Component = IComponent & IContent & IData & {
  __typename?: 'Component';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Component_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Component_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ComponentAutocomplete = {
  __typename?: 'ComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ComponentFacet = {
  __typename?: 'ComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ComponentOutput = {
  __typename?: 'ComponentOutput';
  autocomplete?: Maybe<ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ComponentFacet>;
  items?: Maybe<Array<Maybe<IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ComponentWhereInput>>>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionElementNode = ICompositionElementNode & ICompositionNode & {
  __typename?: 'CompositionElementNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  element?: Maybe<IElement>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionMetadata = ICompositionMetadata & IContentMetadata & IInstanceMetadata & {
  __typename?: 'CompositionMetadata';
  composition?: Maybe<CompositionStructureNode>;
  container?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type CompositionMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Content = IContent & IData & {
  __typename?: 'Content';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Content_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Content_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentAutocomplete = {
  __typename?: 'ContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContentFacet = {
  __typename?: 'ContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ContentOutput = {
  __typename?: 'ContentOutput';
  autocomplete?: Maybe<ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentFacet>;
  items?: Maybe<Array<Maybe<IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompletebaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletedefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletehierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteinternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetbaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetdefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacethierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetinternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
};

export type Data = IData & {
  __typename?: 'Data';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  DAY = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  HOUR = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  MINUTE = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: Scalars['Boolean']['input'];
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

export type DefaultImage = IContent & IData & IImage & IMedia & {
  __typename?: 'DefaultImage';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DefaultImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DefaultImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DefaultImageAutocomplete = {
  __typename?: 'DefaultImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultImageFacet = {
  __typename?: 'DefaultImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DefaultImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DefaultImageOutput = {
  __typename?: 'DefaultImageOutput';
  autocomplete?: Maybe<DefaultImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DefaultImageFacet>;
  items?: Maybe<Array<Maybe<DefaultImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DefaultImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
};

export type DefaultVideo = IContent & IData & IMedia & IVideo & {
  __typename?: 'DefaultVideo';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DefaultVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DefaultVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DefaultVideoAutocomplete = {
  __typename?: 'DefaultVideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultVideoFacet = {
  __typename?: 'DefaultVideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DefaultVideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DefaultVideoOutput = {
  __typename?: 'DefaultVideoOutput';
  autocomplete?: Maybe<DefaultVideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DefaultVideoFacet>;
  items?: Maybe<Array<Maybe<DefaultVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DefaultVideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultVideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
};

export type Dictionary = IComponent & IContent & IData & {
  __typename?: 'Dictionary';
  DictionaryItems?: Maybe<Array<Maybe<DictionaryItemProperty>>>;
  DictionaryKey?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DictionaryDictionaryKeyArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Dictionary_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Dictionary_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryAutocomplete = {
  __typename?: 'DictionaryAutocomplete';
  DictionaryItems?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};


export type DictionaryAutocompleteDictionaryItemsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DictionaryFacet = {
  __typename?: 'DictionaryFacet';
  DictionaryItems?: Maybe<Array<Maybe<StringFacet>>>;
  DictionaryKey?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type DictionaryFacetDictionaryItemsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DictionaryFacetDictionaryKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DictionaryItem = IComponent & IContent & IData & {
  __typename?: 'DictionaryItem';
  DictionaryItemKey?: Maybe<Scalars['String']['output']>;
  DictionaryItemValue?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DictionaryItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DictionaryItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryItemAutocomplete = {
  __typename?: 'DictionaryItemAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryItemFacet = {
  __typename?: 'DictionaryItemFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DictionaryItemOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DictionaryItemOutput = {
  __typename?: 'DictionaryItemOutput';
  autocomplete?: Maybe<DictionaryItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DictionaryItemFacet>;
  items?: Maybe<Array<Maybe<DictionaryItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DictionaryItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryItemProperty = {
  __typename?: 'DictionaryItemProperty';
  DictionaryItemKey?: Maybe<Scalars['String']['output']>;
  DictionaryItemValue?: Maybe<Scalars['String']['output']>;
};

export type DictionaryItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
};

export type DictionaryOrderByInput = {
  DictionaryItems?: InputMaybe<OrderBy>;
  DictionaryKey?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DictionaryOutput = {
  __typename?: 'DictionaryOutput';
  autocomplete?: Maybe<DictionaryAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DictionaryFacet>;
  items?: Maybe<Array<Maybe<Dictionary>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DictionaryOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryWhereInput = {
  DictionaryItems?: InputMaybe<StringFilterInput>;
  DictionaryKey?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
};

export type Element = IComponent & IContent & IData & IElement & {
  __typename?: 'Element';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Element_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Element_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ElementAutocomplete = {
  __typename?: 'ElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ElementFacet = {
  __typename?: 'ElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ElementOutput = {
  __typename?: 'ElementOutput';
  autocomplete?: Maybe<ElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ElementFacet>;
  items?: Maybe<Array<Maybe<IElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ElementWhereInput>>>;
};

export type Experience = IContent & IData & IExperience & IPage & {
  __typename?: 'Experience';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Experience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Experience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ExperienceAutocomplete = {
  __typename?: 'ExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ExperienceFacet = {
  __typename?: 'ExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ExperienceOutput = {
  __typename?: 'ExperienceOutput';
  autocomplete?: Maybe<ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ExperienceFacet>;
  items?: Maybe<Array<Maybe<IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ExperienceWhereInput>>>;
};

export type Folder = IContent & IData & IFolder & {
  __typename?: 'Folder';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Folder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Folder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FolderAutocomplete = {
  __typename?: 'FolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type FolderFacet = {
  __typename?: 'FolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type FolderOutput = {
  __typename?: 'FolderOutput';
  autocomplete?: Maybe<FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FolderFacet>;
  items?: Maybe<Array<Maybe<IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
};

export type HeaderBlock = IComponent & IContent & IData & {
  __typename?: 'HeaderBlock';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  site_logo?: Maybe<ContentReference>;
  site_main_navigation?: Maybe<Array<Maybe<IContent>>>;
  site_utility_navigation?: Maybe<Array<Maybe<IContent>>>;
};


export type HeaderBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeaderBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeaderBlockAutocomplete = {
  __typename?: 'HeaderBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  site_logo?: Maybe<ContentReferenceAutocomplete>;
  site_main_navigation?: Maybe<IContentAutocomplete>;
  site_utility_navigation?: Maybe<IContentAutocomplete>;
};

export type HeaderBlockFacet = {
  __typename?: 'HeaderBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  site_logo?: Maybe<ContentReferenceFacet>;
  site_main_navigation?: Maybe<IContentFacet>;
  site_utility_navigation?: Maybe<IContentFacet>;
};

export type HeaderBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  site_logo?: InputMaybe<ContentReferenceOrderByInput>;
  site_main_navigation?: InputMaybe<IContentOrderByInput>;
  site_utility_navigation?: InputMaybe<IContentOrderByInput>;
};

export type HeaderBlockOutput = {
  __typename?: 'HeaderBlockOutput';
  autocomplete?: Maybe<HeaderBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeaderBlockFacet>;
  items?: Maybe<Array<Maybe<HeaderBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeaderBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  site_logo?: InputMaybe<ContentReferenceWhereInput>;
  site_main_navigation?: InputMaybe<IContentWhereInput>;
  site_utility_navigation?: InputMaybe<IContentWhereInput>;
};

export type HeadingElement = IComponent & IContent & IData & IElement & {
  __typename?: 'HeadingElement';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  headingText?: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeadingElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeadingElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete?: Maybe<HeadingElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeadingElementFacet>;
  items?: Maybe<Array<Maybe<HeadingElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type IComponent = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ICompositionElementNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  element?: Maybe<IElement>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionMetadata = {
  composition?: Maybe<CompositionStructureNode>;
  container?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ICompositionMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionStructureNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContent = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IContent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IContent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IContentAutocomplete = {
  __typename?: 'IContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type IContentFacet = {
  __typename?: 'IContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type IContentMetadata = {
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletelocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletestatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletetypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteversionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetlastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetlocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetpublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetstatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacettypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetversionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  displayName?: InputMaybe<SearchableStringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<IContentWhereInput>>>;
};

export type IData = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IElement = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IExperience = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IFolder = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IImage = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  container?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMedia = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IMediaMetadata = {
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IPage = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ISection = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ISection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ISection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IVideo = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Image = IContent & IData & IImage & IMedia & {
  __typename?: 'Image';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageAutocomplete = {
  __typename?: 'ImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageElement = IComponent & IContent & IData & IElement & {
  __typename?: 'ImageElement';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  imageLink?: Maybe<ContentReference>;
};


export type ImageElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  imageLink?: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  imageLink?: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  imageLink?: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete?: Maybe<ImageElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageElementFacet>;
  items?: Maybe<Array<Maybe<ImageElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink?: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageFacet = {
  __typename?: 'ImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMedia = IContent & IData & IImage & IMedia & {
  __typename?: 'ImageMedia';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ImageOutput = {
  __typename?: 'ImageOutput';
  autocomplete?: Maybe<ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageFacet>;
  items?: Maybe<Array<Maybe<IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  container?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LandingPage = IContent & IData & IPage & {
  __typename?: 'LandingPage';
  LandingPageSeoSettings?: Maybe<PageSeoSettingsProperty>;
  MainContent?: Maybe<Array<Maybe<IContent>>>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type LandingPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  LandingPageSeoSettings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MainContent?: Maybe<IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};


export type LandingPageAutocompleteLandingPageSeoSettingsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  LandingPageSeoSettings?: Maybe<Array<Maybe<StringFacet>>>;
  MainContent?: Maybe<IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type LandingPageFacetLandingPageSeoSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingPageOrderByInput = {
  LandingPageSeoSettings?: InputMaybe<OrderBy>;
  MainContent?: InputMaybe<IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<LandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LandingPageFacet>;
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  LandingPageSeoSettings?: InputMaybe<StringFilterInput>;
  MainContent?: InputMaybe<IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type Link = {
  __typename?: 'Link';
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};


export type LinktextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompletetargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompletetitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target?: Maybe<Array<Maybe<StringFacet>>>;
  text?: Maybe<Array<Maybe<StringFacet>>>;
  title?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type LinkFacettargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  ASSETS = 'ASSETS',
  DEFAULT = 'DEFAULT',
  ITEMS = 'ITEMS',
  PATH = 'PATH'
}

export type LinkWhereInput = {
  target?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<SearchableStringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL',
  en = 'en'
}

export type Media = IContent & IData & IMedia & {
  __typename?: 'Media';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Media_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Media_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MediaAutocomplete = {
  __typename?: 'MediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MediaFacet = {
  __typename?: 'MediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type MediaOutput = {
  __typename?: 'MediaOutput';
  autocomplete?: Maybe<MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MediaFacet>;
  items?: Maybe<Array<Maybe<IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MediaWhereInput>>>;
};

export type MegaMenuGroupBlock = IComponent & IContent & IData & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea?: Maybe<Array<Maybe<IContent>>>;
  MegaMenuUrl?: Maybe<ContentUrl>;
  MenuMenuHeading?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type MegaMenuGroupBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea?: Maybe<IContentAutocomplete>;
  MegaMenuUrl?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea?: Maybe<IContentFacet>;
  MegaMenuUrl?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea?: InputMaybe<IContentOrderByInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete?: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MegaMenuGroupBlockFacet>;
  items?: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea?: InputMaybe<IContentWhereInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type NavigationMenuBlock = IComponent & IContent & IData & {
  __typename?: 'NavigationMenuBlock';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NavigationMenuBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NavigationMenuBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NavigationMenuBlockAutocomplete = {
  __typename?: 'NavigationMenuBlockAutocomplete';
  NavigationLinks?: Maybe<LinkAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NavigationMenuBlockFacet = {
  __typename?: 'NavigationMenuBlockFacet';
  NavigationLinks?: Maybe<LinkFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NavigationMenuBlockOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type NavigationMenuBlockOutput = {
  __typename?: 'NavigationMenuBlockOutput';
  autocomplete?: Maybe<NavigationMenuBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NavigationMenuBlockFacet>;
  items?: Maybe<Array<Maybe<NavigationMenuBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NavigationMenuBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationMenuBlockProperty = {
  __typename?: 'NavigationMenuBlockProperty';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
};

export type NavigationMenuBlockPropertyAutocomplete = {
  __typename?: 'NavigationMenuBlockPropertyAutocomplete';
  NavigationLinks?: Maybe<LinkAutocomplete>;
};

export type NavigationMenuBlockPropertyFacet = {
  __typename?: 'NavigationMenuBlockPropertyFacet';
  NavigationLinks?: Maybe<LinkFacet>;
};

export type NavigationMenuBlockPropertyOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
};

export type NavigationMenuBlockPropertyWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
};

export type NavigationMenuBlockWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
};

export type NewsArticlePage = IContent & IData & IPage & {
  __typename?: 'NewsArticlePage';
  ArticleTitle?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NewsArticlePage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NewsArticlePage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NewsArticlePageAutocomplete = {
  __typename?: 'NewsArticlePageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NewsArticlePageFacet = {
  __typename?: 'NewsArticlePageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NewsArticlePageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type NewsArticlePageOutput = {
  __typename?: 'NewsArticlePageOutput';
  autocomplete?: Maybe<NewsArticlePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NewsArticlePageFacet>;
  items?: Maybe<Array<Maybe<NewsArticlePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NewsArticlePageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsArticlePageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<NewsArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NewsArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NewsArticlePageWhereInput>>>;
};

export type OfficeLocation = IComponent & IContent & IData & {
  __typename?: 'OfficeLocation';
  OfficeAddressCity?: Maybe<Scalars['String']['output']>;
  OfficeAddressCountry?: Maybe<Scalars['String']['output']>;
  OfficeAddressPostalCode?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet1?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet2?: Maybe<Scalars['String']['output']>;
  OfficeEmail?: Maybe<Scalars['String']['output']>;
  OfficePhone?: Maybe<Scalars['String']['output']>;
  OfficeTitle?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type OfficeLocation_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OfficeLocation_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OfficeLocationAutocomplete = {
  __typename?: 'OfficeLocationAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OfficeLocationFacet = {
  __typename?: 'OfficeLocationFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OfficeLocationOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type OfficeLocationOutput = {
  __typename?: 'OfficeLocationOutput';
  autocomplete?: Maybe<OfficeLocationAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OfficeLocationFacet>;
  items?: Maybe<Array<Maybe<OfficeLocation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OfficeLocationOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OfficeLocationWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum OrderByFacetType {
  COUNT = 'COUNT',
  VALUE = 'VALUE'
}

export type Page = IContent & IData & IPage & {
  __typename?: 'Page';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Page_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Page_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageAutocomplete = {
  __typename?: 'PageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageFacet = {
  __typename?: 'PageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type PageOutput = {
  __typename?: 'PageOutput';
  autocomplete?: Maybe<PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageFacet>;
  items?: Maybe<Array<Maybe<IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettings = IComponent & IContent & IData & {
  __typename?: 'PageSeoSettings';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
};


export type PageSeoSettings_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PageSeoSettingsOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete?: Maybe<PageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageSeoSettingsFacet>;
  items?: Maybe<Array<Maybe<PageSeoSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  metaTitle?: Maybe<Scalars['String']['output']>;
};

export type PageSeoSettingsWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageWhereInput>>>;
};

export type ParagraphElement = IComponent & IContent & IData & IElement & {
  __typename?: 'ParagraphElement';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<RichText>;
};


export type ParagraphElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  text?: Maybe<RichTextAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  text?: Maybe<RichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  text?: InputMaybe<RichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete?: Maybe<ParagraphElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ParagraphElementFacet>;
  items?: Maybe<Array<Maybe<ParagraphElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text?: InputMaybe<RichTextWhereInput>;
};

export type Query = {
  __typename?: 'Query';
  BannerBlock?: Maybe<BannerBlockOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  Component?: Maybe<ComponentOutput>;
  Content?: Maybe<ContentOutput>;
  Data?: Maybe<DataOutput>;
  DefaultImage?: Maybe<DefaultImageOutput>;
  DefaultVideo?: Maybe<DefaultVideoOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  Element?: Maybe<ElementOutput>;
  Experience?: Maybe<ExperienceOutput>;
  Folder?: Maybe<FolderOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  Image?: Maybe<ImageOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  Media?: Maybe<MediaOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  NewsArticlePage?: Maybe<NewsArticlePageOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  Page?: Maybe<PageOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  Section?: Maybe<SectionOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  Video?: Maybe<VideoOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  genericMedia?: Maybe<genericMediaOutput>;
};


export type QueryBannerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BannerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BannerBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ComponentWhereInput>;
};


export type QueryContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryDefaultImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultImageWhereInput>;
};


export type QueryDefaultVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultVideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultVideoWhereInput>;
};


export type QueryDictionaryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryWhereInput>;
};


export type QueryDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ElementWhereInput>;
};


export type QueryExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FolderWhereInput>;
};


export type QueryHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MediaWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryNewsArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewsArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NewsArticlePageWhereInput>;
};


export type QueryOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QuerySectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SectionWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<WebsiteFooterWhereInput>;
};


export type QuerygenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<genericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<genericMediaWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  BannerBlock?: Maybe<BannerBlockOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  Component?: Maybe<ComponentOutput>;
  Content?: Maybe<ContentOutput>;
  Data?: Maybe<DataOutput>;
  DefaultImage?: Maybe<DefaultImageOutput>;
  DefaultVideo?: Maybe<DefaultVideoOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  Element?: Maybe<ElementOutput>;
  Experience?: Maybe<ExperienceOutput>;
  Folder?: Maybe<FolderOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  Image?: Maybe<ImageOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  Media?: Maybe<MediaOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  NewsArticlePage?: Maybe<NewsArticlePageOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  Page?: Maybe<PageOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  Section?: Maybe<SectionOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  Video?: Maybe<VideoOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  genericMedia?: Maybe<genericMediaOutput>;
};


export type QueryRefBannerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BannerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BannerBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryRefCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryRefComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ComponentWhereInput>;
};


export type QueryRefContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefDefaultImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultImageWhereInput>;
};


export type QueryRefDefaultVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultVideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultVideoWhereInput>;
};


export type QueryRefDictionaryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryWhereInput>;
};


export type QueryRefDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryRefElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ElementWhereInput>;
};


export type QueryRefExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryRefFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FolderWhereInput>;
};


export type QueryRefHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryRefHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryRefImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryRefImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MediaWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryRefNewsArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewsArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NewsArticlePageWhereInput>;
};


export type QueryRefOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryRefPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRefWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<WebsiteFooterWhereInput>;
};


export type QueryRefgenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<genericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<genericMediaWhereInput>;
};

export enum Ranking {
  BOOST_ONLY = 'BOOST_ONLY',
  DOC = 'DOC',
  RELEVANCE = 'RELEVANCE',
  SEMANTIC = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompletehtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacethtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: Scalars['Boolean']['input'];
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type Section = IComponent & IContent & IData & ISection & {
  __typename?: 'Section';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Section_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Section_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SectionAutocomplete = {
  __typename?: 'SectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SectionFacet = {
  __typename?: 'SectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SectionOutput = {
  __typename?: 'SectionOutput';
  autocomplete?: Maybe<SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SectionFacet>;
  items?: Maybe<Array<Maybe<ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: Scalars['Boolean']['input'];
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  ONE = 'ONE',
  /** synonym slot 2 */
  TWO = 'TWO'
}

export type SysContentFolder = IContent & IData & IFolder & {
  __typename?: 'SysContentFolder';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialElement = IComponent & IContent & IData & IElement & {
  __typename?: 'TestimonialElement';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  customerImage?: Maybe<ContentReference>;
  customerLocation?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  referenceText?: Maybe<RichText>;
  referenceTitle?: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  customerImage?: Maybe<ContentReferenceAutocomplete>;
  referenceText?: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  customerImage?: Maybe<ContentReferenceFacet>;
  referenceText?: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  customerImage?: InputMaybe<ContentReferenceOrderByInput>;
  referenceText?: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete?: Maybe<TestimonialElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialElementFacet>;
  items?: Maybe<Array<Maybe<TestimonialElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage?: InputMaybe<ContentReferenceWhereInput>;
  referenceText?: InputMaybe<RichTextWhereInput>;
};

export type Video = IContent & IData & IMedia & IVideo & {
  __typename?: 'Video';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoAutocomplete = {
  __typename?: 'VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoFacet = {
  __typename?: 'VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMedia = IContent & IData & IMedia & IVideo & {
  __typename?: 'VideoMedia';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type VideoOutput = {
  __typename?: 'VideoOutput';
  autocomplete?: Maybe<VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoFacet>;
  items?: Maybe<Array<Maybe<IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
};

export type WebsiteFooter = IComponent & IContent & IData & {
  __typename?: 'WebsiteFooter';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockProperty>;
  FooterLegalLinks?: Maybe<Array<Maybe<Link>>>;
  FooterLogo?: Maybe<ContentReference>;
  FooterLogoAltText?: Maybe<Scalars['String']['output']>;
  FooterMainOfficeLocation?: Maybe<Array<Maybe<IContent>>>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockProperty>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockProperty>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type WebsiteFooter_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type WebsiteFooter_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type WebsiteFooterAutocomplete = {
  __typename?: 'WebsiteFooterAutocomplete';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  FooterLegalLinks?: Maybe<LinkAutocomplete>;
  FooterLogo?: Maybe<ContentReferenceAutocomplete>;
  FooterMainOfficeLocation?: Maybe<IContentAutocomplete>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type WebsiteFooterFacet = {
  __typename?: 'WebsiteFooterFacet';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterLegalLinks?: Maybe<LinkFacet>;
  FooterLogo?: Maybe<ContentReferenceFacet>;
  FooterMainOfficeLocation?: Maybe<IContentFacet>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type WebsiteFooterOrderByInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterLegalLinks?: InputMaybe<LinkOrderByInput>;
  FooterLogo?: InputMaybe<ContentReferenceOrderByInput>;
  FooterMainOfficeLocation?: InputMaybe<IContentOrderByInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type WebsiteFooterOutput = {
  __typename?: 'WebsiteFooterOutput';
  autocomplete?: Maybe<WebsiteFooterAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<WebsiteFooterFacet>;
  items?: Maybe<Array<Maybe<WebsiteFooter>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type WebsiteFooterOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebsiteFooterWhereInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterLegalLinks?: InputMaybe<LinkWhereInput>;
  FooterLogo?: InputMaybe<ContentReferenceWhereInput>;
  FooterMainOfficeLocation?: InputMaybe<IContentWhereInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
};

export type genericMedia = IContent & IData & IMedia & {
  __typename?: 'genericMedia';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type genericMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type genericMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type genericMediaAutocomplete = {
  __typename?: 'genericMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type genericMediaFacet = {
  __typename?: 'genericMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type genericMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type genericMediaOutput = {
  __typename?: 'genericMediaOutput';
  autocomplete?: Maybe<genericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<genericMediaFacet>;
  items?: Maybe<Array<Maybe<genericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type genericMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type genericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<genericMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<genericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<genericMediaWhereInput>>>;
};

export enum system_Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL'
}

type PageData_BannerBlock_Fragment = (
  { __typename?: 'BannerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_BannerBlock_Fragment' };

type PageData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment;'BlankExperienceDataFragment': BlankExperienceDataFragment } }
) & { ' $fragmentName'?: 'PageData_BlankExperience_Fragment' };

type PageData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankSection_Fragment' };

type PageData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ButtonBlock_Fragment' };

type PageData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_CTAElement_Fragment' };

type PageData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CardBlock_Fragment' };

type PageData_Component_Fragment = (
  { __typename?: 'Component' }
  & { ' $fragmentRefs'?: { 'IContentData_Component_Fragment': IContentData_Component_Fragment } }
) & { ' $fragmentName'?: 'PageData_Component_Fragment' };

type PageData_Content_Fragment = (
  { __typename?: 'Content' }
  & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
) & { ' $fragmentName'?: 'PageData_Content_Fragment' };

type PageData_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'PageData_DefaultImage_Fragment' };

type PageData_DefaultVideo_Fragment = (
  { __typename?: 'DefaultVideo' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
) & { ' $fragmentName'?: 'PageData_DefaultVideo_Fragment' };

type PageData_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'PageData_Dictionary_Fragment' };

type PageData_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_DictionaryItem_Fragment' };

type PageData_Element_Fragment = (
  { __typename?: 'Element' }
  & { ' $fragmentRefs'?: { 'IContentData_Element_Fragment': IContentData_Element_Fragment } }
) & { ' $fragmentName'?: 'PageData_Element_Fragment' };

type PageData_Experience_Fragment = (
  { __typename?: 'Experience' }
  & { ' $fragmentRefs'?: { 'IContentData_Experience_Fragment': IContentData_Experience_Fragment } }
) & { ' $fragmentName'?: 'PageData_Experience_Fragment' };

type PageData_Folder_Fragment = (
  { __typename?: 'Folder' }
  & { ' $fragmentRefs'?: { 'IContentData_Folder_Fragment': IContentData_Folder_Fragment } }
) & { ' $fragmentName'?: 'PageData_Folder_Fragment' };

type PageData_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeaderBlock_Fragment' };

type PageData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeadingElement_Fragment' };

type PageData_Image_Fragment = (
  { __typename?: 'Image' }
  & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
) & { ' $fragmentName'?: 'PageData_Image_Fragment' };

type PageData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageElement_Fragment' };

type PageData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageMedia_Fragment' };

type PageData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_LandingPage_Fragment' };

type PageData_Media_Fragment = (
  { __typename?: 'Media' }
  & { ' $fragmentRefs'?: { 'IContentData_Media_Fragment': IContentData_Media_Fragment } }
) & { ' $fragmentName'?: 'PageData_Media_Fragment' };

type PageData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MegaMenuGroupBlock_Fragment' };

type PageData_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_NavigationMenuBlock_Fragment' };

type PageData_NewsArticlePage_Fragment = (
  { __typename?: 'NewsArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_NewsArticlePage_Fragment': IContentData_NewsArticlePage_Fragment } }
) & { ' $fragmentName'?: 'PageData_NewsArticlePage_Fragment' };

type PageData_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'PageData_OfficeLocation_Fragment' };

type PageData_Page_Fragment = (
  { __typename?: 'Page' }
  & { ' $fragmentRefs'?: { 'IContentData_Page_Fragment': IContentData_Page_Fragment } }
) & { ' $fragmentName'?: 'PageData_Page_Fragment' };

type PageData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'PageData_PageSeoSettings_Fragment' };

type PageData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ParagraphElement_Fragment' };

type PageData_Section_Fragment = (
  { __typename?: 'Section' }
  & { ' $fragmentRefs'?: { 'IContentData_Section_Fragment': IContentData_Section_Fragment } }
) & { ' $fragmentName'?: 'PageData_Section_Fragment' };

type PageData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'PageData_SysContentFolder_Fragment' };

type PageData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialElement_Fragment' };

type PageData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'PageData_Video_Fragment' };

type PageData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoMedia_Fragment' };

type PageData_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'PageData_WebsiteFooter_Fragment' };

type PageData_genericMedia_Fragment = (
  { __typename?: 'genericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_genericMedia_Fragment': IContentData_genericMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_genericMedia_Fragment' };

export type PageDataFragment = PageData_BannerBlock_Fragment | PageData_BlankExperience_Fragment | PageData_BlankSection_Fragment | PageData_ButtonBlock_Fragment | PageData_CTAElement_Fragment | PageData_CardBlock_Fragment | PageData_Component_Fragment | PageData_Content_Fragment | PageData_DefaultImage_Fragment | PageData_DefaultVideo_Fragment | PageData_Dictionary_Fragment | PageData_DictionaryItem_Fragment | PageData_Element_Fragment | PageData_Experience_Fragment | PageData_Folder_Fragment | PageData_HeaderBlock_Fragment | PageData_HeadingElement_Fragment | PageData_Image_Fragment | PageData_ImageElement_Fragment | PageData_ImageMedia_Fragment | PageData_LandingPage_Fragment | PageData_Media_Fragment | PageData_MegaMenuGroupBlock_Fragment | PageData_NavigationMenuBlock_Fragment | PageData_NewsArticlePage_Fragment | PageData_OfficeLocation_Fragment | PageData_Page_Fragment | PageData_PageSeoSettings_Fragment | PageData_ParagraphElement_Fragment | PageData_Section_Fragment | PageData_SysContentFolder_Fragment | PageData_TestimonialElement_Fragment | PageData_Video_Fragment | PageData_VideoMedia_Fragment | PageData_WebsiteFooter_Fragment | PageData_genericMedia_Fragment;

export type ReferenceDataFragment = { __typename?: 'ContentReference', key?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ReferenceDataFragment' };

type IContentListItem_BannerBlock_Fragment = (
  { __typename?: 'BannerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BannerBlock_Fragment' };

type IContentListItem_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankExperience_Fragment' };

type IContentListItem_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankSection_Fragment' };

type IContentListItem_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ButtonBlock_Fragment' };

type IContentListItem_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CTAElement_Fragment' };

type IContentListItem_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CardBlock_Fragment' };

type IContentListItem_Component_Fragment = (
  { __typename?: 'Component' }
  & { ' $fragmentRefs'?: { 'IContentData_Component_Fragment': IContentData_Component_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Component_Fragment' };

type IContentListItem_Content_Fragment = (
  { __typename?: 'Content' }
  & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Content_Fragment' };

type IContentListItem_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DefaultImage_Fragment' };

type IContentListItem_DefaultVideo_Fragment = (
  { __typename?: 'DefaultVideo' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DefaultVideo_Fragment' };

type IContentListItem_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Dictionary_Fragment' };

type IContentListItem_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DictionaryItem_Fragment' };

type IContentListItem_Element_Fragment = (
  { __typename?: 'Element' }
  & { ' $fragmentRefs'?: { 'IContentData_Element_Fragment': IContentData_Element_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Element_Fragment' };

type IContentListItem_Experience_Fragment = (
  { __typename?: 'Experience' }
  & { ' $fragmentRefs'?: { 'IContentData_Experience_Fragment': IContentData_Experience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Experience_Fragment' };

type IContentListItem_Folder_Fragment = (
  { __typename?: 'Folder' }
  & { ' $fragmentRefs'?: { 'IContentData_Folder_Fragment': IContentData_Folder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Folder_Fragment' };

type IContentListItem_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeaderBlock_Fragment' };

type IContentListItem_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeadingElement_Fragment' };

type IContentListItem_Image_Fragment = (
  { __typename?: 'Image' }
  & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Image_Fragment' };

type IContentListItem_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageElement_Fragment' };

type IContentListItem_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageMedia_Fragment' };

type IContentListItem_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LandingPage_Fragment' };

type IContentListItem_Media_Fragment = (
  { __typename?: 'Media' }
  & { ' $fragmentRefs'?: { 'IContentData_Media_Fragment': IContentData_Media_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Media_Fragment' };

type IContentListItem_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MegaMenuGroupBlock_Fragment' };

type IContentListItem_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_NavigationMenuBlock_Fragment' };

type IContentListItem_NewsArticlePage_Fragment = (
  { __typename?: 'NewsArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_NewsArticlePage_Fragment': IContentData_NewsArticlePage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_NewsArticlePage_Fragment' };

type IContentListItem_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_OfficeLocation_Fragment' };

type IContentListItem_Page_Fragment = (
  { __typename?: 'Page' }
  & { ' $fragmentRefs'?: { 'IContentData_Page_Fragment': IContentData_Page_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Page_Fragment' };

type IContentListItem_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PageSeoSettings_Fragment' };

type IContentListItem_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ParagraphElement_Fragment' };

type IContentListItem_Section_Fragment = (
  { __typename?: 'Section' }
  & { ' $fragmentRefs'?: { 'IContentData_Section_Fragment': IContentData_Section_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Section_Fragment' };

type IContentListItem_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SysContentFolder_Fragment' };

type IContentListItem_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialElement_Fragment' };

type IContentListItem_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Video_Fragment' };

type IContentListItem_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoMedia_Fragment' };

type IContentListItem_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_WebsiteFooter_Fragment' };

type IContentListItem_genericMedia_Fragment = (
  { __typename?: 'genericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_genericMedia_Fragment': IContentData_genericMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_genericMedia_Fragment' };

export type IContentListItemFragment = IContentListItem_BannerBlock_Fragment | IContentListItem_BlankExperience_Fragment | IContentListItem_BlankSection_Fragment | IContentListItem_ButtonBlock_Fragment | IContentListItem_CTAElement_Fragment | IContentListItem_CardBlock_Fragment | IContentListItem_Component_Fragment | IContentListItem_Content_Fragment | IContentListItem_DefaultImage_Fragment | IContentListItem_DefaultVideo_Fragment | IContentListItem_Dictionary_Fragment | IContentListItem_DictionaryItem_Fragment | IContentListItem_Element_Fragment | IContentListItem_Experience_Fragment | IContentListItem_Folder_Fragment | IContentListItem_HeaderBlock_Fragment | IContentListItem_HeadingElement_Fragment | IContentListItem_Image_Fragment | IContentListItem_ImageElement_Fragment | IContentListItem_ImageMedia_Fragment | IContentListItem_LandingPage_Fragment | IContentListItem_Media_Fragment | IContentListItem_MegaMenuGroupBlock_Fragment | IContentListItem_NavigationMenuBlock_Fragment | IContentListItem_NewsArticlePage_Fragment | IContentListItem_OfficeLocation_Fragment | IContentListItem_Page_Fragment | IContentListItem_PageSeoSettings_Fragment | IContentListItem_ParagraphElement_Fragment | IContentListItem_Section_Fragment | IContentListItem_SysContentFolder_Fragment | IContentListItem_TestimonialElement_Fragment | IContentListItem_Video_Fragment | IContentListItem_VideoMedia_Fragment | IContentListItem_WebsiteFooter_Fragment | IContentListItem_genericMedia_Fragment;

export type getContentByIdQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByIdQuery = { __typename?: 'Query', content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'BannerBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_BannerBlock_Fragment': BlockData_BannerBlock_Fragment;'PageData_BannerBlock_Fragment': PageData_BannerBlock_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment;'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment;'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'Component' }
      & { ' $fragmentRefs'?: { 'BlockData_Component_Fragment': BlockData_Component_Fragment;'PageData_Component_Fragment': PageData_Component_Fragment } }
    ) | (
      { __typename?: 'Content' }
      & { ' $fragmentRefs'?: { 'BlockData_Content_Fragment': BlockData_Content_Fragment;'PageData_Content_Fragment': PageData_Content_Fragment } }
    ) | (
      { __typename?: 'DefaultImage' }
      & { ' $fragmentRefs'?: { 'BlockData_DefaultImage_Fragment': BlockData_DefaultImage_Fragment;'PageData_DefaultImage_Fragment': PageData_DefaultImage_Fragment } }
    ) | (
      { __typename?: 'DefaultVideo' }
      & { ' $fragmentRefs'?: { 'BlockData_DefaultVideo_Fragment': BlockData_DefaultVideo_Fragment;'PageData_DefaultVideo_Fragment': PageData_DefaultVideo_Fragment } }
    ) | (
      { __typename?: 'Dictionary' }
      & { ' $fragmentRefs'?: { 'BlockData_Dictionary_Fragment': BlockData_Dictionary_Fragment;'PageData_Dictionary_Fragment': PageData_Dictionary_Fragment } }
    ) | (
      { __typename?: 'DictionaryItem' }
      & { ' $fragmentRefs'?: { 'BlockData_DictionaryItem_Fragment': BlockData_DictionaryItem_Fragment;'PageData_DictionaryItem_Fragment': PageData_DictionaryItem_Fragment } }
    ) | (
      { __typename?: 'Element' }
      & { ' $fragmentRefs'?: { 'BlockData_Element_Fragment': BlockData_Element_Fragment;'PageData_Element_Fragment': PageData_Element_Fragment } }
    ) | (
      { __typename?: 'Experience' }
      & { ' $fragmentRefs'?: { 'BlockData_Experience_Fragment': BlockData_Experience_Fragment;'PageData_Experience_Fragment': PageData_Experience_Fragment } }
    ) | (
      { __typename?: 'Folder' }
      & { ' $fragmentRefs'?: { 'BlockData_Folder_Fragment': BlockData_Folder_Fragment;'PageData_Folder_Fragment': PageData_Folder_Fragment } }
    ) | (
      { __typename?: 'HeaderBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeaderBlock_Fragment': BlockData_HeaderBlock_Fragment;'PageData_HeaderBlock_Fragment': PageData_HeaderBlock_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment;'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'Image' }
      & { ' $fragmentRefs'?: { 'BlockData_Image_Fragment': BlockData_Image_Fragment;'PageData_Image_Fragment': PageData_Image_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment;'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment;'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment;'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'Media' }
      & { ' $fragmentRefs'?: { 'BlockData_Media_Fragment': BlockData_Media_Fragment;'PageData_Media_Fragment': PageData_Media_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment;'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'NavigationMenuBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_NavigationMenuBlock_Fragment': BlockData_NavigationMenuBlock_Fragment;'PageData_NavigationMenuBlock_Fragment': PageData_NavigationMenuBlock_Fragment } }
    ) | (
      { __typename?: 'NewsArticlePage' }
      & { ' $fragmentRefs'?: { 'BlockData_NewsArticlePage_Fragment': BlockData_NewsArticlePage_Fragment;'PageData_NewsArticlePage_Fragment': PageData_NewsArticlePage_Fragment } }
    ) | (
      { __typename?: 'OfficeLocation' }
      & { ' $fragmentRefs'?: { 'BlockData_OfficeLocation_Fragment': BlockData_OfficeLocation_Fragment;'PageData_OfficeLocation_Fragment': PageData_OfficeLocation_Fragment } }
    ) | (
      { __typename?: 'Page' }
      & { ' $fragmentRefs'?: { 'BlockData_Page_Fragment': BlockData_Page_Fragment;'PageData_Page_Fragment': PageData_Page_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment;'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment;'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'Section' }
      & { ' $fragmentRefs'?: { 'BlockData_Section_Fragment': BlockData_Section_Fragment;'PageData_Section_Fragment': PageData_Section_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment;'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment;'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment;'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment;'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: 'WebsiteFooter' }
      & { ' $fragmentRefs'?: { 'BlockData_WebsiteFooter_Fragment': BlockData_WebsiteFooter_Fragment;'PageData_WebsiteFooter_Fragment': PageData_WebsiteFooter_Fragment } }
    ) | (
      { __typename?: 'genericMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_genericMedia_Fragment': BlockData_genericMedia_Fragment;'PageData_genericMedia_Fragment': PageData_genericMedia_Fragment } }
    ) | null> | null } | null };

export type LinkItemDataFragment = { __typename?: 'Link', title?: string | null, text?: string | null, target?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'LinkItemDataFragment' };

export type getContentTypeQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentTypeQuery = { __typename?: 'Query', content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'BannerBlock', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ButtonBlock', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CTAElement', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CardBlock', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Component', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Content', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DefaultImage', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DefaultVideo', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Dictionary', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DictionaryItem', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Element', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Experience', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Folder', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeaderBlock', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeadingElement', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Image', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageElement', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LandingPage', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Media', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'NavigationMenuBlock', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'NewsArticlePage', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OfficeLocation', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Page', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PageSeoSettings', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Section', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Video', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'WebsiteFooter', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'genericMedia', _metadata?: { __typename?: 'CompositionMetadata', types?: Array<string | null> | null } | { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null> | null } | null };

export type getContentByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByPathQuery = { __typename?: 'Query', content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'BannerBlock' }
      & { ' $fragmentRefs'?: { 'PageData_BannerBlock_Fragment': PageData_BannerBlock_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'Component' }
      & { ' $fragmentRefs'?: { 'PageData_Component_Fragment': PageData_Component_Fragment } }
    ) | (
      { __typename?: 'Content' }
      & { ' $fragmentRefs'?: { 'PageData_Content_Fragment': PageData_Content_Fragment } }
    ) | (
      { __typename?: 'DefaultImage' }
      & { ' $fragmentRefs'?: { 'PageData_DefaultImage_Fragment': PageData_DefaultImage_Fragment } }
    ) | (
      { __typename?: 'DefaultVideo' }
      & { ' $fragmentRefs'?: { 'PageData_DefaultVideo_Fragment': PageData_DefaultVideo_Fragment } }
    ) | (
      { __typename?: 'Dictionary' }
      & { ' $fragmentRefs'?: { 'PageData_Dictionary_Fragment': PageData_Dictionary_Fragment } }
    ) | (
      { __typename?: 'DictionaryItem' }
      & { ' $fragmentRefs'?: { 'PageData_DictionaryItem_Fragment': PageData_DictionaryItem_Fragment } }
    ) | (
      { __typename?: 'Element' }
      & { ' $fragmentRefs'?: { 'PageData_Element_Fragment': PageData_Element_Fragment } }
    ) | (
      { __typename?: 'Experience' }
      & { ' $fragmentRefs'?: { 'PageData_Experience_Fragment': PageData_Experience_Fragment } }
    ) | (
      { __typename?: 'Folder' }
      & { ' $fragmentRefs'?: { 'PageData_Folder_Fragment': PageData_Folder_Fragment } }
    ) | (
      { __typename?: 'HeaderBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeaderBlock_Fragment': PageData_HeaderBlock_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'Image' }
      & { ' $fragmentRefs'?: { 'PageData_Image_Fragment': PageData_Image_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'Media' }
      & { ' $fragmentRefs'?: { 'PageData_Media_Fragment': PageData_Media_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'NavigationMenuBlock' }
      & { ' $fragmentRefs'?: { 'PageData_NavigationMenuBlock_Fragment': PageData_NavigationMenuBlock_Fragment } }
    ) | (
      { __typename?: 'NewsArticlePage' }
      & { ' $fragmentRefs'?: { 'PageData_NewsArticlePage_Fragment': PageData_NewsArticlePage_Fragment } }
    ) | (
      { __typename?: 'OfficeLocation' }
      & { ' $fragmentRefs'?: { 'PageData_OfficeLocation_Fragment': PageData_OfficeLocation_Fragment } }
    ) | (
      { __typename?: 'Page' }
      & { ' $fragmentRefs'?: { 'PageData_Page_Fragment': PageData_Page_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'Section' }
      & { ' $fragmentRefs'?: { 'PageData_Section_Fragment': PageData_Section_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: 'WebsiteFooter' }
      & { ' $fragmentRefs'?: { 'PageData_WebsiteFooter_Fragment': PageData_WebsiteFooter_Fragment } }
    ) | (
      { __typename?: 'genericMedia' }
      & { ' $fragmentRefs'?: { 'PageData_genericMedia_Fragment': PageData_genericMedia_Fragment } }
    ) | null> | null } | null };

type ExperienceData_BlankExperience_Fragment = { __typename?: 'BlankExperience', experience?: { __typename?: 'CompositionMetadata', composition?: (
      { __typename?: 'CompositionStructureNode' }
      & { ' $fragmentRefs'?: { 'CompositionData_CompositionStructureNode_Fragment': CompositionData_CompositionStructureNode_Fragment } }
    ) | null } | { __typename?: 'ContentMetadata' } | { __typename?: 'InstanceMetadata' } | { __typename?: 'ItemMetadata' } | { __typename?: 'MediaMetadata' } | null } & { ' $fragmentName'?: 'ExperienceData_BlankExperience_Fragment' };

type ExperienceData_Experience_Fragment = { __typename?: 'Experience', experience?: { __typename?: 'CompositionMetadata', composition?: (
      { __typename?: 'CompositionStructureNode' }
      & { ' $fragmentRefs'?: { 'CompositionData_CompositionStructureNode_Fragment': CompositionData_CompositionStructureNode_Fragment } }
    ) | null } | { __typename?: 'ContentMetadata' } | { __typename?: 'InstanceMetadata' } | { __typename?: 'ItemMetadata' } | { __typename?: 'MediaMetadata' } | null } & { ' $fragmentName'?: 'ExperienceData_Experience_Fragment' };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData_Experience_Fragment;

type ElementData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IElementData_CTAElement_Fragment': IElementData_CTAElement_Fragment;'CTAElementDataFragment': CTAElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_CTAElement_Fragment' };

type ElementData_Element_Fragment = (
  { __typename?: 'Element' }
  & { ' $fragmentRefs'?: { 'IElementData_Element_Fragment': IElementData_Element_Fragment } }
) & { ' $fragmentName'?: 'ElementData_Element_Fragment' };

type ElementData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IElementData_HeadingElement_Fragment': IElementData_HeadingElement_Fragment;'HeadingElementDataFragment': HeadingElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_HeadingElement_Fragment' };

type ElementData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ImageElement_Fragment': IElementData_ImageElement_Fragment;'ImageElementDataFragment': ImageElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_ImageElement_Fragment' };

type ElementData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ParagraphElement_Fragment': IElementData_ParagraphElement_Fragment;'ParagraphElementDataFragment': ParagraphElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_ParagraphElement_Fragment' };

type ElementData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialElement_Fragment': IElementData_TestimonialElement_Fragment;'TestimonialElementDataFragment': TestimonialElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialElement_Fragment' };

export type ElementDataFragment = ElementData_CTAElement_Fragment | ElementData_Element_Fragment | ElementData_HeadingElement_Fragment | ElementData_ImageElement_Fragment | ElementData_ParagraphElement_Fragment | ElementData_TestimonialElement_Fragment;

type CompositionData_CompositionElementNode_Fragment = { __typename?: 'CompositionElementNode', layoutType?: string | null, type?: string | null, key?: string | null, name?: string | null, template?: string | null, element?: (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'ElementData_CTAElement_Fragment': ElementData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'Element' }
    & { ' $fragmentRefs'?: { 'ElementData_Element_Fragment': ElementData_Element_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'ElementData_HeadingElement_Fragment': ElementData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ImageElement_Fragment': ElementData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ParagraphElement_Fragment': ElementData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'ElementData_TestimonialElement_Fragment': ElementData_TestimonialElement_Fragment } }
  ) | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionElementNode_Fragment' };

type CompositionData_CompositionNode_Fragment = { __typename?: 'CompositionNode', layoutType?: string | null, type?: string | null, key?: string | null, name?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionNode_Fragment' };

type CompositionData_CompositionStructureNode_Fragment = { __typename?: 'CompositionStructureNode', layoutType?: string | null, type?: string | null, key?: string | null, name?: string | null, template?: string | null, nodes?: Array<{ __typename?: 'CompositionElementNode', name?: string | null } | { __typename?: 'CompositionNode', name?: string | null } | { __typename?: 'CompositionStructureNode', name?: string | null } | null> | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionStructureNode_Fragment' };

export type CompositionDataFragment = CompositionData_CompositionElementNode_Fragment | CompositionData_CompositionNode_Fragment | CompositionData_CompositionStructureNode_Fragment;

type BlockData_BannerBlock_Fragment = (
  { __typename?: 'BannerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BannerBlock_Fragment' };

type BlockData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankExperience_Fragment' };

type BlockData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankSection_Fragment' };

type BlockData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_ButtonBlock_Fragment' };

type BlockData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CTAElement_Fragment' };

type BlockData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_CardBlock_Fragment' };

type BlockData_Component_Fragment = (
  { __typename?: 'Component' }
  & { ' $fragmentRefs'?: { 'IContentData_Component_Fragment': IContentData_Component_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Component_Fragment' };

type BlockData_Content_Fragment = (
  { __typename?: 'Content' }
  & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Content_Fragment' };

type BlockData_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DefaultImage_Fragment' };

type BlockData_DefaultVideo_Fragment = (
  { __typename?: 'DefaultVideo' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DefaultVideo_Fragment' };

type BlockData_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Dictionary_Fragment' };

type BlockData_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DictionaryItem_Fragment' };

type BlockData_Element_Fragment = (
  { __typename?: 'Element' }
  & { ' $fragmentRefs'?: { 'IContentData_Element_Fragment': IContentData_Element_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Element_Fragment' };

type BlockData_Experience_Fragment = (
  { __typename?: 'Experience' }
  & { ' $fragmentRefs'?: { 'IContentData_Experience_Fragment': IContentData_Experience_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Experience_Fragment' };

type BlockData_Folder_Fragment = (
  { __typename?: 'Folder' }
  & { ' $fragmentRefs'?: { 'IContentData_Folder_Fragment': IContentData_Folder_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Folder_Fragment' };

type BlockData_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeaderBlock_Fragment' };

type BlockData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeadingElement_Fragment' };

type BlockData_Image_Fragment = (
  { __typename?: 'Image' }
  & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Image_Fragment' };

type BlockData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageElement_Fragment' };

type BlockData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageMedia_Fragment' };

type BlockData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LandingPage_Fragment' };

type BlockData_Media_Fragment = (
  { __typename?: 'Media' }
  & { ' $fragmentRefs'?: { 'IContentData_Media_Fragment': IContentData_Media_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Media_Fragment' };

type BlockData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment;'MegaMenuGroupBlockDataFragment': MegaMenuGroupBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_MegaMenuGroupBlock_Fragment' };

type BlockData_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment;'NavigationMenuBlockDataFragment': NavigationMenuBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_NavigationMenuBlock_Fragment' };

type BlockData_NewsArticlePage_Fragment = (
  { __typename?: 'NewsArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_NewsArticlePage_Fragment': IContentData_NewsArticlePage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_NewsArticlePage_Fragment' };

type BlockData_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'BlockData_OfficeLocation_Fragment' };

type BlockData_Page_Fragment = (
  { __typename?: 'Page' }
  & { ' $fragmentRefs'?: { 'IContentData_Page_Fragment': IContentData_Page_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Page_Fragment' };

type BlockData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PageSeoSettings_Fragment' };

type BlockData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ParagraphElement_Fragment' };

type BlockData_Section_Fragment = (
  { __typename?: 'Section' }
  & { ' $fragmentRefs'?: { 'IContentData_Section_Fragment': IContentData_Section_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Section_Fragment' };

type BlockData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'BlockData_SysContentFolder_Fragment' };

type BlockData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialElement_Fragment' };

type BlockData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Video_Fragment' };

type BlockData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_VideoMedia_Fragment' };

type BlockData_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'BlockData_WebsiteFooter_Fragment' };

type BlockData_genericMedia_Fragment = (
  { __typename?: 'genericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_genericMedia_Fragment': IContentData_genericMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_genericMedia_Fragment' };

export type BlockDataFragment = BlockData_BannerBlock_Fragment | BlockData_BlankExperience_Fragment | BlockData_BlankSection_Fragment | BlockData_ButtonBlock_Fragment | BlockData_CTAElement_Fragment | BlockData_CardBlock_Fragment | BlockData_Component_Fragment | BlockData_Content_Fragment | BlockData_DefaultImage_Fragment | BlockData_DefaultVideo_Fragment | BlockData_Dictionary_Fragment | BlockData_DictionaryItem_Fragment | BlockData_Element_Fragment | BlockData_Experience_Fragment | BlockData_Folder_Fragment | BlockData_HeaderBlock_Fragment | BlockData_HeadingElement_Fragment | BlockData_Image_Fragment | BlockData_ImageElement_Fragment | BlockData_ImageMedia_Fragment | BlockData_LandingPage_Fragment | BlockData_Media_Fragment | BlockData_MegaMenuGroupBlock_Fragment | BlockData_NavigationMenuBlock_Fragment | BlockData_NewsArticlePage_Fragment | BlockData_OfficeLocation_Fragment | BlockData_Page_Fragment | BlockData_PageSeoSettings_Fragment | BlockData_ParagraphElement_Fragment | BlockData_Section_Fragment | BlockData_SysContentFolder_Fragment | BlockData_TestimonialElement_Fragment | BlockData_Video_Fragment | BlockData_VideoMedia_Fragment | BlockData_WebsiteFooter_Fragment | BlockData_genericMedia_Fragment;

type IElementData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CTAElement_Fragment' };

type IElementData_Element_Fragment = { __typename?: 'Element', _type: 'Element', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_Element_Fragment' };

type IElementData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeadingElement_Fragment' };

type IElementData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ImageElement_Fragment' };

type IElementData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ParagraphElement_Fragment' };

type IElementData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialElement_Fragment' };

export type IElementDataFragment = IElementData_CTAElement_Fragment | IElementData_Element_Fragment | IElementData_HeadingElement_Fragment | IElementData_ImageElement_Fragment | IElementData_ParagraphElement_Fragment | IElementData_TestimonialElement_Fragment;

type IContentInfo_CompositionMetadata_Fragment = { __typename?: 'CompositionMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_CompositionMetadata_Fragment' };

type IContentInfo_ContentMetadata_Fragment = { __typename?: 'ContentMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ContentMetadata_Fragment' };

type IContentInfo_InstanceMetadata_Fragment = { __typename?: 'InstanceMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_InstanceMetadata_Fragment' };

type IContentInfo_ItemMetadata_Fragment = { __typename?: 'ItemMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ItemMetadata_Fragment' };

type IContentInfo_MediaMetadata_Fragment = { __typename?: 'MediaMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_MediaMetadata_Fragment' };

export type IContentInfoFragment = IContentInfo_CompositionMetadata_Fragment | IContentInfo_ContentMetadata_Fragment | IContentInfo_InstanceMetadata_Fragment | IContentInfo_ItemMetadata_Fragment | IContentInfo_MediaMetadata_Fragment;

type IContentData_BannerBlock_Fragment = { __typename?: 'BannerBlock', _type: 'BannerBlock', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BannerBlock_Fragment' };

type IContentData_BlankExperience_Fragment = { __typename?: 'BlankExperience', _type: 'BlankExperience', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankExperience_Fragment' };

type IContentData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankSection_Fragment' };

type IContentData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ButtonBlock_Fragment' };

type IContentData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CTAElement_Fragment' };

type IContentData_CardBlock_Fragment = { __typename?: 'CardBlock', _type: 'CardBlock', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CardBlock_Fragment' };

type IContentData_Component_Fragment = { __typename?: 'Component', _type: 'Component', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Component_Fragment' };

type IContentData_Content_Fragment = { __typename?: 'Content', _type: 'Content', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Content_Fragment' };

type IContentData_DefaultImage_Fragment = { __typename?: 'DefaultImage', _type: 'DefaultImage', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DefaultImage_Fragment' };

type IContentData_DefaultVideo_Fragment = { __typename?: 'DefaultVideo', _type: 'DefaultVideo', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DefaultVideo_Fragment' };

type IContentData_Dictionary_Fragment = { __typename?: 'Dictionary', _type: 'Dictionary', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Dictionary_Fragment' };

type IContentData_DictionaryItem_Fragment = { __typename?: 'DictionaryItem', _type: 'DictionaryItem', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DictionaryItem_Fragment' };

type IContentData_Element_Fragment = { __typename?: 'Element', _type: 'Element', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Element_Fragment' };

type IContentData_Experience_Fragment = { __typename?: 'Experience', _type: 'Experience', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Experience_Fragment' };

type IContentData_Folder_Fragment = { __typename?: 'Folder', _type: 'Folder', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Folder_Fragment' };

type IContentData_HeaderBlock_Fragment = { __typename?: 'HeaderBlock', _type: 'HeaderBlock', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeaderBlock_Fragment' };

type IContentData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeadingElement_Fragment' };

type IContentData_Image_Fragment = { __typename?: 'Image', _type: 'Image', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Image_Fragment' };

type IContentData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageElement_Fragment' };

type IContentData_ImageMedia_Fragment = { __typename?: 'ImageMedia', _type: 'ImageMedia', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageMedia_Fragment' };

type IContentData_LandingPage_Fragment = { __typename?: 'LandingPage', _type: 'LandingPage', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LandingPage_Fragment' };

type IContentData_Media_Fragment = { __typename?: 'Media', _type: 'Media', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Media_Fragment' };

type IContentData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MegaMenuGroupBlock_Fragment' };

type IContentData_NavigationMenuBlock_Fragment = { __typename?: 'NavigationMenuBlock', _type: 'NavigationMenuBlock', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_NavigationMenuBlock_Fragment' };

type IContentData_NewsArticlePage_Fragment = { __typename?: 'NewsArticlePage', _type: 'NewsArticlePage', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_NewsArticlePage_Fragment' };

type IContentData_OfficeLocation_Fragment = { __typename?: 'OfficeLocation', _type: 'OfficeLocation', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_OfficeLocation_Fragment' };

type IContentData_Page_Fragment = { __typename?: 'Page', _type: 'Page', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Page_Fragment' };

type IContentData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PageSeoSettings_Fragment' };

type IContentData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ParagraphElement_Fragment' };

type IContentData_Section_Fragment = { __typename?: 'Section', _type: 'Section', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Section_Fragment' };

type IContentData_SysContentFolder_Fragment = { __typename?: 'SysContentFolder', _type: 'SysContentFolder', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SysContentFolder_Fragment' };

type IContentData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialElement_Fragment' };

type IContentData_Video_Fragment = { __typename?: 'Video', _type: 'Video', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Video_Fragment' };

type IContentData_VideoMedia_Fragment = { __typename?: 'VideoMedia', _type: 'VideoMedia', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoMedia_Fragment' };

type IContentData_WebsiteFooter_Fragment = { __typename?: 'WebsiteFooter', _type: 'WebsiteFooter', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_WebsiteFooter_Fragment' };

type IContentData_genericMedia_Fragment = { __typename?: 'genericMedia', _type: 'genericMedia', _metadata?: (
    { __typename?: 'CompositionMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_CompositionMetadata_Fragment': IContentInfo_CompositionMetadata_Fragment } }
  ) | (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_genericMedia_Fragment' };

export type IContentDataFragment = IContentData_BannerBlock_Fragment | IContentData_BlankExperience_Fragment | IContentData_BlankSection_Fragment | IContentData_ButtonBlock_Fragment | IContentData_CTAElement_Fragment | IContentData_CardBlock_Fragment | IContentData_Component_Fragment | IContentData_Content_Fragment | IContentData_DefaultImage_Fragment | IContentData_DefaultVideo_Fragment | IContentData_Dictionary_Fragment | IContentData_DictionaryItem_Fragment | IContentData_Element_Fragment | IContentData_Experience_Fragment | IContentData_Folder_Fragment | IContentData_HeaderBlock_Fragment | IContentData_HeadingElement_Fragment | IContentData_Image_Fragment | IContentData_ImageElement_Fragment | IContentData_ImageMedia_Fragment | IContentData_LandingPage_Fragment | IContentData_Media_Fragment | IContentData_MegaMenuGroupBlock_Fragment | IContentData_NavigationMenuBlock_Fragment | IContentData_NewsArticlePage_Fragment | IContentData_OfficeLocation_Fragment | IContentData_Page_Fragment | IContentData_PageSeoSettings_Fragment | IContentData_ParagraphElement_Fragment | IContentData_Section_Fragment | IContentData_SysContentFolder_Fragment | IContentData_TestimonialElement_Fragment | IContentData_Video_Fragment | IContentData_VideoMedia_Fragment | IContentData_WebsiteFooter_Fragment | IContentData_genericMedia_Fragment;

export type LinkDataFragment = { __typename?: 'ContentUrl', base?: string | null, hierarchical?: string | null, default?: string | null } & { ' $fragmentName'?: 'LinkDataFragment' };

export type ButtonBlockDataFragment = { __typename?: 'ButtonBlock', text?: string | null, className?: string | null, buttonType?: string | null, variant?: string | null, link?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ButtonBlockDataFragment' };

export type ButtonBlockPropertyDataFragment = { __typename?: 'ButtonBlockProperty', text?: string | null, className?: string | null, buttonType?: string | null, variant?: string | null, link?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ButtonBlockPropertyDataFragment' };

export type CardBlockDataFragment = { __typename?: 'CardBlock', heading?: string | null, subheading?: string | null, color?: string | null, layout?: string | null, description?: { __typename?: 'RichText', json?: any | null } | null, icon?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, image?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, link?: (
    { __typename?: 'ButtonBlockProperty' }
    & { ' $fragmentRefs'?: { 'ButtonBlockPropertyDataFragment': ButtonBlockPropertyDataFragment } }
  ) | null } & { ' $fragmentName'?: 'CardBlockDataFragment' };

export type CTAElementDataFragment = { __typename?: 'CTAElement', text?: string | null, link?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'CTAElementDataFragment' };

export type HeadingElementDataFragment = { __typename?: 'HeadingElement', headingText?: string | null } & { ' $fragmentName'?: 'HeadingElementDataFragment' };

export type ImageElementDataFragment = { __typename?: 'ImageElement', altText?: string | null, imageLink?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ImageElementDataFragment' };

export type ParagraphElementDataFragment = { __typename?: 'ParagraphElement', paragraph?: { __typename?: 'RichText', json?: any | null } | null } & { ' $fragmentName'?: 'ParagraphElementDataFragment' };

export type TestimonialElementDataFragment = { __typename?: 'TestimonialElement', referenceTitle?: string | null, customerName?: string | null, customerLocation?: string | null, referenceText?: { __typename?: 'RichText', json?: any | null } | null, customerImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'TestimonialElementDataFragment' };

export type getFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type getFooterQuery = { __typename?: 'Query', footer?: { __typename?: 'WebsiteFooterOutput', total?: number | null, items?: Array<{ __typename?: 'WebsiteFooter', logoAlt?: string | null, address?: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BlankExperience' } | { __typename?: 'BlankSection' } | { __typename?: 'ButtonBlock' } | { __typename?: 'CTAElement' } | { __typename?: 'CardBlock' } | { __typename?: 'Component' } | { __typename?: 'Content' } | { __typename?: 'DefaultImage' } | { __typename?: 'DefaultVideo' } | { __typename?: 'Dictionary' } | { __typename?: 'DictionaryItem' } | { __typename?: 'Element' } | { __typename?: 'Experience' } | { __typename?: 'Folder' } | { __typename?: 'HeaderBlock' } | { __typename?: 'HeadingElement' } | { __typename?: 'Image' } | { __typename?: 'ImageElement' } | { __typename?: 'ImageMedia' } | { __typename?: 'LandingPage' } | { __typename?: 'Media' } | { __typename?: 'MegaMenuGroupBlock' } | { __typename?: 'NavigationMenuBlock' } | { __typename?: 'NewsArticlePage' } | (
        { __typename?: 'OfficeLocation' }
        & { ' $fragmentRefs'?: { 'OfficeLocationDataFragment': OfficeLocationDataFragment } }
      ) | { __typename?: 'Page' } | { __typename?: 'PageSeoSettings' } | { __typename?: 'ParagraphElement' } | { __typename?: 'Section' } | { __typename?: 'SysContentFolder' } | { __typename?: 'TestimonialElement' } | { __typename?: 'Video' } | { __typename?: 'VideoMedia' } | { __typename?: 'WebsiteFooter' } | { __typename?: 'genericMedia' } | null> | null, firstMenu?: (
        { __typename?: 'NavigationMenuBlockProperty' }
        & { ' $fragmentRefs'?: { 'MenuContentFragment': MenuContentFragment } }
      ) | null, secondMenu?: (
        { __typename?: 'NavigationMenuBlockProperty' }
        & { ' $fragmentRefs'?: { 'MenuContentFragment': MenuContentFragment } }
      ) | null, thirdMenu?: (
        { __typename?: 'NavigationMenuBlockProperty' }
        & { ' $fragmentRefs'?: { 'MenuContentFragment': MenuContentFragment } }
      ) | null, logo?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, legal?: Array<(
        { __typename?: 'Link' }
        & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
      ) | null> | null } | null> | null } | null };

export type MenuContentFragment = { __typename?: 'NavigationMenuBlockProperty', heading?: string | null, links?: Array<(
    { __typename?: 'Link' }
    & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'MenuContentFragment' };

export type OfficeLocationDataFragment = { __typename?: 'OfficeLocation', title?: string | null, street1?: string | null, street2?: string | null, postalcode?: string | null, city?: string | null, country?: string | null, phone?: string | null, email?: string | null } & { ' $fragmentName'?: 'OfficeLocationDataFragment' };

export type getHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type getHeaderQuery = { __typename?: 'Query', menuItems?: { __typename?: 'HeaderBlockOutput', items?: Array<{ __typename?: 'HeaderBlock', logo?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, headerNavigation?: Array<(
        { __typename?: 'BannerBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
      ) | (
        { __typename?: 'BlankExperience' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
      ) | (
        { __typename?: 'BlankSection' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
      ) | (
        { __typename?: 'ButtonBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
      ) | (
        { __typename?: 'CTAElement' }
        & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
      ) | (
        { __typename?: 'CardBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
      ) | (
        { __typename?: 'Component' }
        & { ' $fragmentRefs'?: { 'IContentData_Component_Fragment': IContentData_Component_Fragment } }
      ) | (
        { __typename?: 'Content' }
        & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
      ) | (
        { __typename?: 'DefaultImage' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
      ) | (
        { __typename?: 'DefaultVideo' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
      ) | (
        { __typename?: 'Dictionary' }
        & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
      ) | (
        { __typename?: 'DictionaryItem' }
        & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
      ) | (
        { __typename?: 'Element' }
        & { ' $fragmentRefs'?: { 'IContentData_Element_Fragment': IContentData_Element_Fragment } }
      ) | (
        { __typename?: 'Experience' }
        & { ' $fragmentRefs'?: { 'IContentData_Experience_Fragment': IContentData_Experience_Fragment } }
      ) | (
        { __typename?: 'Folder' }
        & { ' $fragmentRefs'?: { 'IContentData_Folder_Fragment': IContentData_Folder_Fragment } }
      ) | (
        { __typename?: 'HeaderBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
      ) | (
        { __typename?: 'HeadingElement' }
        & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
      ) | (
        { __typename?: 'Image' }
        & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
      ) | (
        { __typename?: 'ImageElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
      ) | (
        { __typename?: 'ImageMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
      ) | (
        { __typename?: 'LandingPage' }
        & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
      ) | (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'IContentData_Media_Fragment': IContentData_Media_Fragment } }
      ) | (
        { __typename?: 'MegaMenuGroupBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment;'MegaMenuGroupBlockDataFragment': MegaMenuGroupBlockDataFragment } }
      ) | (
        { __typename?: 'NavigationMenuBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
      ) | (
        { __typename?: 'NewsArticlePage' }
        & { ' $fragmentRefs'?: { 'IContentData_NewsArticlePage_Fragment': IContentData_NewsArticlePage_Fragment } }
      ) | (
        { __typename?: 'OfficeLocation' }
        & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
      ) | (
        { __typename?: 'Page' }
        & { ' $fragmentRefs'?: { 'IContentData_Page_Fragment': IContentData_Page_Fragment } }
      ) | (
        { __typename?: 'PageSeoSettings' }
        & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
      ) | (
        { __typename?: 'ParagraphElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
      ) | (
        { __typename?: 'Section' }
        & { ' $fragmentRefs'?: { 'IContentData_Section_Fragment': IContentData_Section_Fragment } }
      ) | (
        { __typename?: 'SysContentFolder' }
        & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
      ) | (
        { __typename?: 'TestimonialElement' }
        & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
      ) | (
        { __typename?: 'Video' }
        & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
      ) | (
        { __typename?: 'VideoMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
      ) | (
        { __typename?: 'WebsiteFooter' }
        & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
      ) | (
        { __typename?: 'genericMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_genericMedia_Fragment': IContentData_genericMedia_Fragment } }
      ) | null> | null, utilityNavigation?: Array<(
        { __typename?: 'BannerBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
      ) | (
        { __typename?: 'BlankExperience' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
      ) | (
        { __typename?: 'BlankSection' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
      ) | (
        { __typename?: 'ButtonBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
      ) | (
        { __typename?: 'CTAElement' }
        & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
      ) | (
        { __typename?: 'CardBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
      ) | (
        { __typename?: 'Component' }
        & { ' $fragmentRefs'?: { 'IContentData_Component_Fragment': IContentData_Component_Fragment } }
      ) | (
        { __typename?: 'Content' }
        & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
      ) | (
        { __typename?: 'DefaultImage' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
      ) | (
        { __typename?: 'DefaultVideo' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
      ) | (
        { __typename?: 'Dictionary' }
        & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
      ) | (
        { __typename?: 'DictionaryItem' }
        & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
      ) | (
        { __typename?: 'Element' }
        & { ' $fragmentRefs'?: { 'IContentData_Element_Fragment': IContentData_Element_Fragment } }
      ) | (
        { __typename?: 'Experience' }
        & { ' $fragmentRefs'?: { 'IContentData_Experience_Fragment': IContentData_Experience_Fragment } }
      ) | (
        { __typename?: 'Folder' }
        & { ' $fragmentRefs'?: { 'IContentData_Folder_Fragment': IContentData_Folder_Fragment } }
      ) | (
        { __typename?: 'HeaderBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
      ) | (
        { __typename?: 'HeadingElement' }
        & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
      ) | (
        { __typename?: 'Image' }
        & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
      ) | (
        { __typename?: 'ImageElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
      ) | (
        { __typename?: 'ImageMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
      ) | (
        { __typename?: 'LandingPage' }
        & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
      ) | (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'IContentData_Media_Fragment': IContentData_Media_Fragment } }
      ) | (
        { __typename?: 'MegaMenuGroupBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
      ) | (
        { __typename?: 'NavigationMenuBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
      ) | (
        { __typename?: 'NewsArticlePage' }
        & { ' $fragmentRefs'?: { 'IContentData_NewsArticlePage_Fragment': IContentData_NewsArticlePage_Fragment } }
      ) | (
        { __typename?: 'OfficeLocation' }
        & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
      ) | (
        { __typename?: 'Page' }
        & { ' $fragmentRefs'?: { 'IContentData_Page_Fragment': IContentData_Page_Fragment } }
      ) | (
        { __typename?: 'PageSeoSettings' }
        & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
      ) | (
        { __typename?: 'ParagraphElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
      ) | (
        { __typename?: 'Section' }
        & { ' $fragmentRefs'?: { 'IContentData_Section_Fragment': IContentData_Section_Fragment } }
      ) | (
        { __typename?: 'SysContentFolder' }
        & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
      ) | (
        { __typename?: 'TestimonialElement' }
        & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
      ) | (
        { __typename?: 'Video' }
        & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
      ) | (
        { __typename?: 'VideoMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
      ) | (
        { __typename?: 'WebsiteFooter' }
        & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
      ) | (
        { __typename?: 'genericMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_genericMedia_Fragment': IContentData_genericMedia_Fragment } }
      ) | null> | null } | null> | null } | null };

export type MegaMenuGroupBlockDataFragment = { __typename?: 'MegaMenuGroupBlock', menuName?: string | null, menuLink?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null, menuData?: Array<(
    { __typename: 'BannerBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
  ) | (
    { __typename: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
  ) | (
    { __typename: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
  ) | (
    { __typename: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
  ) | (
    { __typename: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
  ) | (
    { __typename: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
  ) | (
    { __typename: 'Component' }
    & { ' $fragmentRefs'?: { 'IContentData_Component_Fragment': IContentData_Component_Fragment } }
  ) | (
    { __typename: 'Content' }
    & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
  ) | (
    { __typename: 'DefaultImage' }
    & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
  ) | (
    { __typename: 'DefaultVideo' }
    & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
  ) | (
    { __typename: 'Dictionary' }
    & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
  ) | (
    { __typename: 'DictionaryItem' }
    & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
  ) | (
    { __typename: 'Element' }
    & { ' $fragmentRefs'?: { 'IContentData_Element_Fragment': IContentData_Element_Fragment } }
  ) | (
    { __typename: 'Experience' }
    & { ' $fragmentRefs'?: { 'IContentData_Experience_Fragment': IContentData_Experience_Fragment } }
  ) | (
    { __typename: 'Folder' }
    & { ' $fragmentRefs'?: { 'IContentData_Folder_Fragment': IContentData_Folder_Fragment } }
  ) | (
    { __typename: 'HeaderBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
  ) | (
    { __typename: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
  ) | (
    { __typename: 'Image' }
    & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
  ) | (
    { __typename: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
  ) | (
    { __typename: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
  ) | (
    { __typename: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
  ) | (
    { __typename: 'Media' }
    & { ' $fragmentRefs'?: { 'IContentData_Media_Fragment': IContentData_Media_Fragment } }
  ) | (
    { __typename: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename: 'NavigationMenuBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment;'NavigationMenuBlockDataFragment': NavigationMenuBlockDataFragment } }
  ) | (
    { __typename: 'NewsArticlePage' }
    & { ' $fragmentRefs'?: { 'IContentData_NewsArticlePage_Fragment': IContentData_NewsArticlePage_Fragment } }
  ) | (
    { __typename: 'OfficeLocation' }
    & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
  ) | (
    { __typename: 'Page' }
    & { ' $fragmentRefs'?: { 'IContentData_Page_Fragment': IContentData_Page_Fragment } }
  ) | (
    { __typename: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
  ) | (
    { __typename: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
  ) | (
    { __typename: 'Section' }
    & { ' $fragmentRefs'?: { 'IContentData_Section_Fragment': IContentData_Section_Fragment } }
  ) | (
    { __typename: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
  ) | (
    { __typename: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
  ) | (
    { __typename: 'Video' }
    & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
  ) | (
    { __typename: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
  ) | (
    { __typename: 'WebsiteFooter' }
    & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
  ) | (
    { __typename: 'genericMedia' }
    & { ' $fragmentRefs'?: { 'IContentData_genericMedia_Fragment': IContentData_genericMedia_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'MegaMenuGroupBlockDataFragment' };

export type NavigationMenuBlockDataFragment = { __typename?: 'NavigationMenuBlock', title?: string | null, items?: Array<(
    { __typename?: 'Link' }
    & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'NavigationMenuBlockDataFragment' };

export type BlankExperienceDataFragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'ExperienceData_BlankExperience_Fragment': ExperienceData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'BlankExperienceDataFragment' };

export type getBlankExperienceMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}>;


export type getBlankExperienceMetaDataQuery = { __typename?: 'Query', BlankExperience?: { __typename?: 'BlankExperienceOutput', items?: Array<{ __typename?: 'BlankExperience', _metadata?: { __typename?: 'CompositionMetadata', displayName?: string | null } | { __typename?: 'ContentMetadata', displayName?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null } | null, SeoSettings?: { __typename?: 'PageSeoSettingsProperty', metaTitle?: string | null } | null } | null> | null } | null };

export type getDictionaryQueryVariables = Exact<{
  dictionary: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getDictionaryQuery = { __typename?: 'Query', getDictionary?: { __typename?: 'DictionaryOutput', total?: number | null, items?: Array<{ __typename?: 'Dictionary', key?: string | null, contents?: Array<{ __typename?: 'DictionaryItemProperty', key?: string | null, value?: string | null } | null> | null } | null> | null } | null };

export const LinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkDataFragment, unknown>;
export const IContentInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<IContentInfoFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const IElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IElementDataFragment, unknown>;
export const CTAElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<CTAElementDataFragment, unknown>;
export const HeadingElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}}]} as unknown as DocumentNode<HeadingElementDataFragment, unknown>;
export const ReferenceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ReferenceDataFragment, unknown>;
export const ImageElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<ImageElementDataFragment, unknown>;
export const ParagraphElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<ParagraphElementDataFragment, unknown>;
export const TestimonialElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<TestimonialElementDataFragment, unknown>;
export const ElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}}]} as unknown as DocumentNode<ElementDataFragment, unknown>;
export const CompositionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}}]} as unknown as DocumentNode<CompositionDataFragment, unknown>;
export const ExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"experience"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"experience"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"experience"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const IContentListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<IContentListItemFragment, unknown>;
export const ButtonBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ButtonBlockDataFragment, unknown>;
export const ButtonBlockPropertyDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ButtonBlockPropertyDataFragment, unknown>;
export const CardBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<CardBlockDataFragment, unknown>;
export const LinkItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkItemDataFragment, unknown>;
export const NavigationMenuBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<NavigationMenuBlockDataFragment, unknown>;
export const MegaMenuGroupBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}}]} as unknown as DocumentNode<MegaMenuGroupBlockDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const MenuContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"links"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<MenuContentFragment, unknown>;
export const OfficeLocationDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}}]} as unknown as DocumentNode<OfficeLocationDataFragment, unknown>;
export const getContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"experience"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}}]}}]} as unknown as DocumentNode<getContentByIdQuery, getContentByIdQueryVariables>;
export const getContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getContentTypeQuery, getContentTypeQueryVariables>;
export const getContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"experience"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}}]}}]} as unknown as DocumentNode<getContentByPathQuery, getContentByPathQueryVariables>;
export const getFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"footer"},"name":{"kind":"Name","value":"WebsiteFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"address"},"name":{"kind":"Name","value":"FooterMainOfficeLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfficeLocationData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"firstMenu"},"name":{"kind":"Name","value":"FooterFirstLinkList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuContent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondMenu"},"name":{"kind":"Name","value":"FooterSecondLinkList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuContent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"thirdMenu"},"name":{"kind":"Name","value":"FooterThirdLinkList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuContent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"logo"},"name":{"kind":"Name","value":"FooterLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"logoAlt"},"name":{"kind":"Name","value":"FooterLogoAltText"}},{"kind":"Field","alias":{"kind":"Name","value":"legal"},"name":{"kind":"Name","value":"FooterLegalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"links"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getFooterQuery, getFooterQueryVariables>;
export const getHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuItems"},"name":{"kind":"Name","value":"HeaderBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"logo"},"name":{"kind":"Name","value":"site_logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"headerNavigation"},"name":{"kind":"Name","value":"site_main_navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"utilityNavigation"},"name":{"kind":"Name","value":"site_utility_navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<getHeaderQuery, getHeaderQueryVariables>;
export const getBlankExperienceMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlankExperienceMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlankExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getBlankExperienceMetaDataQuery, getBlankExperienceMetaDataQueryVariables>;
export const getDictionaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDictionary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dictionary"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getDictionary"},"name":{"kind":"Name","value":"Dictionary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"DictionaryKey"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dictionary"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"key"},"name":{"kind":"Name","value":"DictionaryKey"}},{"kind":"Field","alias":{"kind":"Name","value":"contents"},"name":{"kind":"Name","value":"DictionaryItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"key"},"name":{"kind":"Name","value":"DictionaryItemKey"}},{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"DictionaryItemValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getDictionaryQuery, getDictionaryQueryVariables>;