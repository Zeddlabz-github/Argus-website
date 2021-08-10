module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('argus website/PNG/Insta Argus12.png')",
        'footer': "url('argus website/PNG/Footerbg.png')",
        'mapbg': "url('argus website/PNG/World Map.png')",
        'aboutbg':"url('argus website/PNG/Image Thumbnail2.png')",
        'servicesbg':"url('argus website/PNG/Image Thumbnail.png')",
        'jobsbg':"url('argus website/PNG/Image Thumbnail1.png')",
        'callus':"url('argus website/PNG/aboutcallusbg.png')",
       }),
       colors: {
        'gray-1': '#F1F1F1',
        'gray-2': '#868696',
        'gray-3': '#3F3F3F',
        'red-1': '#BA0913',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
