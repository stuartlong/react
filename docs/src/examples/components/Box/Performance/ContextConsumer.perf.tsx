import { ThemeInput } from '@stardust-ui/react'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const ContextConsumer = () => (
  <ThemeContext.Consumer>
    {(theme: ThemeInput) => <div>{(!!theme.rtl).toString()}</div>}
  </ThemeContext.Consumer>
)

const ContextConsumerPerf = () => (
  <>
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
    <ContextConsumer />
  </>
)

export default ContextConsumerPerf
