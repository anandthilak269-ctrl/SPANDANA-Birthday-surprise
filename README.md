# 💗 SPANDANA MY LOVE — A Birthday Surprise Website

A premium, romantic birthday surprise website created with love by Anand for Spandana.

## 🎉 Features

✨ **Elegant & Romantic Design**
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Glassmorphism effects
- Premium typography

💗 **Interactive Experiences**
- Welcome screen with surprise reveal
- Photo gallery with graceful loading
- Love letter card
- 7 meaningful gifts showcase
- Birthday cake interaction with confetti
- Memory timeline
- Video surprise section
- Final emotional reveal

🎵 **Audio & Video Support**
- Background music player
- Birthday video integration
- Graceful fallbacks when media is missing

📱 **Mobile-First Design**
- Perfect on iPhone, Android, tablets & desktop
- Safe area padding for notched devices
- Large touch targets
- Smooth scrolling experience

♿ **Accessible**
- Semantic HTML
- Keyboard navigation
- Screen reader support
- Focus indicators
- Reduced motion support

🚀 **Lightweight & Fast**
- No external dependencies (except fonts)
- Vanilla JavaScript only
- Optimized CSS animations
- Lazy image loading
- Perfect for GitHub Pages

## 📂 Project Structure

```
SPANDANA-Birthday-surprise/
├── index.html              # Main HTML file
├── style.css               # All styling
├── script.js               # All interactivity
├── README.md               # This file
│
├── images/                 # Photo gallery
│   ├── spandana1.jpg
│   ├── spandana2.jpg
│   ├── spandana3.jpg
│   ├── spandana4.jpg
│   └── spandana5.jpg
│
├── media/                  # Audio & video
│   ├── our-song.mp3
│   └── birthday-video.mp4
│
└── assets/                 # Additional resources
    ├── icons/
    └── decorations/
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/anandthilak269-ctrl/SPANDANA-Birthday-surprise.git
cd SPANDANA-Birthday-surprise
```

### 2. Add Your Photos

Replace the placeholder images in the `images/` folder:

- `images/spandana1.jpg` — Featured photo (4:3 aspect ratio recommended)
- `images/spandana2.jpg` — Gallery item 1
- `images/spandana3.jpg` — Gallery item 2
- `images/spandana4.jpg` — Gallery item 3
- `images/spandana5.jpg` — Gallery item 4

**Keep the exact filenames** unless you update the HTML.

**Recommended sizes:**
- Featured image: 600x450px or larger (4:3 ratio)
- Gallery items: 500x500px (square)
- Format: JPG or PNG
- Optimize for web to keep file sizes small

### 3. Add Birthday Video

Add your birthday video to the `media/` folder:

- `media/birthday-video.mp4`

**Recommended specs:**
- Format: MP4 (H.264 codec)
- Resolution: 1080p or 720p
- Duration: 1-3 minutes
- Keep file size under 50MB for GitHub Pages

### 4. Add Background Music

Add your song to the `media/` folder:

- `media/our-song.mp3`

**Recommended specs:**
- Format: MP3
- Bitrate: 128-192 kbps
- Duration: 2-4 minutes (will loop)
- Keep file size under 10MB

### 5. Deploy to GitHub Pages

1. **Open your repository on GitHub**
2. **Go to Settings → Pages**
3. **Under "Build and deployment":**
   - Choose "Deploy from a branch"
   - Select: `main` branch
   - Select: `/ (root)` folder
4. **Click Save**
5. **Wait for deployment** (usually takes 1-2 minutes)

Your site will be live at:
```
https://USERNAME.github.io/SPANDANA-Birthday-surprise/
```

## 🎨 Customization

### Change Colors

Edit `style.css` and update the gradient colors. Look for:

```css
body {
  background: linear-gradient(135deg, #ff6b9d 0%, #c71585 50%, #8b0043 100%);
}
```

Common romantic colors:
- `#ff6b9d` — Light pink
- `#c71585` — Deep pink
- `#8b0043` — Dark burgundy
- `#ff1493` — Deep pink
- `#ff69b4` — Hot pink

### Change Typography

The site uses Georgia serif for headings and system fonts for body text. To change:

Look for `font-family: Georgia, serif;` in `style.css`

### Change Text Content

Edit `index.html`:
- Update the welcome message
- Customize the love letter
- Modify gift descriptions
- Update timeline entries
- Change final messages

### Adjust Animation Speed

Edit `style.css` and change `animation-duration` values:

```css
animation: fadeInUp 0.8s ease; /* Change 0.8s to your preferred speed */
```

## 🎵 Audio & Video Handling

### If Video is Missing
The page will show a beautiful placeholder instead of a broken video player.

### If Music is Missing
The music button will still work, but no audio will play.

### If Photos are Missing
Each photo position will show an elegant placeholder with a heart emoji.

**All graceful fallbacks are built in — the website will never look broken.**

## 📱 Browser Support

- ✅ iPhone Safari (iOS 12+)
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Samsung Internet
- ✅ All modern browsers with HTML5 support

## ⚡ Performance Tips

1. **Optimize images** before uploading:
   - Use [TinyPNG](https://tinypng.com/) or similar
   - Featured image: ~300KB
   - Gallery images: ~150KB each

2. **Optimize video** before uploading:
   - Use [Handbrake](https://handbrake.fr/) for MP4 compression
   - Target 5-10MB file size

3. **Optimize audio** before uploading:
   - Use [Audacity](https://www.audacityteam.org/) to export as MP3
   - Target 1-3MB file size

4. **GitHub Pages Limits:**
   - Free tier: 1GB total repository size
   - Large media files may affect performance
   - Keep total repo under 500MB for best results

## 🔒 Privacy & Sharing

- **This is a private website** — only share the link with Spandana
- Create a **QR code** pointing to the GitHub Pages URL
- Consider using a **short URL** service for easier sharing
- The website is **public on GitHub** — anyone with the link can view it

## ❓ Troubleshooting

### Photos not showing?
1. Check that image files are in the `images/` folder
2. Verify filenames match exactly (case-sensitive)
3. Check file format is JPG or PNG
4. Try refreshing the page and clearing browser cache

### Music not playing?
1. Check that `media/our-song.mp3` exists
2. Verify file is a valid MP3
3. Note: Some browsers require user interaction first (click play button)
4. Music might be blocked if page is in a private/incognito window

### Video not showing?
1. Check that `media/birthday-video.mp4` exists
2. Verify file is a valid MP4
3. Try a different MP4 encoder if video doesn't play
4. Check file isn't corrupted

### Styles not loading?
1. Ensure `style.css` is in the root folder
2. Check the link in `index.html` is correct
3. Clear browser cache and refresh
4. Check browser console for errors (F12)

### GitHub Pages not updating?
1. Wait 1-2 minutes after pushing changes
2. Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check GitHub Actions tab to see deployment status
4. Verify all files were pushed to the `main` branch

## 📝 File Size Guidelines

For best GitHub Pages performance:

| File | Max Size | Recommended |
|------|----------|------------|
| Featured photo | 1MB | 300KB |
| Gallery photos (each) | 500KB | 150KB |
| Birthday video | 100MB | 20MB |
| Background music | 20MB | 3MB |
| **Total repo** | 1GB | < 500MB |

## 🛠️ Developer Notes

- **No build step required** — works directly in browser
- **No external CDNs** — completely self-contained
- **Vanilla JavaScript** — no frameworks or libraries
- **CSS Grid & Flexbox** — modern, responsive layouts
- **CSS Animations** — performant and smooth
- **Intersection Observer** — efficient scroll animations

## 📄 License

This project is created with love for personal use. Feel free to customize it as needed.

## 💝 Made With Love

Created by **Anand** for **Spandana** ❤️

---

## 🎯 Final Checklist Before Sharing

- [ ] All photos are in `images/` folder with correct filenames
- [ ] Video is in `media/birthday-video.mp4` (if including)
- [ ] Music is in `media/our-song.mp3` (if including)
- [ ] GitHub Pages is enabled and deployed
- [ ] Website works at the GitHub Pages URL
- [ ] All animations load smoothly
- [ ] Music plays when clicking the button
- [ ] Video plays when clicking
- [ ] Photos display correctly
- [ ] Mobile layout looks beautiful
- [ ] No console errors (F12 → Console)
- [ ] Ready to share with Spandana! 🎉

---

**Need help?** Check the [GitHub Issues](https://github.com/anandthilak269-ctrl/SPANDANA-Birthday-surprise/issues) or create a new one.

Happy Birthday, Spandana! 💗
