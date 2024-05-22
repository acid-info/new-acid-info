import ProductsContainer from '@/containers/Products/ProductsContainer'
import {
  MockShopTagResponse,
  SHOP_MOCK_PRODUCTS,
  SHOP_MOCK_TAGS,
} from '@/pages/shop/shop.mock.data'
import { Product } from '@/types/product.types'
import { NextPage } from 'next'

type Props = {
  initialProductList: Product[]
  availableTags: MockShopTagResponse
  numberOfProducts: number
}

const ShopPage: NextPage<Props> = (props) => {
  const { numberOfProducts, availableTags, initialProductList } = props

  return (
    <div>
      <ProductsContainer
        productsList={initialProductList}
        tagFilters={availableTags}
        numberOfProducts={numberOfProducts}
      />
    </div>
  )
}

// Using GetInitialProps until frequency of updating and Print-On-Demand vendor is picked
// We can decide later if GetStaticProps is a better fit
ShopPage.getInitialProps = async (): Promise<Props> => {
  return {
    initialProductList: SHOP_MOCK_PRODUCTS,
    availableTags: SHOP_MOCK_TAGS,
    numberOfProducts: SHOP_MOCK_PRODUCTS.length,
  }
}

export default ShopPage
