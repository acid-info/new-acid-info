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
  overflow: hidden;

  height: 100%;
  justify-content: space-between;

  &:not(:last-of-type) {
    border-right: 1px solid rgb(var(--lsd-border-primary));
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0 8px;
  box-sizing: border-box;
  overflow: hidden;
`

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 8px;
`

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  white-space: pre-wrap;
  overflow-y: auto;
  scrollbar-width: thin;
`

export default function Content({ title, children }: Props) {
  return (
    <Container>
      <Wrapper>
        <Title variant="body2">{title}</Title>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Wrapper>
      <Button size="large" variant="filled">
        See more
      </Button>
    </Container>
  )
}
