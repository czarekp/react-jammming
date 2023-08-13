const rubikFont = `'Rubik', sans-serif`
const colors = {
  limegreen: '#1ED760',
  lightblack: '#1F1F1F',
  darkblack: '#191414',
  white: '#FFFFFF',
}

export default {
  fonts: {
    body: rubikFont,
    heading: rubikFont,
    mono: rubikFont,
  },
  colors,
  styles: {
    global: {
      body: {
        bg: colors.darkblack,
        color: colors.white,
      },
    },
  },
}
