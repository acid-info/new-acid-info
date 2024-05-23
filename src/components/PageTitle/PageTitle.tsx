import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  numberOfElements?: number
}>

const PageTitle: FC<Props> = (props) => {
  const { children, numberOfElements } = props

  return (
    <TitleContainer>
      {children}
      {numberOfElements != undefined && <Count>{numberOfElements}</Count>}
    </TitleContainer>
  )
}

export const TitleContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  margin-bottom: 32px;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 24px;
  }
`

export const Count = styled.div`
  display: flex;
  width: 40px;
  height: 28px;

  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;

  background-color: rgb(var(--lsd-theme-primary));
  color: white;
  border-radius: 22px;
`

export default PageTitle
