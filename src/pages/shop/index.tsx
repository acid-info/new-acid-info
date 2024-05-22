import ProductsContainer from '@/containers/Products/ProductsContainer'
import {
  MockShopTagResponse,
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
    initialProductList: [],
    availableTags: SHOP_MOCK_TAGS,
    numberOfProducts: 1,
  }
}

export default ShopPage
