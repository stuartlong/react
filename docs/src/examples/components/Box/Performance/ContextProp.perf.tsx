import { ThemeInput } from '@stardust-ui/react'
import * as _ from 'lodash'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const ContextConsumer = () => {
  const theme = React.useContext<ThemeInput>(ThemeContext)

  return <div>{(!!theme.rtl).toString()}</div>
}

const ContextConsumerProp = () => (
  <>
    {_.times(1000, key => (
      <ContextConsumer key={key} />
    ))}
  </>
)

export default ContextConsumerProp
