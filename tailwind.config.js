/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        paper: '#F6F3EC',
        paper_dim: '#EDE8DC',
        ink: '#191A1E',
        indigo: '#1E3A5F',
        indigo_deep: '#132844',
        cyan_ink: '#00AEEF',
        magenta_ink: '#E6007E',
        yellow_ink: '#FFC400',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // on garde nos couleurs custom plutôt que les thèmes DaisyUI
  },
}
