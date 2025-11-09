# Wars of the Roses - Uncivil War Album Website

A modern, animated SvelteKit web application for the "Wars of the Roses" album by Uncivil War.

## Features

- 🎵 **Modern Design**: Dark, medieval-themed design with smooth animations
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- 🎸 **Album Showcase**: Beautiful album artwork display with hover effects
- 📜 **Song Lyrics**: Complete lyrics for each track
- 📚 **Historical Context**: Detailed historical information about the Wars of the Roses
- 🗺️ **Interactive Maps**: Embedded maps showing battle locations
- ⚡ **Fast Performance**: Built with SvelteKit for optimal speed

## Getting Started

### Running the Development Server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
wars-of-roses-app/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── MapComponent.svelte    # Map component for locations
│   │   └── data/
│   │       └── songs.ts               # Song data and types
│   ├── routes/
│   │   ├── about/
│   │   │   └── +page.svelte          # About page
│   │   ├── songs/
│   │   │   ├── [id]/
│   │   │   │   ├── +page.svelte      # Individual song page
│   │   │   │   └── +page.ts          # Song page data loader
│   │   │   └── +page.svelte          # Songs list page
│   │   ├── +layout.svelte            # Main layout with navigation
│   │   └── +page.svelte              # Home page
│   ├── app.css                       # Global styles
│   └── app.html                      # HTML template
├── static/
│   └── images/
│       └── album-cover.jpg           # Album artwork
└── package.json
```

## Customization Guide

### Adding Your Song Lyrics and History

Edit `src/lib/data/songs.ts` to add your actual song content:

1. **Update Lyrics**: Replace placeholder lyrics with your actual lyrics
2. **Update Historical Context**: Modify the historical descriptions
3. **Add More Songs**: Follow the existing pattern to add more tracks
4. **Update Metadata**: Change durations, years, and locations as needed

### Adding Album Artwork

Replace the image at:
- `static/images/album-cover.jpg` - Main album cover

### Adding Audio Files

1. Place your audio files in `static/audio/`
2. Update the `audioUrl` property in each song object in `songs.ts`
3. Supported formats: MP3, OGG, WAV

Example:
```typescript
{
  audioUrl: '/audio/your-song.mp3'
}
```

### Customizing Colors

Edit the CSS variables in `src/app.css`:

```css
:root {
  --color-bg: #0a0a0a;              /* Background color */
  --color-bg-secondary: #1a1a1a;    /* Secondary background */
  --color-text: #f0e6d2;            /* Primary text */
  --color-text-secondary: #c9b998;  /* Secondary text */
  --color-accent: #8b0000;          /* Accent color (dark red) */
  --color-accent-light: #c41e1e;    /* Light accent */
  --color-gold: #d4af37;            /* Gold highlights */
}
```

### Adding Social Media Links

Edit the footer in `src/routes/+layout.svelte`:

```svelte
<div class="social-links">
  <a href="YOUR_SPOTIFY_LINK" aria-label="Spotify">🎵</a>
  <a href="YOUR_YOUTUBE_LINK" aria-label="YouTube">📺</a>
  <a href="YOUR_INSTAGRAM_LINK" aria-label="Instagram">📷</a>
</div>
```

## Pages

- **Home** (`/`) - Landing page with album artwork and features
- **Songs** (`/songs`) - Complete tracklist
- **Individual Song** (`/songs/[id]`) - Lyrics, history, and maps for each song
- **About** (`/about`) - Band and album information

## Technologies Used

- **SvelteKit** - Modern web framework
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool
- **OpenStreetMap** - Interactive maps

## Deployment

This app can be deployed to:
- **Vercel** - `npm install -g vercel && vercel`
- **Netlify** - Connect your git repository
- **Any Node.js hosting** - Run `npm run build` and serve the `build` folder

## Tips

- The site looks best on dark mode-friendly displays
- All animations respect user preferences for reduced motion
- Maps require an internet connection to load
- Audio player styling may vary by browser

## Support

For issues or questions about the website code, refer to the [SvelteKit documentation](https://kit.svelte.dev/).

---

**Uncivil War - Wars of the Roses** © 2025
