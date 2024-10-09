export interface StrapiResponse {
  data: Location[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
}

export interface Location {
  id:            number;
  documentId:    string;
  name:          string;
  description:   string;
  noGuests:      number;
  noRooms:       number;
  noBeds:        number;
  noBaths:       number;
  available:     boolean;
  slug:          string;
  pricePerNight: number;
  createdAt:     Date;
  updatedAt:     Date;
  publishedAt:   Date;
  locale:        LOCALE;
  reviews?:       Review[];
  amenities?:     Amenity[];
  coverPicture?:  Picture;
  descriptionPicture: Picture;
  gallery?:       Picture[];
}

export interface Amenity {
  id:   number;
  name: string;
}

export interface Picture {
  id:                number;
  documentId:        string;
  name:              string;
  alternativeText?:  string;
  caption?:          string;
  width:             number;
  height:            number;
  formats:           PictureFormats;
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
  publishedAt:       Date;
  locale:            null;
}

export enum EXT {
  Jpg = ".jpg",
  Webp = ".webp",
}

export enum LOCALE {
  esMX = "es-MX",
  en = "en"
}

export interface PictureFormats {
  thumbnail: FormatMeta;
  medium?:   FormatMeta;
  small?:     FormatMeta;
  large?:    FormatMeta;
}

export interface FormatMeta {
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

export interface Review {
  id:             number;
  username:       string;
  comment:        string;
  rating:         number;
  profilePicture: Picture;
}
