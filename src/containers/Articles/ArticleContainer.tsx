import { breakpoints } from '@/configs/ui.configs'
import { Button, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import React from 'react'

export type ArticlePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ArticleContainer: React.FC<ArticlePageProps> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <Typography variant="body2">12 Apr 2023</Typography>
      <Typography variant="h1">
        In 2019 I co-created the game Cheeze Wizards. A project aimed to dig
        deeper into blockchain native games
      </Typography>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;

  width: 608px;

  margin-top: 60px;
  min-height: 100vh;

  @media (max-width: ${breakpoints.md}px) {
    margin-inline: 10px;
    margin-top: 16px;

    h1 {
    }
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  margin-top: 84px;
  margin-bottom: 82px;

  width: 608px;
  margin-inline: auto;
  text-align: center;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 34px;
  }
`

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.md}px) {
    h2 {
      font-size: var(--lsd-h5-fontSize);
      line-height: var(--lsd-h5-lineHeight);
    }
  }
`

const ParagraphContainer = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`

const CTAButton = styled(Button)`
  width: 100%;
`
