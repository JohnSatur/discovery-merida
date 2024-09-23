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
  name:          string;
  description:   string;
  noGuests:      number;
  noBeds:        number;
  noBaths:       number;
  createdAt:     Date;
  updatedAt:     Date;
  publishedAt:   Date;
  locale:        string;
  available:     boolean;
  slug:          string;
  mapsURL:       string;
  pricePerNight: number;
  photos:        Photos;
  amenities:     Amenity[];
  reviews:       Review[];
}

export interface Amenity {
  id:          number;
  amenityName: string;
}

export interface Photos {
  data: Photo[];
}

export interface Photo {
  id:         number;
  attributes: PhotoAttributes;
}

export interface PhotoAttributes {
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
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  JPEG = ".JPEG",
  Jpg = ".jpg",
}

export interface PurpleFormats {
  thumbnail: Large;
  small:     Large;
  large?:    Large;
  medium?:   Large;
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
}

export interface Review {
  id:             number;
  username:       string;
  comment:        string;
  rating:         number;
  profilePicture: ProfilePicture;
}

export interface ProfilePicture {
  data: Data;
}

export interface Data {
  id:         number;
  attributes: DataAttributes;
}

export interface DataAttributes {
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
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export interface FluffyFormats {
  thumbnail: Large;
}
