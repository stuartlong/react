import { ThemeInput } from '@stardust-ui/react'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const ContextConsumer: React.FunctionComponent<{ theme: ThemeInput }> = props => (
  <div>
    {props.children} {(!!props.theme.rtl).toString()}
  </div>
)

const ContextPropNestingPerf = () => (
  <ThemeContext.Consumer>
    {theme => (
      <ContextConsumer theme={theme}>
        <ContextConsumer theme={theme}>
          <ContextConsumer theme={theme}>
            <ContextConsumer theme={theme}>
              <ContextConsumer theme={theme}>
                <ContextConsumer theme={theme}>
                  <ContextConsumer theme={theme}>
                    <ContextConsumer theme={theme}>
                      <ContextConsumer theme={theme}>
                        <ContextConsumer theme={theme}>
                          <ContextConsumer theme={theme}>
                            <ContextConsumer theme={theme}>
                              <ContextConsumer theme={theme}>
                                <ContextConsumer theme={theme}>
                                  <ContextConsumer theme={theme}>
                                    <ContextConsumer theme={theme}>
                                      <ContextConsumer theme={theme}>
                                        <ContextConsumer theme={theme}>
                                          <ContextConsumer theme={theme}>
                                            <ContextConsumer theme={theme}>
                                              <ContextConsumer theme={theme}>
                                                <ContextConsumer theme={theme}>
                                                  <ContextConsumer theme={theme}>
                                                    <ContextConsumer theme={theme}>
                                                      <ContextConsumer theme={theme}>
                                                        <ContextConsumer theme={theme}>
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
    )}
  </ThemeContext.Consumer>
)

export default ContextPropNestingPerf
