import nested from 'postcss-nested'
import scss from 'postcss-scss'

export default {
  parser: scss,
  plugins: [nested],
}
