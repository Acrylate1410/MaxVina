/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  daisyui: {
    themes: false,
 },
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '3/1': '3 / 1',
        '1/2': '1 / 2',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
        }
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  plugins: [require("daisyui")],

}

