import { breakpoints } from '@/configs/ui.configs'
import { Button, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Link from 'next/link'

type Props = {
  title: string
  children: React.ReactNode
  link: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;

  height: 100%;
  justify-content: space-between;
  border: 1px solid rgb(var(--lsd-border-primary));

  &:not(:last-of-type) {
    border-right: none;
  }

  @media (max-width: ${breakpoints.md}px) {
    &:not(:last-of-type) {
      border-right: 1px solid rgb(var(--lsd-border-primary));
    }
  }

  button {
    width: 100%;
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

export default function Content({ title, children, link }: Props) {
  return (
    <Container>
      <Wrapper>
        <Title variant="body2">{title}</Title>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Wrapper>
      <Link href={link}>
        <Button size="large" variant="filled">
          See more
        </Button>
      </Link>
    </Container>
  )
}
