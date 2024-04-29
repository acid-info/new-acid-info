import { removeSlashAndCapitalize } from '@/utils/og.utils'
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
          color: '#000',
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
              fontSize: '53px',
            }}
          >
            Acid.info
            <div
              style={{
                verticalAlign: 'super',
                fontSize: '30px',
                position: 'relative',
                top: '-10px',
                left: '-6px',
                transform: 'rotate(180deg)',
              }}
            >
              ©
            </div>
          </div>

          <div style={{ fontSize: '53px', opacity: '0.3' }}>
            Fostering innovation, defending digital liberties
          </div>

          {pagePath === '/' ? null : pagePath === '/services' ? (
            <div style={{ fontSize: '50px', marginTop: '80px' }}>Services</div>
          ) : pagePath === '/jobs' ? (
            <div style={{ fontSize: '50px', marginTop: '80px' }}>Jobs</div>
          ) : (
            <div
              style={{
                fontSize: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginTop: '80px',
              }}
            >
              <div style={{ opacity: '0.4' }}>Porfolio</div>
              <div>/</div>
              <div>{removeSlashAndCapitalize(pagePath)}</div>
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            width: '100vw',
            height: '50vh',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        >
          <img
            src="https://free.technology/og/og-asset.png"
            width={'100%'}
            height={'100%'}
            alt="og-asset"
            style={{ objectFit: 'cover' }}
          />
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
