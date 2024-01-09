const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'back-gray': '#F4F4F7',
        'back-top-blue': '#1B2437',
        'purple-gray':'#3c375e'
      },
      spacing: {
        '128': '32rem',
        '256': '64rem',
     
      },
      transitionDuration: {
        '1': "1s"
      },
      height: {
        '256': '64rem',
        '186': '45rem',
      },
      screens: {
        'sm': {'max': '600px'},
        'md': {'max': '810px'},
      },
    }
  },

  plugins: [
   
  ],
}
export default config
