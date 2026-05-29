import { ImageResponse } from 'next/og'

export const alt = 'Big Red Moving Company — Hingham, MA & South Shore'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Fetch Anton font from Google Fonts CDN
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Red top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#C8102E',
          }}
        />

        {/* Main company name */}
        <div
          style={{
            fontFamily: 'Anton',
            fontSize: 96,
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          BIG RED MOVING
        </div>

        {/* Subhead */}
        <div
          style={{
            fontFamily: 'Anton',
            fontSize: 48,
            color: '#C8102E',
            textTransform: 'uppercase',
            marginTop: 16,
            letterSpacing: '1px',
          }}
        >
          HINGHAM, MA &amp; THE SOUTH SHORE
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: 'Anton',
            fontSize: 24,
            color: '#D4A437',
            textTransform: 'uppercase',
            marginTop: 24,
            letterSpacing: '4px',
          }}
        >
          FLAT-RATE · FAMILY OWNED · SOUTH SHORE
        </div>

        {/* Red bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#C8102E',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Anton',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
