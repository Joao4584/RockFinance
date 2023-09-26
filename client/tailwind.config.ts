import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'back-gray': '#F4F4F7',
        'back-top-blue': '#1B2437',
      },
      spacing: {
        '128': '32rem',
        '256': '64rem',
     
      }
    }
  },

  plugins: [
   
  ],
}
export default config
