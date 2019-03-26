import { ThemeInput } from '@stardust-ui/react'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const ContextConsumer: React.FunctionComponent<{ theme: ThemeInput }> = props => (
  <div>{(!!props.theme.rtl).toString()}</div>
)

const ContextConsumerUse = () => (
  <ThemeContext.Consumer>
    {theme => (
      <>
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
        <ContextConsumer theme={theme} />
      </>
    )}
  </ThemeContext.Consumer>
)

export default ContextConsumerUse
