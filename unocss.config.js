import { defineConfig, presetWind } from 'unocss'
import useDirectives from '@unocss/transformer-directives'
import { presetShades as useShades } from '@viarotel-org/unocss-preset-shades'

const useWind = presetWind()

export default defineConfig({
  presets: [useWind, useShades('#028d71')],
  transformers: [useDirectives()],
  shortcuts: {
    'inset-center':
      'top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2',
    'left-center': 'left-1/2 transform -translate-x-1/2',
    'top-center': 'top-1/2 transform -translate-y-1/2',
    'inset-fix-0': 'top-0 bottom-0 left-0 right-0',
  },
})
