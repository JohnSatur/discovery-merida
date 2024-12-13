export interface Location {
  id:                 number;
  name:               string;
  description:        string;
  noGuests:           number;
  noRooms:            number;
  noBeds:             number;
  noBaths:            number;
  available:          boolean;
  slug:               string;
  pricePerNight?:      number;
  coverPicture:       string;
  descriptionPicture: string;
  gallery:            string[];
  reviews?:            Review[];
  amenities:          string[];
  rating?:             number;
  noReviews?:          number;
  avgCoords:          string;
  airbnbId:            string;
}

export interface Review {
  username:       string;
  comment:        string;
  rating:         number;
  profilePicture: string;
}
