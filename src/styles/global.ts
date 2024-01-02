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
    width: '$3',
    backgroundColor: '$gray600',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray500',
    borderRadius: 99,
  },
})
