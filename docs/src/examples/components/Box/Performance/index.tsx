import * as React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import NonPublicSection from 'docs/src/components/ComponentDoc/NonPublicSection'

const Performance = () => (
  <NonPublicSection title="Performance">
    <ComponentExample
      title="Context.Consumer"
      description="An approach with Context.Consumer."
      examplePath="components/Box/Performance/ContextConsumer.perf"
    />
    <ComponentExample examplePath="components/Box/Performance/ContextConsumerNesting.perf" />

    <ComponentExample
      title="useContext()"
      description="An approach with useContext() hook."
      examplePath="components/Box/Performance/ContextUse.perf"
    />
    <ComponentExample examplePath="components/Box/Performance/ContextUseNesting.perf" />

    <ComponentExample
      title="Direct prop"
      description="An approach with passing prop directly to component."
      examplePath="components/Box/Performance/ContextProp.perf"
    />
    <ComponentExample examplePath="components/Box/Performance/ContextPropNesting.perf" />
  </NonPublicSection>
)

export default Performance
