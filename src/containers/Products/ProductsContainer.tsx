import PageTitle from '@/components/PageTitle/PageTitle'
import ProductBox from '@/components/Products/ProductBox'
import {
  ESortingDirection,
  ESortingType,
  SortDropdownOnChangeHandler,
} from '@/components/SortDropdown'
import SortDropdown from '@/components/SortDropdown/SortDropdown'
import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import { MockShopTagResponse } from '@/data/shop.mock.data'
import { Product } from '@/types/product.types'
import { SelectOption } from '@/types/select.types'
import { arrayIncludesAnyElementFromOtherArray } from '@/utils/general.utils'
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  Typography,
} from '@acid-info/lsd-react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FC, useMemo, useState } from 'react'

export type ProductsContainerProps = {
  highlightFilters: MockShopTagResponse
  tagFilters: MockShopTagResponse
  productsList: Product[]
  numberOfProducts: number
}

const ProductsContainer: FC<ProductsContainerProps> = (props) => {
  const { highlightFilters, tagFilters, numberOfProducts } = props

  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [productList, setProductList] = useState(props.productsList)

  const filterOptions = useMemo(() => {
    const allFilterOptions: SelectOption[] = []

    highlightFilters.forEach((opt) => {
      allFilterOptions.push({
        name: opt.name,
        value: opt.id,
      })
    })

    tagFilters.forEach((opt) => {
      allFilterOptions.push({
        name: opt.name,
        value: opt.id,
      })
    })

    return allFilterOptions
  }, [tagFilters, highlightFilters])

  const onSortChange: SortDropdownOnChangeHandler = (type, direction) => {
    if (type === ESortingType.DATE) {
      setProductList((prevState) => {
        const newState = [...prevState]

        newState.sort((a, b) => {
          if (direction === ESortingDirection.ASCENDING) {
            return a.lastUpdate - b.lastUpdate
          } else {
            return b.lastUpdate - a.lastUpdate
          }
        })

        return newState
      })
    }
  }

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

  const renderProducts = () => {
    return productList.map((product) => {
      // @TODO Remove this, temporary until Backend with SQL can do it properly and efficiently
      const found = arrayIncludesAnyElementFromOtherArray(
        product.tags,
        checkedItems,
      )
      if (!found) {
        return null
      }

      return <ProductBox key={product.id} product={product} />
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
        {filterOptions.map((filter) => (
          <StyledCheckbox
            inputProps={{ id: filter.value }}
            key={filter.value}
            checked={checkedItems.includes(filter.value)}
          >
            {filter.name}
          </StyledCheckbox>
        ))}
      </StyledCheckboxGroup>
      <PageTitle numberOfElements={numberOfProducts}>
        <Typography variant="h1">Products</Typography>
      </PageTitle>
      <DropdownContainer>
        <SortDropdown sortBy={[ESortingType.DATE]} onChange={onSortChange} />
        <FilterDropdown
          value={checkedItems}
          onChange={(values) => {
            setCheckedItems(values as string[])
          }}
          size={'medium'}
          triggerLabel={'All'}
          options={filterOptions}
          multi={true}
        />
      </DropdownContainer>
      <GridContainer>{renderProducts()}</GridContainer>
      <CTAButton size="large" variant="filled">
        See more
      </CTAButton>
    </Container>
  )
}

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

const FilterDropdown = styled(Dropdown)`
  display: none;
  @media (max-width: ${breakpoints.sm}px) {
    display: block;
  }
`

export const CTAButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
  gap: 8px;
`

const gridBreakpointMapping = (numberOfElements: number) => {
  return css`
    grid-template-columns: repeat(${numberOfElements}, 1fr);
    & > div:nth-last-child(-n + ${numberOfElements}) {
      // Last N elements
      border-bottom-width: 1px;
    }

    & > div:nth-child(${numberOfElements}n) {
      // Every Nth element (end of row)
      border-right-width: 1px;
    }

    & > div:last-child {
      // Last one in edge case
      border-right-width: 1px;
    }
  `
}

export const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  gap: 0;
  ${gridBreakpointMapping(4)};

  @media (max-width: ${breakpoints.lg}px) {
    ${gridBreakpointMapping(3)};
  }
  @media (max-width: ${breakpoints.md}px) {
    ${gridBreakpointMapping(2)};
  }
  @media (max-width: ${breakpoints.sm}px) {
    ${gridBreakpointMapping(1)};
  }
`
const StyledCheckboxGroup = styled(CheckboxGroup)`
  & > span {
    // Disabling the checkbox group label
    display: none;
  }

  display: flex;
  flex-wrap: wrap;
  align-self: start;
  max-height: 128px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`

const StyledCheckbox = styled(Checkbox)`
  margin-right: 43px;
  padding-top: 6px;
  padding-bottom: 6px;
`

export default ProductsContainer
