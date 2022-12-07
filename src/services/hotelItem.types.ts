export declare module HotelItem {
  export interface Amenity {
    __typename: string;
    id: number;
  }

  export interface Neighborhood {
    __typename: string;
    name: string;
    regionId: string;
  }

  export interface PriceRange {
    __typename: string;
    max: number;
    min: number;
  }

  export interface FilterMetadata {
    __typename: string;
    amenities: Amenity[];
    neighborhoods: Neighborhood[];
    priceRange: PriceRange;
  }

  export interface Analytics {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Action {
    __typename: string;
    actionType: string;
    accessibility?: any;
    analytics: Analytics;
  }

  export interface Primary {
    __typename: string;
    primary?: any;
    action: Action;
  }

  export interface Analytics2 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Action2 {
    __typename: string;
    actionType: string;
    accessibility: string;
    analytics: Analytics2;
  }

  export interface Secondary {
    __typename: string;
    primary: string;
    disabled: boolean;
    action: Action2;
  }

  export interface Actions {
    __typename: string;
    primary: Primary;
    secondaries: Secondary[];
  }

  export interface Toolbar {
    __typename: string;
    primary: string;
    actions: Actions;
  }

  export interface Analytics3 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Action3 {
    __typename: string;
    actionType: string;
    accessibility?: any;
    analytics: Analytics3;
  }

  export interface Icon {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface RevealAction {
    __typename: string;
    primary: string;
    action: Action3;
    accessibility: string;
    badge: number;
    disabled: boolean;
    icon: Icon;
  }

  export interface Analytics4 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Action4 {
    __typename: string;
    actionType: string;
    accessibility?: any;
    analytics: Analytics4;
  }

  export interface ApplyAction {
    __typename: string;
    primary: string;
    action: Action4;
    accessibility: string;
    badge?: any;
    disabled: boolean;
    icon?: any;
  }

  export interface Analytics5 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Action5 {
    __typename: string;
    actionType: string;
    accessibility?: any;
    analytics: Analytics5;
  }

  export interface TypeaheadInfo {
    __typename: string;
    client: string;
    isDestination: boolean;
    lineOfBusiness: string;
    maxNumberOfResults: number;
    packageType?: any;
    personalize: boolean;
    regionType: number;
    typeaheadFeatures: string;
  }

  export interface Icon2 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Analytics6 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface CollapseAnalytics {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface ExpandAnalytics {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Expando {
    __typename: string;
    threshold: number;
    collapseLabel: string;
    expandLabel: string;
    collapseAnalytics: CollapseAnalytics;
    expandAnalytics: ExpandAnalytics;
  }

  export interface Analytics7 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface SelectAnalytics {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface DeselectAnalytics {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface MultiSelectionOption {
    __typename: string;
    id: string;
    primary: string;
    secondary: string;
    icon?: any;
    analytics: Analytics7;
    value: string;
    description: string;
    selected: boolean;
    disabled: boolean;
    default: boolean;
    selectAnalytics: SelectAnalytics;
    deselectAnalytics: DeselectAnalytics;
  }

  export interface Analytics8 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Selected {
    __typename: string;
    id: string;
    min: number;
    max: number;
  }

  export interface Label {
    __typename: string;
    label: string;
    value: number;
  }

  export interface Characteristics {
    __typename: string;
    min: number;
    max: number;
    step: number;
    labels: Label[];
  }

  export interface Range {
    __typename: string;
    id: string;
    primary: string;
    secondary?: any;
    icon?: any;
    analytics: Analytics8;
    selected: Selected;
    characteristics: Characteristics;
  }

  export interface Analytics9 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface SelectAnalytics2 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface DeselectAnalytics2 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Option {
    __typename: string;
    id: string;
    primary: string;
    secondary?: any;
    icon?: any;
    analytics: Analytics9;
    value: string;
    description?: any;
    selected: boolean;
    disabled: boolean;
    default: boolean;
    selectAnalytics: SelectAnalytics2;
    deselectAnalytics: DeselectAnalytics2;
  }

  export interface Icon3 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Analytics10 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface SelectAnalytics3 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface DeselectAnalytics3 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface TileMultiSelectionOption {
    __typename: string;
    id: string;
    primary: string;
    secondary: string;
    icon: Icon3;
    analytics: Analytics10;
    value: string;
    description?: any;
    selected: boolean;
    disabled: boolean;
    default: boolean;
    selectAnalytics: SelectAnalytics3;
    deselectAnalytics: DeselectAnalytics3;
  }

  export interface Field {
    __typename: string;
    primary: string;
    secondary?: any;
    action: Action5;
    id: string;
    label?: any;
    placeholder: string;
    selected?: any;
    typeaheadInfo: TypeaheadInfo;
    icon: Icon2;
    analytics: Analytics6;
    expando: Expando;
    multiSelectionOptions: MultiSelectionOption[];
    range: Range;
    options: Option[];
    tileMultiSelectionOptions: TileMultiSelectionOption[];
  }

  export interface FilterSection {
    __typename: string;
    title: string;
    fields: Field[];
  }

  export interface Analytics11 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface SelectAnalytics4 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface DeselectAnalytics4 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface DropdownFilterOption {
    __typename: string;
    id: string;
    primary: string;
    secondary?: any;
    icon?: any;
    analytics: Analytics11;
    value: string;
    description?: any;
    selected: boolean;
    disabled: boolean;
    default: boolean;
    selectAnalytics: SelectAnalytics4;
    deselectAnalytics: DeselectAnalytics4;
  }

  export interface Field2 {
    __typename: string;
    primary: string;
    secondary?: any;
    dropdownFilterOptions: DropdownFilterOption[];
  }

  export interface SortSection {
    __typename: string;
    title?: any;
    fields: Field2[];
  }

  export interface UniversalSortAndFilter {
    __typename: string;
    toolbar: Toolbar;
    revealAction: RevealAction;
    applyAction: ApplyAction;
    filterSections: FilterSection[];
    sortSections: SortSection[];
  }

  export interface Availability {
    __typename: string;
    available: boolean;
    minRoomsLeft?: number;
  }

  export interface Image {
    __typename: string;
    description: string;
    url: string;
  }

  export interface PropertyImage {
    __typename: string;
    alt: string;
    fallbackImage?: any;
    image: Image;
    subjectId: number;
  }

  export interface DistanceFromDestination {
    __typename: string;
    unit: string;
    value: number;
  }

  export interface DestinationInfo {
    __typename: string;
    distanceFromDestination: DistanceFromDestination;
    distanceFromMessaging?: any;
    regionId: string;
  }

  export interface ActionDetails {
    __typename: string;
    action: string;
    details?: any;
    title?: any;
    accessibilityLabel?: any;
  }

  export interface Analytics12 {
    __typename: string;
    referrerId: string;
  }

  export interface ListingFooter {
    __typename: string;
    text: string;
    linkUrl: string;
    actionDetails: ActionDetails;
    analytics: Analytics12;
  }

  export interface LatLong {
    __typename: string;
    latitude: number;
    longitude: number;
  }

  export interface MapMarker {
    __typename: string;
    label: string;
    latLong: LatLong;
  }

  export interface Neighborhood2 {
    __typename: string;
    name: string;
  }

  export interface IconTemp {
    __typename: string;
    id: string;
    description: string;
  }

  export interface Primary2 {
    __typename: string;
    text: string;
    theme_temp: string;
    icon_temp: IconTemp;
    mark?: any;
  }

  export interface IconTemp2 {
    __typename: string;
    id: string;
    description: string;
  }

  export interface Secondary2 {
    __typename: string;
    text: string;
    theme_temp: string;
    icon_temp: IconTemp2;
    mark?: any;
  }

  export interface OfferBadge {
    __typename: string;
    primary: Primary2;
    secondary: Secondary2;
  }

  export interface Mark {
    __typename: string;
    id: string;
    token: string;
    description: string;
  }

  export interface Message {
    __typename: string;
    message: string;
    theme: string;
    type: string;
    mark: Mark;
  }

  export interface Attribute {
    __typename: string;
    type: string;
  }

  export interface OfferSummary {
    __typename: string;
    messages: Message[];
    attributes: Attribute[];
  }

  export interface StrikeOut {
    __typename: string;
    amount: number;
    formatted: string;
  }

  export interface Disclaimer {
    __typename: string;
    value: string;
  }

  export interface Option2 {
    __typename: string;
    strikeOut: StrikeOut;
    disclaimer: Disclaimer;
    formattedDisplayPrice: string;
  }

  export interface CurrencyInfo {
    __typename: string;
    code: string;
    symbol: string;
  }

  export interface Lead {
    __typename: string;
    amount: number;
    currencyInfo: CurrencyInfo;
    formatted: string;
  }

  export interface CurrencyInfo2 {
    __typename: string;
    code: string;
    symbol: string;
  }

  export interface StrikeOut2 {
    __typename: string;
    amount: number;
    currencyInfo: CurrencyInfo2;
    formatted: string;
  }

  export interface Disclaimer2 {
    __typename: string;
    content: string[];
    title?: any;
  }

  export interface Price2 {
    __typename: string;
    formatted: string;
    accessibilityLabel: string;
  }

  export interface LineItem {
    __typename: string;
    disclaimer: Disclaimer2;
    price: Price2;
    role: string;
    accessibilityLabel?: any;
    mark?: any;
    state?: any;
    value: string;
    badge?: any;
  }

  export interface DisplayMessage {
    __typename: string;
    lineItems: LineItem[];
  }

  export interface PriceMessage {
    __typename: string;
    value: string;
  }

  export interface Price {
    __typename: string;
    options: Option2[];
    priceMessaging?: any;
    lead: Lead;
    strikeOut: StrikeOut2;
    displayMessages: DisplayMessage[];
    strikeOutType: string;
    priceMessages: PriceMessage[];
  }

  export interface PriceAfterLoyaltyPointsApplied {
    __typename: string;
    options: any[];
    lead?: any;
  }

  export interface PropertyFee {
    __typename: string;
    type: string;
  }

  export interface Reviews {
    __typename: string;
    score: number;
    total: number;
  }

  export interface RateDiscount {
    __typename: string;
    description: string;
  }

  export interface PriceMetadata {
    __typename: string;
    discountType: string;
    rateDiscount: RateDiscount;
    totalDiscountPercentage: number;
  }

  export interface Property {
    __typename: string;
    id: string;
    featuredMessages: any[];
    name: string;
    availability: Availability;
    propertyImage: PropertyImage;
    destinationInfo: DestinationInfo;
    legalDisclaimer?: any;
    listingFooter: ListingFooter;
    mapMarker: MapMarker;
    neighborhood: Neighborhood2;
    offerBadge: OfferBadge;
    offerSummary: OfferSummary;
    pinnedDetails?: any;
    price: Price;
    priceAfterLoyaltyPointsApplied: PriceAfterLoyaltyPointsApplied;
    propertyFees: PropertyFee[];
    reviews: Reviews;
    star: number;
    supportingMessages?: any;
    regionId: string;
    priceMetadata: PriceMetadata;
    saveTripItem?: any;
  }

  export interface Availability2 {
    __typename: string;
    available: boolean;
    minRoomsLeft?: number;
  }

  export interface Image2 {
    __typename: string;
    description: string;
    url: string;
  }

  export interface PropertyImage2 {
    __typename: string;
    alt: string;
    fallbackImage?: any;
    image: Image2;
    subjectId: number;
  }

  export interface DistanceFromDestination2 {
    __typename: string;
    unit: string;
    value: number;
  }

  export interface DestinationInfo2 {
    __typename: string;
    distanceFromDestination: DistanceFromDestination2;
    distanceFromMessaging?: any;
    regionId: string;
  }

  export interface ActionDetails2 {
    __typename: string;
    action: string;
    details?: any;
    title?: any;
    accessibilityLabel?: any;
  }

  export interface Analytics13 {
    __typename: string;
    referrerId: string;
  }

  export interface ListingFooter2 {
    __typename: string;
    text: string;
    linkUrl: string;
    actionDetails: ActionDetails2;
    analytics: Analytics13;
  }

  export interface LatLong2 {
    __typename: string;
    latitude: number;
    longitude: number;
  }

  export interface MapMarker2 {
    __typename: string;
    label: string;
    latLong: LatLong2;
  }

  export interface Neighborhood3 {
    __typename: string;
    name: string;
  }

  export interface IconTemp3 {
    __typename: string;
    id: string;
    description: string;
  }

  export interface Primary3 {
    __typename: string;
    text: string;
    theme_temp: string;
    icon_temp: IconTemp3;
    mark?: any;
  }

  export interface IconTemp4 {
    __typename: string;
    id: string;
    description: string;
  }

  export interface Secondary3 {
    __typename: string;
    text: string;
    theme_temp: string;
    icon_temp: IconTemp4;
    mark?: any;
  }

  export interface OfferBadge2 {
    __typename: string;
    primary: Primary3;
    secondary: Secondary3;
  }

  export interface Mark2 {
    __typename: string;
    id: string;
    token: string;
    description: string;
  }

  export interface Message2 {
    __typename: string;
    message: string;
    theme: string;
    type: string;
    mark: Mark2;
  }

  export interface Attribute2 {
    __typename: string;
    type: string;
  }

  export interface OfferSummary2 {
    __typename: string;
    messages: Message2[];
    attributes: Attribute2[];
  }

  export interface StrikeOut3 {
    __typename: string;
    amount: number;
    formatted: string;
  }

  export interface Disclaimer3 {
    __typename: string;
    value: string;
  }

  export interface Option3 {
    __typename: string;
    strikeOut: StrikeOut3;
    disclaimer: Disclaimer3;
    formattedDisplayPrice: string;
  }

  export interface CurrencyInfo3 {
    __typename: string;
    code: string;
    symbol: string;
  }

  export interface Lead2 {
    __typename: string;
    amount: number;
    currencyInfo: CurrencyInfo3;
    formatted: string;
  }

  export interface CurrencyInfo4 {
    __typename: string;
    code: string;
    symbol: string;
  }

  export interface StrikeOut4 {
    __typename: string;
    amount: number;
    currencyInfo: CurrencyInfo4;
    formatted: string;
  }

  export interface Disclaimer4 {
    __typename: string;
    content: string[];
    title?: any;
  }

  export interface Price4 {
    __typename: string;
    formatted: string;
    accessibilityLabel: string;
  }

  export interface LineItem2 {
    __typename: string;
    disclaimer: Disclaimer4;
    price: Price4;
    role: string;
    accessibilityLabel?: any;
    mark?: any;
    state?: any;
    value: string;
    badge?: any;
  }

  export interface DisplayMessage2 {
    __typename: string;
    lineItems: LineItem2[];
  }

  export interface PriceMessage2 {
    __typename: string;
    value: string;
  }

  export interface Price3 {
    __typename: string;
    options: Option3[];
    priceMessaging?: any;
    lead: Lead2;
    strikeOut: StrikeOut4;
    displayMessages: DisplayMessage2[];
    strikeOutType: string;
    priceMessages: PriceMessage2[];
  }

  export interface PriceAfterLoyaltyPointsApplied2 {
    __typename: string;
    options: any[];
    lead?: any;
  }

  export interface PropertyFee2 {
    __typename: string;
    type: string;
  }

  export interface Reviews2 {
    __typename: string;
    score: number;
    total: number;
  }

  export interface RateDiscount2 {
    __typename: string;
    description: string;
  }

  export interface PriceMetadata2 {
    __typename: string;
    discountType: string;
    rateDiscount: RateDiscount2;
    totalDiscountPercentage: number;
  }

  export interface PropertySearchListing {
    __typename: string;
    id: string;
    featuredMessages: any[];
    name: string;
    availability: Availability2;
    propertyImage: PropertyImage2;
    destinationInfo: DestinationInfo2;
    legalDisclaimer?: any;
    listingFooter: ListingFooter2;
    mapMarker: MapMarker2;
    neighborhood: Neighborhood3;
    offerBadge: OfferBadge2;
    offerSummary: OfferSummary2;
    pinnedDetails?: any;
    price: Price3;
    priceAfterLoyaltyPointsApplied: PriceAfterLoyaltyPointsApplied2;
    propertyFees: PropertyFee2[];
    reviews: Reviews2;
    star?: number;
    supportingMessages?: any;
    regionId: string;
    priceMetadata: PriceMetadata2;
    saveTripItem?: any;
  }

  export interface PricingScheme {
    __typename: string;
    type: string;
  }

  export interface ResultsTitleModel {
    __typename: string;
    header: string;
  }

  export interface ClientSideAnalytics {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Uri {
    __typename: string;
    value: string;
  }

  export interface Link {
    __typename: string;
    clientSideAnalytics: ClientSideAnalytics;
    uri: Uri;
  }

  export interface ResultsSummary {
    __typename: string;
    accessibilityLabel: string;
    value: string;
    link: Link;
  }

  export interface Summary {
    __typename: string;
    matchedPropertiesSize: number;
    pricingScheme: PricingScheme;
    regionCompression?: any;
    loyaltyInfo?: any;
    resultsTitleModel: ResultsTitleModel;
    resultsSummary: ResultsSummary[];
  }

  export interface SearchCriteria {
    __typename: string;
    resolvedDateRange?: any;
  }

  export interface ShoppingContext {
    __typename: string;
    multiItem?: any;
  }

  export interface Map {
    __typename: string;
    subtitle?: any;
  }

  export interface Clickstream {
    __typename: string;
    searchResultsViewed?: any;
  }

  export interface RootObject {
    __typename: string;
    filterMetadata: FilterMetadata;
    universalSortAndFilter: UniversalSortAndFilter;
    properties: Property[];
    propertySearchListings: PropertySearchListing[];
    summary: Summary;
    searchCriteria: SearchCriteria;
    shoppingContext: ShoppingContext;
    map: Map;
    clickstream: Clickstream;
  }
}
