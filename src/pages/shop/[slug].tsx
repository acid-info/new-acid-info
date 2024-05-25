import { SEO } from '@/components/SEO'
import { ProductContainer } from '@/containers/Products/ProductContainer'
import { SHOP_MOCK_PRODUCTS } from '@/data/shop.mock.data'
import { Product } from '@/types/product.types'

const ProductPage = (product: Product) => {
  return (
    <>
      <SEO
        title={`${product.title} | Acid.info`}
        pagePath={`/shop/${product.slug}`}
      />
      <ProductContainer data={product} />
    </>
  )
}

export async function getStaticPaths() {
  const paths: any = []

  for (const product of SHOP_MOCK_PRODUCTS) {
    paths.push({ params: { slug: product.slug } })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params

  const product = SHOP_MOCK_PRODUCTS.find((item) => item.slug === slug)

  return {
    props: product,
  }
}

export default ProductPage
