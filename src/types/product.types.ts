export enum EProductTags {
  DRESSES = 'DRESSES',
  GIFT_IDEAS = 'GIFT_IDEAS',
  JEWELRY = 'JEWELRY',
  LIFESTYLE = 'LIFESTYLE',
  TOPS = 'TOPS',
  BOTTOMS = 'BOTTOMS',
  ACTIVEWEAR = 'ACTIVEWEAR',
  LOUNGERWEAR = 'LOUNGERWEAR',
  UNISEX = 'UNISEX',
  ACID = 'ACID',
}

// In the future, this can be mapped to response of the API endpoint
export type Product = {
  id: string
  title: string
  /*
  For the sake of mock date we'll keep the price a string for now,
  but could potentially change depending on how api treats it
  and how it needs to be parsed later on (multi-currency etc.)
   */
  price: string
  tags: EProductTags[]
  // unix timestamp of last time of update
  lastUpdate: number
  imgLink: string[]
  slug: string
  description?: string
  size?: string[]
  color?: string[]
  condition?: string
}
