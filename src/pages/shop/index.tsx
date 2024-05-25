import { SEO } from '@/components/SEO'
import ProductsContainer from '@/containers/Products/ProductsContainer'
import {
  MockShopTagResponse,
  SHOP_MOCK_HIGHLIGHT_TAGS,
  SHOP_MOCK_PRODUCTS,
  SHOP_MOCK_PRODUCT_TAGS,
} from '@/data/shop.mock.data'
import { EProductTags, Product } from '@/types/product.types'
import { NextPage } from 'next'

type Props = {
  initialProductList: Product[]
  availableHighlightTags: MockShopTagResponse
  availableProductTags: MockShopTagResponse<EProductTags>
  numberOfProducts: number
}

const ShopPage: NextPage<Props> = (props) => {
  const {
    numberOfProducts,
    availableProductTags,
    availableHighlightTags,
    initialProductList,
  } = props

  return (
    <>
      <SEO title="Shop | Acid.info" pagePath={`/shop`} />
      <ProductsContainer
        productsList={initialProductList}
        tagFilters={availableProductTags}
        highlightFilters={availableHighlightTags}
        numberOfProducts={numberOfProducts}
      />
    </>
  )
}

// Using GetInitialProps until frequency of updating and Print-On-Demand vendor is picked
// We can decide later if GetStaticProps is a better fit
ShopPage.getInitialProps = async (): Promise<Props> => {
  return {
    initialProductList: SHOP_MOCK_PRODUCTS,
    availableHighlightTags: SHOP_MOCK_HIGHLIGHT_TAGS,
    availableProductTags: SHOP_MOCK_PRODUCT_TAGS,
    numberOfProducts: SHOP_MOCK_PRODUCTS.length,
  }
}

export default ShopPage
