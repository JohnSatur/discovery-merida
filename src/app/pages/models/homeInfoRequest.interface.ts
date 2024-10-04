export interface HomeInfoRequest {
    data: Data;
    meta: Meta;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    title:           string;
    createdAt:       Date;
    updatedAt:       Date;
    publishedAt:     Date;
    locale:          string;
    heroDescription: string;
    topHousesTitle:  string;
    reviewsTitle:    string;
    faqTitle:        string;
    contactTitle:    string;
    galleryTitle:    string;
}

export interface Meta {
}
