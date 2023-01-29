export interface OfferBestMarket {
  title:string,
  tags:string,

}

export interface OfferTopPromotion {
  title:string,
  description:string,
  price:string,
  startDate:string,
  endDate:string,
}

export interface Offer {
  title: string,
  items: OfferBestMarket[] | OfferTopPromotion[];
}
