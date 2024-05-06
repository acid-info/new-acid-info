import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import Image from 'next/image'

type Props = {
  thumbnail: string
  date: string
  description: string
}

const PostPreview = ({ thumbnail, date, description }: Props) => {
  return (
    <Container>
      <Image src={thumbnail} alt="Post thumbnail" width={54.5} height={34} />
      <Typography variant="body2">{date}</Typography>
      <Description variant="body2">{description}</Description>
    </Container>
  )
}

export default PostPreview

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  margin-bottom: 8px;
`

const Description = styled(Typography)`
  text-decoration: underline;
`
