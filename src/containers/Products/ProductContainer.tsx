import ProductBox from '@/components/Products/ProductBox'
import { breakpoints } from '@/configs/ui.configs'
import { SHOP_MOCK_PRODUCTS } from '@/data/shop.mock.data'
import { Product } from '@/types/product.types'
import {
  Breadcrumb,
  Button,
  TabItem,
  Tabs,
  Typography,
} from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export type Props = {
  data: Product
}

export const ProductContainer: React.FC<Props> = ({ data }: Props) => {
  return (
    <Container>
      <Breadcrumb
        options={[
          {
            name: `Shop`,
            value: `Shop`,
            link: `/shop`,
          },
          {
            name: data?.title,
            value: data?.title,
            link: `/shop/${data?.slug}`,
          },
        ]}
      />
      <ProductSection>
        <ProductImageSection>
          {data?.imgLink?.map((img, index) => (
            <img key={index} src={img} alt={data?.title} />
          ))}
        </ProductImageSection>
        <ProductInfoSection>
          <Header>
            <Tag>Low Stock</Tag>
            <Title component="h1" variant="h2">
              {data?.title}
            </Title>
          </Header>
          <Price component="p" variant="subtitle1">
            ${data?.price}
          </Price>
          <Description component="p" variant="body2">
            {data?.description}
          </Description>
          <InfoContainer>
            <div>
              <Label variant="body2">Size:</Label>
              <SizeTabs activeTab={data?.size?.[0]}>
                {data?.size?.map((size, index) => (
                  <TabItem key={index} name={size}>
                    {size}
                  </TabItem>
                ))}
              </SizeTabs>
            </div>
            <div>
              <Label variant="body2">Condition:</Label>
              <Typography variant="body2">{data?.condition}</Typography>
            </div>
            <div>
              <Label variant="body2">Color:</Label>
              <div>
                {data?.color?.map((color, index) => (
                  <Color key={index} variant="body2">
                    {color}
                  </Color>
                ))}
              </div>
            </div>
          </InfoContainer>
          <ButtonsContainer>
            <Button>Add to cart</Button>
            <Button variant="filled">Buy</Button>
          </ButtonsContainer>
        </ProductInfoSection>
      </ProductSection>
      <RelatedProductsSection>
        <div>
          <Typography variant="h3">Related Products</Typography>
          <Link href="/shop">
            <Button size="small">See all</Button>
          </Link>
        </div>
        <div>
          {SHOP_MOCK_PRODUCTS.slice(0, 8).map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>
      </RelatedProductsSection>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  margin-inline: auto;

  @media (max-width: ${breakpoints.md}px) {
    margin-inline: 10px;
    margin-top: 16px;
  }
`

const ProductSection = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 16px;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
  }
`

const ProductImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  img {
    position: relative;
    max-width: 529px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: row;
    gap: 8px;
    overflow-x: auto;

    width: calc(100% + 20px);
    margin-left: -10px;

    img {
      max-width: 100%;
    }
  }
`

const ProductInfoSection = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  width: 530px;
  border: 1px solid rgb(var(--lsd-theme-primary));
  height: fit-content;

  @media (max-width: ${breakpoints.md}px) {
    width: calc(100% - 32px);
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`

const Tag = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background: #f06704;

  font-size: 12px;
  color: #fff;
  font-weight: 400;
  line-height: 16px;

  width: fit-content;
`

const Title = styled(Typography)`
  white-space: pre-line;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 20px;
    line-height: 28px;
  }
`

const Price = styled(Typography)`
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 14px;
    line-height: 20px;
  }
`

const Description = styled(Typography)`
  white-space: pre-line;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
  margin-bottom: 48px;

  & > div {
    display: flex;
    align-items: center;
  }
`

const Label = styled(Typography)`
  width: 100px;
`

const SizeTabs = styled(Tabs)`
  margin-bottom: 16px;
`

const Color = styled(Typography)`
  &:not(:last-child) {
    &::after {
      content: ',';
      margin-right: 4px;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  button {
    width: 100%;
  }
`

const RelatedProductsSection = styled.div`
  margin-top: 76px;
  margin-bottom: 66px;

  & > div:first-of-type {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    align-items: center;
  }

  & > div:last-of-type {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
    border-right: 1px solid rgb(var(--lsd-border-primary));
  }

  button {
    font-size: 14px;
    padding: 4px 12px;
  }

  @media (max-width: ${breakpoints.lg}px) {
    display: none;
  }
`
