import { breakpoints } from '@/configs/ui.configs'
import { Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import { Grid } from '../Grid'
import { PicturePreview } from '../PicturePreview'
import { PostPreview } from '../PostPreview'
import { ProductPreview } from '../ProductPreview'
import Content from './Content'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  height: 367px;
  box-sizing: border-box;

  margin-top: 24px;
  margin-bottom: 148px;

  @media (max-width: ${breakpoints.md}px) {
    display: flex;
    height: auto;
    flex-direction: column;
    gap: 16px;
  }
`

export default function ContentBox() {
  return (
    <Container>
      <Content title="Posts" link="/articles">
        <PostPreview
          thumbnail="/home/post-preview.png"
          date="2021-09-01"
          description="In 2019 I co-created the game Cheeze Wizards. A project aimed to dig deeper into blockchain native games. After CryptoKitties, we were motivated to explore what other game experiences could be created with blockchain technology."
        />
        <PostPreview
          thumbnail="/home/post-preview.png"
          date="2021-09-01"
          description="In 2019 I co-created the game Cheeze Wizards. A project aimed to dig deeper into blockchain native games. After CryptoKitties, we were motivated to explore what other game experiences could be created with blockchain technology."
        />
      </Content>
      <Content title="Pictures" link="/media">
        <PicturePreview thumbnail="/home/picture-preview.png" />
        <PicturePreview thumbnail="/home/picture-preview.png" />
        <PicturePreview thumbnail="/home/picture-preview.png" />
      </Content>
      <Content title="Info" link="/about">
        <Typography variant="body2">
          {`Acid is designing the future. The future is a second enlightenment of
the digital world.

The future is people-powered software, geared for liberation.

Acid does not care who you are, anon. We do not care about your name, gender, race or nationality. In our world idea = idea and the message is the message. Our utopia is private, modular, decentralised, collective, meaningful.

Don't forget they are lying to you. The human spirit is not dead, the map is not the territory.

We are proof of the power born from discovering together: a nomadic war machine in cyberspace, on a mission to create technology that supports freedom, justice and innovation for all.

We believe no one is free until we are all free, because no one is an island: we are all pieces of the main. FREE YOUR MIND :)
        `}
        </Typography>
      </Content>
      <Content title="Products" link="/shop">
        <Grid columns={2}>
          <ProductPreview
            thumbnail="/home/product-preview.png"
            title="Logos T-shirt"
            price="$10"
          />
          <ProductPreview
            thumbnail="/home/product-preview.png"
            title="Logos T-shirt"
            price="$10"
          />
          <ProductPreview
            thumbnail="/home/product-preview.png"
            title="Logos T-shirt"
            price="$10"
          />
          <ProductPreview
            thumbnail="/home/product-preview.png"
            title="Logos T-shirt"
            price="$10"
          />
        </Grid>
      </Content>
    </Container>
  )
}
