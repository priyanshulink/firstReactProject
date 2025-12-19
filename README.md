# First React Project - Product Designer Portfolio

A modern portfolio website built with vanilla React using `React.createElement()` without JSX. This project demonstrates fundamental React concepts using ES6 modules and import maps.

## Features

- 🎨 **Clean Modern Design** - Minimalist portfolio layout
- 📊 **Stats Display** - Showcases 200+ projects completed and 50+ startups raised
- 🎯 **Vertical Sidebar** - Unique vertical "Product designer" branding with year indicator
- 📱 **Navigation Bar** - Professional navigation with multiple sections
- ⚛️ **Pure React** - Built using `React.createElement()` API without JSX
- 📦 **ES6 Modules** - Modern JavaScript module system with import maps

## Project Structure

```
day01/
├── index.html          # Main HTML file with import map
├── main.js            # Root component and ReactDOM render
├── nav.js             # Navigation bar component
├── about.js           # Main content section (stats & hero)
├── horizental.js      # Vertical sidebar component
├── style.css          # Styling
├── icon.png           # Logo image
└── lestimg-removebg-preview.png  # Hero image
```

## Technologies Used

- **React 18** - Loaded via ESM CDN (esm.sh)
- **ReactDOM** - For rendering to the DOM
- **ES6 Modules** - Import/export functionality
- **Import Maps** - Browser-native module resolution
- **Vanilla CSS** - Custom styling without frameworks

## How It Works

This project uses **import maps** to enable ES6 module imports for React in the browser without a build tool:

```html
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@18",
    "react-dom/client": "https://esm.sh/react-dom@18/client"
  }
}
</script>
```

Each component is created using `React.createElement()`:

```javascript
const element = React.createElement('div', {id: 'myDiv'}, 'Hello World');
```

## Getting Started

### Prerequisites

- A modern web browser with ES6 module support
- A local web server (optional but recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/priyanshulink/firstReactProject.git
cd firstReactProject
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## Components

### Navigation (nav.js)
- Logo image
- Navigation links (About me, Portfolio, Services, Blog)
- Call-to-action button (Book A Call)

### Sidebar (horizental.js)
- Vertical "Product designer" text
- Divider line
- Year indicator (2025)

### About Section (about.js)
- Statistics display (Projects completed, Startups raised)
- Hero section with "HELLO" heading
- Tagline: "I'm Chetan, a design wizard"
- Profile image

## Learning Objectives

This project demonstrates:

1. ✅ React fundamentals without JSX
2. ✅ Component composition and modularity
3. ✅ ES6 import/export statements
4. ✅ Browser-native module loading with import maps
5. ✅ React's `createElement()` API
6. ✅ ReactDOM rendering
7. ✅ State-less functional component patterns

## Browser Compatibility

- Chrome 89+
- Edge 89+
- Safari 16.4+
- Firefox 108+

(Import maps are a modern web standard - ensure your browser supports them)

## Future Enhancements

- [ ] Add routing for different sections
- [ ] Implement interactive animations
- [ ] Add form functionality for "Book A Call"
- [ ] Migrate to JSX with build tools
- [ ] Add state management
- [ ] Responsive mobile design

## Author

**Priyanshu**
- GitHub: [@priyanshulink](https://github.com/priyanshulink)

## License

This project is open source and available under the MIT License.

## Acknowledgments

- React team for excellent documentation
- ESM.sh for providing React as ES modules
- Modern browsers for supporting import maps

---

Made with ⚛️ React and ❤️
