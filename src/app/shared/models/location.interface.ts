
export interface StrapiResponse {
  data: Location[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

export interface Location {
  id:         number;
  attributes: LocationAttributes;
}

export interface LocationAttributes {
  name:               string;
  description:        string;
  noGuests:           number;
  noBeds:             number;
  noBaths:            number;
  createdAt:          Date;
  updatedAt:          Date;
  publishedAt:        Date;
  locale:             Locale;
  available:          boolean;
  slug:               string;
  mapsURL:            string;
  pricePerNight:      number;
  collagePhotos:      CollagePhotos;
  amenities:          Amenity[];
  reviews:            Review[];
  cover:              Cover;
  descriptionPicture: DescriptionPicture;
}

export interface Amenity {
  id:          number;
  amenityName: string;
}

export interface CollagePhotos {
  data: DAT[] | null;
}

export interface DAT {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           PurpleFormats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          Provider;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  Jpg = ".jpg",
  Webp = ".webp",
}

export interface PurpleFormats {
  thumbnail?: Large;
  medium?:   Large;
  small?:     Large;
  large?:    Large;
}

export interface Large {
  name:        string;
  hash:        string;
  ext:         EXT;
  mime:        MIME;
  path:        null;
  width:       number;
  height:      number;
  size:        number;
  sizeInBytes: number;
  url:         string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImageWebp = "image/webp",
}

export enum Provider {
  Local = "local",
}

export interface Cover {
  data: DAT | null;
}

export interface DescriptionPicture {
  data: DescriptionPictureData | null;
}

export interface DescriptionPictureData {
  id:         number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           FluffyFormats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          Provider;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface FluffyFormats {
  small:     Large;
  thumbnail: Large;
}

export enum Locale {
  EsMX = "es-MX",
}

export interface Review {
  id:             number;
  username:       string;
  comment:        string;
  rating:         number;
  profilePicture: ProfilePicture;
}

export interface ProfilePicture {
  data: ProfilePictureData;
}

export interface ProfilePictureData {
  id:         number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           TentacledFormats | null;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          Provider;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface TentacledFormats {
  thumbnail: Large;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
