import styled from '@emotion/styled'
import Content from './Content'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border: 1px solid rgb(var(--lsd-border-primary));
  height: 367px;
  box-sizing: border-box;

  margin-top: 24px;
  margin-bottom: 148px;
`

export default function ContentBox() {
  return (
    <Container>
      <Content title="Posts">Content 1</Content>
      <Content title="Pictures">Content 2</Content>
      <Content title="Info">Content 3</Content>
      <Content title="Products">Content 4</Content>
    </Container>
  )
}
