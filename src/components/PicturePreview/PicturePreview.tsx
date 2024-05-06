import styled from '@emotion/styled'

type Props = {
  thumbnail: string
}

const PicturePreview = ({ thumbnail }: Props) => {
  return (
    <Container>
      <img src={thumbnail} alt="Picture" width={94} height={'auto'} />
    </Container>
  )
}

export default PicturePreview

const Container = styled.div`
  position: relative;
  margin: 0 auto;
`
