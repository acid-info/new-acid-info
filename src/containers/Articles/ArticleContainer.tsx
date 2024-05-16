import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

export type ArticlePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  content: string
  authors: string[]
}

export const ArticleContainer: React.FC<ArticlePageProps> = ({
  content,
  authors,
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;

  width: 608px;

  margin-top: 60px;
  min-height: 100vh;

  h1 {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
    margin-top: 8px;
    margin-bottom: 16px;
    width: 100%;
  }

  pre {
    margin: 0;

    &:before,
    &:after {
      content: '***';
      display: flex;
      justify-content: center;
      color: rgb(var(--lsd-text-primary));
      font-size: 16px;
      line-height: 24px;
    }

    code {
      margin-bottom: 8px;
    }
    margin-bottom: 16px;
  }

  code {
    color: rgb(var(--lsd-text-primary));
    font-family: Courier, monospace;
    font-size: 16px;
    line-height: 24px;
    display: flex;

    white-space: pre-wrap;
    text-align: center;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    margin-bottom: 40px;
  }

  p {
    color: rgb(var(--lsd-text-primary));
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 24px;
  }

  audio {
    width: 100%;
    margin-bottom: 16px;
  }

  .date {
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 24px;
  }

  .author {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-family: sans-serif;
    align-items: center;
    gap: 16px;

    color: rgb(var(--lsd-text-primary));
    margin-bottom: 24px;

    .profile {
      display: flex;
      align-items: center;
      gap: 16px;

      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border: 1px solid rgb(var(--lsd-border-primary));
        border-radius: 50%;
        font-size: 11px;
        font-family: sans-serif;
      }

      p {
        margin-bottom: unset;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: calc(100% - 20px);
    margin-inline: 10px;
    margin-top: 40px;

    h1 {
      font-size: 28px;
      line-height: 36px;
      text-align: center;
    }

    h2 {
      font-size: 28px;
      line-height: 36px;
    }

    code {
      font-size: 14px;
      line-height: 20px;
    }

    .date {
      font-size: 12px;
      line-height: 16px;
    }

    .author {
      p {
        margin-bottom: unset;
        font-size: 12px;
        line-height: 16px;
      }
    }

    p {
      margin-bottom: 14px;
      font-size: 14px;
      line-height: 20px;
    }
  }
`
