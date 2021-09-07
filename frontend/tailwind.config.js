module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('argus website/PNG/Insta Argus12.png')",
        'footer': "url('argus website/PNG/Footerbg.png')",
        'mapbg': "url('argus website/PNG/World Map.png')",
        'mapbg2': "url('argus website/PNG/World Map Home.png')",
        'aboutbg':"url('argus website/PNG/Image Thumbnail2.png')",
        'servicesbg':"url('argus website/PNG/Image Thumbnail.png')",
        'jobsbg':"url('argus website/PNG/Image Thumbnail1.png')",
        'callus':"url('argus website/PNG/aboutcallusbg.png')",
        'knowbg':"url('argus website/PNG/Group 1560.jpg')",
        'empofmon':"url('argus website/PNG/Overlay.png')",
        'shape':"url(argus website/SVG/5. Newsletter-svg.svg)",
        'shape1':"url(argus website/SVG/Path 217.svg)",
        'siren':"url(argus website/SVG/siren.svg)" 
       }),
       colors: {
        'gray-1': '#F1F1F1',
        'gray-2': '#868696',
        'gray-3': '#3F3F3F',
        'red-1': '#BA0913',
      },
      fontFamily: {
        'for-heading': ['Rajdhani','ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'for-para': ["Helvetica", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Arial', "Noto Sans","sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      fontSize: {
        '4xl': '2.85rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
