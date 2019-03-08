const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    lineHeights: {
      solid: 1,
      title: 1.25,
      copy: 1.5
    },
    letterSpacings: {
      normal: 'normal',
      tracked: '0.1em',
      tight: '-0.05em',
      mega: '0.25em'
    },
    borders: [
      0,
      '1px solid',
      '2px solid',
      '3px solid',
      '4px solid',
      '8px solid',
      '16px solid',
      '32px solid'
    ],
    colors: {
      primary: {
        light: 'hsl(120, 100%, 50%)',
        main: 'hsl(120, 100%, 50%)',
        dark: 'hsl(120, 100%, 50%)',
        contrastText: '#32cd32'
      },
      text: {
        primary: 'hsl(120, 100%, 50%)',
        secondary: 'hsl(120, 100%, 50%)',
        disabled: 'hsl(120, 100%, 50%)',
        hint: 'hsl(120, 100%, 50%)'
      }
    }
  }

  const ColorTheme = {...theme}
  export {ColorTheme}
  