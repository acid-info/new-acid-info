import { ESortingType } from '@/components/SortDropdown'
import SortDropdown from '@/components/SortDropdown/SortDropdown'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import {
  MediaCount,
  TitleContainer,
} from '@/containers/Articles/StyledComponents'
import ProductContainer from '@/containers/Products/ProductContainer'
import { MockShopTagResponse } from '@/pages/shop/shop.mock.data'
import { Product } from '@/types/product.types'
import { Checkbox, CheckboxGroup, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import { FC, useState } from 'react'

export type ProductsContainerProps = {
  tagFilters: MockShopTagResponse
  productsList: Product[]
  numberOfProducts: number
}

const ProductsContainer: FC<ProductsContainerProps> = (props) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const { productsList, tagFilters, numberOfProducts } = props

  const onFilterChange = (e: any) => {
    setCheckedItems((prevState) => {
      let newState: string[]
      const id = e.target.id

      if (e.target.checked) {
        newState = [...prevState, id]
      } else {
        newState = prevState.filter((val) => val !== id)
      }

      return newState
    })
  }

  return (
    <Container>
      <StyledCheckboxGroup onChange={onFilterChange}>
        <StyledCheckbox
          disabled={true}
          indeterminate={checkedItems.length === 0}
        >
          All
        </StyledCheckbox>
        <StyledCheckbox inputProps={{ id: 'bestsellers' }}>
          Bestsellers
        </StyledCheckbox>
        <StyledCheckbox inputProps={{ id: 'trending' }}>
          Trending
        </StyledCheckbox>
        {tagFilters.map((filter) => (
          <StyledCheckbox inputProps={{ id: filter.id }} key={filter.id}>
            {filter.name}
          </StyledCheckbox>
        ))}
      </StyledCheckboxGroup>
      <TitleContainer>
        <Typography variant="h1">Products</Typography>
        <MediaCount>{numberOfProducts}</MediaCount>
      </TitleContainer>
      <DropdownContainer>
        <SortDropdown sortBy={[ESortingType.DATE]} />
      </DropdownContainer>
      {productsList.map((product) => (
        <ProductContainer key={product.id} product={product} />
      ))}
    </Container>
  )
}

const StyledCheckboxGroup = styled(CheckboxGroup)`
  & > span {
    // Disabling the checkbox group label
    display: none;
  }

  display: flex;
  flex-wrap: wrap;
  align-self: start;
  max-height: 128px;

  @media (max-width: ${breakpoints.sm}px) {
    max-height: none;
  }
`

const StyledCheckbox = styled(Checkbox)`
  margin-right: 43px;
  padding-top: 6px;
  padding-bottom: 6px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - ${uiConfigs.navbarRenderedHeight}px);

  margin-top: 64px;

  @media (max-width: ${breakpoints.lg}px) {
    margin-inline: 10px;
    margin-top: 16px;
  }
`

const DropdownContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-right: auto;
  gap: 8px;

  @media (max-width: ${breakpoints.sm}px) {
    .lsd-dropdown--medium {
      width: calc(50vw - 14px);
    }
  }
`

export default ProductsContainer
