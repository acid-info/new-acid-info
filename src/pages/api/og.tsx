import { ImageResponse } from '@vercel/og'
import { handleMethodNotAllowedResponse } from 'next/dist/server/future/route-modules/helpers/response-handlers'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

// Doc: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
// Font: https://vercel.com/docs/functions/edge-functions/og-image-generation/og-image-examples#using-a-custom-font
export default async function handler(request: NextRequest) {
  const helvetica = await fetch(
    new URL('../../../public/fonts/Helvetica.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())
  const { href } = request.nextUrl

  const searchParams = new URL(href).searchParams
  const pagePath = searchParams.get('pagePath') || '/'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
          color: '#1400ff',
          position: 'relative',
          fontFamily: 'Helvetica',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontSize: '54px',
            }}
          >
            Acid.info
          </div>

          <div style={{ fontSize: '42px', marginTop: '20px' }}>
            The future is a second enlightenment of the digital world.
          </div>

          {pagePath === '/' ? null : pagePath === '/media' ? (
            <div style={{ fontSize: '50px', marginTop: '80px' }}>Media</div>
          ) : pagePath === '/articles' ? (
            <div style={{ fontSize: '50px', marginTop: '80px' }}>Articles</div>
          ) : pagePath === '/about' ? (
            <div style={{ fontSize: '50px', marginTop: '80px' }}>About</div>
          ) : pagePath === '/shop' ? (
            <div style={{ fontSize: '50px', marginTop: '80px' }}>Shop</div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Helvetica',
          data: helvetica,
          style: 'normal',
        },
      ],
    },
  )
}
handleMethodNotAllowedResponse()
