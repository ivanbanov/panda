import { center } from '../styled-system-format-names/patterns'
import { css } from '../styled-system-format-names/css'

export default function App() {
  return (
    <div className={center({ w: '$full', h: '$full' })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          fontWeight: 'semibold',
          color: '$red-500',
          textAlign: 'center',
          textStyle: '4xl',
        })}
      >
        <span>🐼</span>
        <span>Hello from Panda</span>
      </div>
    </div>
  )
}
