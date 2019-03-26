import { ThemeInput } from '@stardust-ui/react'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const ContextConsumer: React.FunctionComponent = props => (
  <ThemeContext.Consumer>
    {(theme: ThemeInput) => (
      <div>
        {props.children}
        {(!!theme.rtl).toString()}
      </div>
    )}
  </ThemeContext.Consumer>
)

const ContextConsumerNestingPerf = () => (
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

export default ContextConsumerNestingPerf
