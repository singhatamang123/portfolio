import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Singha Tamang | Frontend Developer';
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          border: '16px solid #FF00FF',
          position: 'relative',
        }}
      >
        {/* Background Grain Simulation (SVG) */}
        <svg
          style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1, zIndex: -1 }}
          width="1200"
          height="630"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Decorative background shape */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: '#32CD32', opacity: 0.2, filter: 'blur(100px)', borderRadius: '50%' }} />

        {/* Floating Badge */}
        <div style={{ display: 'flex', position: 'absolute', top: 60, right: 60, transform: 'rotate(5deg)' }}>
           <div style={{ background: '#00FFFF', padding: '15px 30px', border: '6px solid black', color: 'black', fontSize: 32, fontWeight: 900, textTransform: 'uppercase', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
             AVAILABLE FOR FREELANCE
           </div>
        </div>

        {/* Main Text */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: 110, fontWeight: 900, color: 'white', margin: 0, textTransform: 'uppercase', lineHeight: 0.9 }}>
            SINGHA<br/>TAMANG
          </h1>
          <div style={{ display: 'flex', background: '#FF00FF', padding: '10px 20px', marginTop: 20, alignSelf: 'flex-start', transform: 'rotate(-2deg)' }}>
            <p style={{ fontSize: 40, color: 'white', margin: 0, fontWeight: 900, textTransform: 'uppercase' }}>
              FRONTEND ENGINEER
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', marginTop: 60, gap: 20 }}>
          <div style={{ display: 'flex', background: 'white', color: 'black', padding: '10px 25px', border: '4px solid black', boxShadow: '5px 5px 0px 0px rgba(0,0,0,1)' }}>
            <span style={{ fontSize: 24, fontWeight: 900 }}>NEXT.JS</span>
          </div>
          <div style={{ display: 'flex', background: '#32CD32', color: 'black', padding: '10px 25px', border: '4px solid black', boxShadow: '5px 5px 0px 0px rgba(0,0,0,1)' }}>
            <span style={{ fontSize: 24, fontWeight: 900 }}>REACT</span>
          </div>
          <div style={{ display: 'flex', background: 'black', color: 'white', padding: '10px 25px', border: '4px solid white', boxShadow: '5px 5px 0px 0px rgba(255,255,255,1)' }}>
            <span style={{ fontSize: 24, fontWeight: 900 }}>TYPESCRIPT</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
