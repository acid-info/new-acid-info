import { EProductTags, Product } from '@/types/product.types'

export type MockShopTagResponse<ID = string> = {
  name: string
  id: ID
}[]

export const SHOP_MOCK_HIGHLIGHT_TAGS: MockShopTagResponse = [
  {
    name: 'Bestsellers',
    id: 'bestsellers',
  },
  {
    name: 'Trending',
    id: 'trending',
  },
]

export const SHOP_MOCK_PRODUCT_TAGS: MockShopTagResponse<EProductTags> = [
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

const pictures = [
  '/mock/products/hat-1.png',
  '/mock/products/hat-2.png',
  '/mock/products/shirt-1.png',
  '/mock/products/shirt-2.png',
]

const currentDate = Date.now()

export const SHOP_MOCK_PRODUCTS: Product[] = SHOP_MOCK_PRODUCT_TAGS.map(
  (mockTag, index) => {
    return {
      id: index.toString(),
      title: `${mockTag.name} Product`,
      price: '10$',
      tags: [mockTag.id],
      lastUpdate: currentDate - index,
      imgLink: pictures[Math.floor(Math.random() * pictures.length)],
      slug: `product-${index + 1}`,
    }
  },
)
