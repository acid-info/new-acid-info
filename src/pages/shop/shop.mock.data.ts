import { EProductTags } from '@/types/product.types'

export type MockShopTagResponse = {
  name: string
  id: string
}[]

export const SHOP_MOCK_TAGS = [
  {
    name: 'Dresses',
    id: EProductTags.DRESSES,
  },
  {
    name: 'Gift Ideas',
    id: EProductTags.GIFT_IDEAS,
  },
  {
    name: 'Jewelry',
    id: EProductTags.JEWELRY,
  },
  {
    name: 'Lifestyle',
    id: EProductTags.LIFESTYLE,
  },
  {
    name: 'Tops',
    id: EProductTags.TOPS,
  },
  {
    name: 'Bottoms',
    id: EProductTags.BOTTOMS,
  },
  {
    name: 'Activewear',
    id: EProductTags.ACTIVEWEAR,
  },
  {
    name: 'Loungewear',
    id: EProductTags.LOUNGERWEAR,
  },
  {
    name: 'Unisex',
    id: EProductTags.UNISEX,
  },
  {
    name: 'ACID®',
    id: EProductTags.ACID,
  },
]
