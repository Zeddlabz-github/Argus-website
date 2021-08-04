module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('argus website/PNG/Insta Argus12.png')",
        'footer': "url('argus website/PNG/Footerbg.png')",
        'mapbg': "url('argus website/PNG/World Map.png')",
        'contactbg': "url('argus website/PNG/fleet 2-2.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
