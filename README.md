# Lucky FX Studio — 3D Website Foundation

This is the first working foundation for the Lucky FX Studio redesign.

## Stack
- React + Vite
- Three.js / React Three Fiber / Drei for the 3D hero
- GSAP for hero entrance animation
- Framer Motion for interactive cards and modal transitions
- Lucide React icons

## Run
1. Install Node.js 20+.
2. Open this folder in VS Code.
3. Run:
   npm install
   npm run dev
4. Open the local URL printed by Vite.

## Current phase
The site already includes:
- Cinematic 3D hero
- Responsive navigation
- About section
- 10 services
- Filterable portfolio
- Portfolio project modal
- Why choose us
- 6-step process
- Testimonials
- FAQ accordion
- Contact / quote form UI
- Final CTA
- Responsive footer

## Real media
Put the real showreel and project videos inside:
public/media/

Suggested future files:
- public/media/showreel.mp4
- public/media/real-estate.mp4
- public/media/motion-graphics.mp4
- public/media/wedding.mp4

Then we will wire them into the portfolio and hero.

## Contact and client uploads
The project inquiry form sends submissions to `luckyfxstudiowork@gmail.com` through FormSubmit and accepts photos, videos, PDF and ZIP attachments up to 10 MB total. The first real submission triggers a one-time activation email; approve it once to start receiving enquiries. For larger footage, clients can paste a Google Drive, Dropbox or WeTransfer link in the project details field.

## Production files
The ready-to-host static website is inside `dist/`. Upload the contents of that folder to any static host. For development, run `npm install` and `npm run dev`.

## Next build phases
1. Foundation + 3D hero (this package)
2. Real media + premium portfolio interactions
3. Working quote/contact backend
4. SEO, performance, accessibility and mobile polish
5. Production deploy + custom domain
