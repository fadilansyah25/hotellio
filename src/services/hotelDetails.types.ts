export declare module HotelDetailsTypes {
  export interface LatLong {
    __typename: string;
    latitude: number;
    longitude: number;
  }

  export interface MapMarker {
    __typename: string;
    icon: string;
    latLong: LatLong;
    type: string;
  }

  export interface PoiContent {
    __typename: string;
    description?: any;
    id: string;
    image?: any;
  }

  export interface Marker {
    __typename: string;
    mapMarker: MapMarker;
    poiContent: PoiContent;
    subtitle: string;
    title: string;
  }

  export interface Map {
    __typename: string;
    markers: Marker[];
  }

  export interface ChildAndBed {
    __typename: string;
    body: string[];
    descriptions: any[];
    title?: any;
  }

  export interface NeedToKnow {
    __typename: string;
    body: string[];
    descriptions: any[];
    title: string;
  }

  export interface Pets {
    __typename: string;
    body: string[];
    descriptions: any[];
    title: string;
  }

  export interface ShouldMention {
    __typename: string;
    body: string[];
    descriptions: any[];
    title: string;
  }

  export interface Policies {
    __typename: string;
    checkinEnd?: any;
    checkinInstructions: string[];
    checkinMinAge?: any;
    checkinStart?: any;
    checkoutTime?: any;
    childAndBed: ChildAndBed;
    needToKnow: NeedToKnow;
    paymentOptions: any[];
    pets: Pets;
    shouldMention: ShouldMention;
  }

  export interface StarRatingIcon {
    __typename: string;
    token: string;
  }

  export interface Icon {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface PropertyRating {
    __typename: string;
    rating: number;
    accessibility: string;
    icon: Icon;
  }

  export interface Overview {
    __typename: string;
    vipMessaging: string;
    inventoryType?: any;
    accessibilityLabel: string;
    label?: any;
    propertyRating: PropertyRating;
  }

  export interface Header {
    __typename: string;
    icon?: any;
    text: string;
    subText?: any;
  }

  export interface Header2 {
    __typename: string;
    text: string;
    subText?: any;
    mark?: any;
  }

  export interface Icon2 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Item {
    __typename: string;
    text: string;
    state?: any;
    moreInfo?: any;
    icon?: any;
  }

  export interface Content {
    __typename: string;
    header: Header2;
    icon: Icon2;
    jumpLink?: any;
    items: Item[];
  }

  export interface Amenity {
    __typename: string;
    title: string;
    sections: any[];
    header: Header;
    contents: Content[];
  }

  export interface Header3 {
    __typename: string;
    text: string;
    subText?: any;
    mark?: any;
  }

  export interface Icon3 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Item2 {
    __typename: string;
    text: string;
    state?: any;
    moreInfo?: any;
    icon: Icon3;
  }

  export interface TopAmenities {
    __typename: string;
    header: Header3;
    icon?: any;
    jumpLink?: any;
    items: Item2[];
  }

  export interface Icon4 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface ClientSideAnalytics {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Trigger {
    __typename: string;
    value: string;
    icon: Icon4;
    clientSideAnalytics: ClientSideAnalytics;
  }

  export interface Toolbar {
    __typename: string;
    title: string;
  }

  export interface AmenitiesDialog {
    __typename: string;
    trigger: Trigger;
    toolbar: Toolbar;
  }

  export interface Header4 {
    __typename: string;
    text: string;
    subText?: any;
    mark?: any;
  }

  export interface Icon5 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Item3 {
    __typename: string;
    text: string;
    state?: any;
    moreInfo?: any;
    icon: Icon5;
  }

  export interface Highlight {
    __typename: string;
    header: Header4;
    icon?: any;
    jumpLink?: any;
    items: Item3[];
  }

  export interface Header5 {
    __typename: string;
    text: string;
    subText?: any;
    mark?: any;
  }

  export interface Icon6 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Item4 {
    __typename: string;
    text: string;
    state?: any;
    moreInfo?: any;
    icon?: any;
  }

  export interface Property {
    __typename: string;
    header: Header5;
    icon: Icon6;
    jumpLink?: any;
    items: Item4[];
  }

  export interface Takeover {
    __typename: string;
    amenityClosures?: any;
    highlight: Highlight[];
    property: Property[];
  }

  export interface Amenities {
    __typename: string;
    amenities: Amenity[];
    topAmenities: TopAmenities;
    propertyContentPreferences?: any;
    amenitiesDialog: AmenitiesDialog;
    takeover: Takeover;
  }

  export interface Address {
    __typename: string;
    addressLine: string;
    city: string;
    province: string;
    countryCode: string;
    firstAddressLine: string;
    secondAddressLine: string;
  }

  export interface Coordinates {
    __typename: string;
    latitude: number;
    longitude: number;
  }

  export interface MultiCityRegion {
    __typename: string;
    id: string;
  }

  export interface WhatsAround {
    __typename: string;
    editorial?: any;
  }

  export interface Icon7 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Trigger2 {
    __typename: string;
    value: string;
    icon: Icon7;
    clientSideAnalytics?: any;
  }

  export interface MapDialog {
    __typename: string;
    trigger: Trigger2;
    toolbar?: any;
  }

  export interface StaticImage {
    __typename: string;
    description: string;
    url: string;
    aspectRatio?: any;
  }

  export interface Location {
    __typename: string;
    address: Address;
    coordinates: Coordinates;
    multiCityRegion: MultiCityRegion;
    whatsAround: WhatsAround;
    mapDialog: MapDialog;
    staticImage: StaticImage;
  }

  export interface Summary {
    __typename: string;
    fees?: any;
    id: string;
    name: string;
    map: Map;
    policies: Policies;
    telesalesPhoneNumber: string;
    bannerMessage?: any;
    latinAlphabetName: string;
    tagline: string;
    starRatingIcon: StarRatingIcon;
    overview: Overview;
    featuredMessages?: any;
    spaceOverview?: any;
    amenities: Amenities;
    cleaningAndSafety?: any;
    location: Location;
    nearbyPOIs?: any;
    lodgingChatbot?: any;
  }

  export interface Image2 {
    __typename: string;
    url: string;
    description: string;
  }

  export interface Image {
    __typename: string;
    accessibilityText: string;
    actionLabel: string;
    imageId?: any;
    image: Image2;
  }

  export interface Icon8 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Trigger3 {
    __typename: string;
    value: string;
    icon: Icon8;
    clientSideAnalytics?: any;
  }

  export interface Icon9 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Toolbar2 {
    __typename: string;
    title: string;
    icon: Icon9;
    clientSideAnalytics?: any;
  }

  export interface ThumbnailGalleryDialog {
    __typename: string;
    trigger: Trigger3;
    toolbar: Toolbar2;
  }

  export interface Trigger4 {
    __typename: string;
    value: string;
    icon?: any;
    clientSideAnalytics?: any;
  }

  export interface Icon10 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Toolbar3 {
    __typename: string;
    title: string;
    icon: Icon10;
    clientSideAnalytics?: any;
  }

  export interface MediaGalleryDialog {
    __typename: string;
    trigger: Trigger4;
    toolbar: Toolbar3;
  }

  export interface PropertyGallery {
    __typename: string;
    imagesGrouped?: any;
    images: Image[];
    accessibilityLabel: string;
    thumbnailGalleryDialog: ThumbnailGalleryDialog;
    mediaGalleryDialog: MediaGalleryDialog;
  }

  export interface OverallScoreWithDescriptionA11y {
    __typename: string;
    value: string;
  }

  export interface PropertyReviewCountDetails {
    __typename: string;
    shortDescription: string;
  }

  export interface Subtitle {
    __typename: string;
    text: string;
  }

  export interface HighlightMessage {
    __typename: string;
    subtitle: Subtitle;
  }

  export interface ClientSideAnalytics2 {
    __typename: string;
    linkName: string;
    referrerId: string;
  }

  export interface Trigger5 {
    __typename: string;
    clientSideAnalytics: ClientSideAnalytics2;
  }

  export interface SeeAllAction {
    __typename: string;
    trigger: Trigger5;
  }

  export interface Summary2 {
    __typename: string;
    overallScoreWithDescriptionA11y: OverallScoreWithDescriptionA11y;
    propertyReviewCountDetails: PropertyReviewCountDetails;
    highlightMessage: HighlightMessage;
    seeAllAction: SeeAllAction;
  }

  export interface ReviewInfo {
    __typename: string;
    summary: Summary2;
  }

  export interface Header6 {
    __typename: string;
    icon?: any;
    text: string;
    subText?: any;
  }

  export interface Icon11 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Header7 {
    __typename: string;
    text: string;
    subText?: any;
    icon: Icon11;
    headerImage?: any;
  }

  export interface Primary {
    __typename: string;
    value: string;
    accessibilityLabel?: any;
    icon?: any;
  }

  export interface Content2 {
    __typename: string;
    primary: Primary;
    secondary?: any;
  }

  export interface Primary2 {
    __typename: string;
    value: string;
    accessibilityLabel?: any;
    icon?: any;
  }

  export interface Content3 {
    __typename: string;
    primary: Primary2;
    secondary?: any;
  }

  export interface Item5 {
    __typename: string;
    contents: Content2[];
    content: Content3;
  }

  export interface Element {
    __typename: string;
    header: Header7;
    items: Item5[];
  }

  export interface BodySubSection {
    __typename: string;
    elements: Element[];
    expando?: any;
    maxColumns: number;
  }

  export interface Section {
    __typename: string;
    sectionName: string;
    header: Header6;
    bodySubSections: BodySubSection[];
    action?: any;
  }

  export interface Cleanliness {
    __typename: string;
    sectionName: string;
    sections: Section[];
  }

  export interface Header8 {
    __typename: string;
    icon?: any;
    text: string;
    subText?: any;
  }

  export interface Icon12 {
    __typename: string;
    id: string;
    description: string;
    size?: any;
    token: string;
    theme?: any;
  }

  export interface Header9 {
    __typename: string;
    text: string;
    subText?: any;
    icon: Icon12;
    headerImage?: any;
  }

  export interface Primary3 {
    __typename: string;
    value: string;
    accessibilityLabel?: any;
    icon?: any;
  }

  export interface Content4 {
    __typename: string;
    text: string;
    markupType: string;
    primary: Primary3;
    secondary?: any;
  }

  export interface Primary4 {
    __typename: string;
    value: string;
    accessibilityLabel?: any;
    icon?: any;
  }

  export interface Content5 {
    __typename: string;
    primary: Primary4;
    secondary?: any;
  }

  export interface Item6 {
    __typename: string;
    content: Content4;
    contents: Content5[];
  }

  export interface Element2 {
    __typename: string;
    header: Header9;
    items: Item6[];
  }

  export interface BodySubSection2 {
    __typename: string;
    elements: Element2[];
    expando?: any;
    maxColumns: number;
  }

  export interface Section2 {
    __typename: string;
    sectionName: string;
    header: Header8;
    bodySubSections: BodySubSection2[];
    action?: any;
  }

  export interface AboutThisProperty {
    __typename: string;
    sectionName?: any;
    sections: Section2[];
  }

  export interface Header10 {
    __typename: string;
    icon?: any;
    text: string;
    subText?: any;
  }

  export interface Header11 {
    __typename: string;
    text: string;
    subText?: any;
    icon?: any;
    headerImage?: any;
  }

  export interface Primary5 {
    __typename: string;
    value: string;
    accessibilityLabel?: any;
    icon?: any;
  }

  export interface Content6 {
    __typename: string;
    text: string;
    markupType: string;
    primary: Primary5;
    secondary?: any;
  }

  export interface Item7 {
    __typename: string;
    content: Content6;
  }

  export interface Element3 {
    __typename: string;
    header: Header11;
    items: Item7[];
  }

  export interface BodySubSection3 {
    __typename: string;
    elements: Element3[];
    expando?: any;
    maxColumns: number;
  }

  export interface Section3 {
    __typename: string;
    sectionName?: any;
    header: Header10;
    bodySubSections: BodySubSection3[];
    action?: any;
  }

  export interface Policies2 {
    __typename: string;
    sectionName: string;
    sections: Section3[];
  }

  export interface PropertyContentSectionGroups {
    __typename: string;
    cleanliness: Cleanliness;
    aboutThisProperty: AboutThisProperty;
    policies: Policies2;
    importantInfo?: any;
  }

  export interface RootObject {
    __typename: string;
    summary: Summary;
    propertyGallery: PropertyGallery;
    reviewInfo: ReviewInfo;
    propertyContentSectionGroups: PropertyContentSectionGroups;
    saveTripItem?: any;
  }
}
