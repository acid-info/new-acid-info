import { breakpoints } from '@/configs/ui.configs'
import { Button, Typography } from '@acid-info/lsd-react'
import styled from '@emotion/styled'
import React from 'react'

export type AboutPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const AboutContainer: React.FC<AboutPageProps> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <Typography variant="h1">About</Typography>
      <ContentContainer>
        <SubTitleContainer>
          <Typography variant="h2">Acid is designing the future.</Typography>
          <br />
          <Typography variant="h2">
            The future is a second enlightenment of the digital world.
          </Typography>
        </SubTitleContainer>
        <ParagraphContainer>
          <Typography variant="body1">
            The future is people-powered software, geared for liberation.
          </Typography>
          <br />
          <br />
          <Typography variant="body1">
            Acid does not care who you are, anon.
          </Typography>
          <br />
          <br />
          <Typography variant="body1">
            We do not care about your name, gender, race or nationality. In our
            world idea = idea and the message is the message. Our utopia is
            private, modular, decentralised, collective, meaningful.
          </Typography>
          <br />
          <br />
          <Typography variant="body1">
            Don&apos;t forget they are lying to you. The human spirit is not
            dead, the map is not the territory.
          </Typography>
          <br />
          <br />
          <Typography variant="body1">
            We are proof of the power born from discovering together: a nomadic
            war machine in cyberspace, on a mission to create technology that
            supports freedom, justice and innovation for all.
          </Typography>
          <br />
          <br />
          <Typography variant="body1">
            We believe no one is free until we are all free, because no one is
            an island: we are all pieces of the main.
          </Typography>
          <br />
          <br />
          <Typography variant="body1">
            If we are your people, join us.
          </Typography>
          <br />
          <br />
          <Typography variant="body1">FREE YOUR MIND :)</Typography>
        </ParagraphContainer>
        <CTAButton size="large" variant="filled">
          Join us
        </CTAButton>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;

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
