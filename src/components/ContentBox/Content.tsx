import { Button, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'

type Props = {
  title: string
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  height: 100%;
  justify-content: space-between;

  &:not(:last-of-type) {
    border-right: 1px solid rgb(var(--lsd-border-primary));
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0 8px;
  box-sizing: border-box;
`

export default function Content({ title, children }: Props) {
  return (
    <Container>
      <TitleContainer>
        <Typography variant="body2">{title}</Typography>
        {children}
      </TitleContainer>
      <Button size="large" variant="filled">
        See more
      </Button>
    </Container>
  )
}
