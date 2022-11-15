import { defineConfig } from 'windicss/helpers'
export default defineConfig({
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    extend: {
      colors: {
        night: '#a0a8d6',
      },
    },
  },
})
