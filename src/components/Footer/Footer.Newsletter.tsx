import { Button, TextField, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'

export const FooterNewsletter = () => {
  return (
    <Container>
      <Typography variant="body2">Subscribe to Newsletter</Typography>
      <UserInput>
        <TextField placeholder="Email">TextField</TextField>
        <Button size="large" variant="filled">
          Subscribe
        </Button>
      </UserInput>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  height: 88px;
  margin-top: 50px;
  padding: 8px 8px 40px 8px;

  border: 1px solid rgb(var(--lsd-border-primary));

  align-items: flex-start;
`

const UserInput = styled.div`
  display: flex;
  gap: 8px;
`
