import { ThemeInput } from '@stardust-ui/react'
import * as _ from 'lodash'
import * as React from 'react'
import { FelaTheme } from 'react-fela'

const C: React.FunctionComponent = props => (
  <FelaTheme>
    {(theme: ThemeInput) => (
      <div>
        {props.children}
        {(!!theme.rtl).toString()}
      </div>
    )}
  </FelaTheme>
)

const ContextFelaThemePerf = () => (
  <>
    {_.times(10000, key => (
      <C key={key} />
    ))}
  </>
)

export default ContextFelaThemePerf
