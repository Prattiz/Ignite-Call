import { globalCss } from '@ignite-ui/react'

export const GlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  '::-webkit-scrollbar': {
    width: '$5',
    borderRadius: '$md',
    backgroundColor: '$gray600'
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$ignite300', 
    borderRadius: 6, 
  }
})
