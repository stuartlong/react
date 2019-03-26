import { ThemeInput } from '@stardust-ui/react'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const ContextConsumer: React.FC = props => {
  const theme = React.useContext<ThemeInput>(ThemeContext)

  return (
    <div>
      {props.children} {(!!theme.rtl).toString()}
    </div>
  )
}

const ContextUseNestingPerf = () => (
  <ContextConsumer>
    <ContextConsumer>
      <ContextConsumer>
        <ContextConsumer>
          <ContextConsumer>
            <ContextConsumer>
              <ContextConsumer>
                <ContextConsumer>
                  <ContextConsumer>
                    <ContextConsumer>
                      <ContextConsumer>
                        <ContextConsumer>
                          <ContextConsumer>
                            <ContextConsumer>
                              <ContextConsumer>
                                <ContextConsumer>
                                  <ContextConsumer>
                                    <ContextConsumer>
                                      <ContextConsumer>
                                        <ContextConsumer>
                                          <ContextConsumer>
                                            <ContextConsumer>
                                              <ContextConsumer>
                                                <ContextConsumer>
                                                  <ContextConsumer>
                                                    <ContextConsumer>
                                                      <div />
                                                    </ContextConsumer>
                                                  </ContextConsumer>
                                                </ContextConsumer>
                                              </ContextConsumer>
                                            </ContextConsumer>
                                          </ContextConsumer>
                                        </ContextConsumer>
                                      </ContextConsumer>
                                    </ContextConsumer>
                                  </ContextConsumer>
                                </ContextConsumer>
                              </ContextConsumer>
                            </ContextConsumer>
                          </ContextConsumer>
                        </ContextConsumer>
                      </ContextConsumer>
                    </ContextConsumer>
                  </ContextConsumer>
                </ContextConsumer>
              </ContextConsumer>
            </ContextConsumer>
          </ContextConsumer>
        </ContextConsumer>
      </ContextConsumer>
    </ContextConsumer>
  </ContextConsumer>
)

export default ContextUseNestingPerf
