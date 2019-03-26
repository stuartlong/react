import { ThemeInput } from '@stardust-ui/react'
import * as _ from 'lodash'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const ContextConsumer: React.FunctionComponent<{ theme: ThemeInput }> = props => (
  <div>{(!!props.theme.rtl).toString()}</div>
)

const ContextProp = () => (
  <ThemeContext.Consumer>
    {theme => (
      <>
        {_.times(1000, key => (
          <ContextConsumer key={key} theme={theme} />
        ))}
      </>
    )}
  </ThemeContext.Consumer>
)

export default ContextProp
