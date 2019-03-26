import { ThemeInput } from '@stardust-ui/react'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'

const C: React.FunctionComponent<{ theme: ThemeInput }> = props => (
  <div>
    {props.children}
    {(!!props.theme.rtl).toString()}
  </div>
)

const ContextPropNestingPerf = () => (
  <ThemeContext.Consumer>
    {theme => (
      <C theme={theme}>
        <C theme={theme}>
          <C theme={theme}>
            <C theme={theme}>
              <C theme={theme}>
                <C theme={theme}>
                  <C theme={theme}>
                    <C theme={theme}>
                      <C theme={theme}>
                        <C theme={theme}>
                          <C theme={theme}>
                            <C theme={theme}>
                              <C theme={theme}>
                                <C theme={theme}>
                                  <C theme={theme}>
                                    <C theme={theme}>
                                      <C theme={theme}>
                                        <C theme={theme}>
                                          <C theme={theme}>
                                            <C theme={theme}>
                                              <C theme={theme}>
                                                <C theme={theme}>
                                                  <C theme={theme}>
                                                    <C theme={theme}>
                                                      <C theme={theme}>
                                                        <C theme={theme}>
                                                          <C theme={theme}>
                                                            <C theme={theme}>
                                                              <C theme={theme}>
                                                                <C theme={theme}>
                                                                  <C theme={theme}>
                                                                    <C theme={theme}>
                                                                      <C theme={theme}>
                                                                        <C theme={theme}>
                                                                          <C theme={theme}>
                                                                            <C theme={theme}>
                                                                              <C theme={theme}>
                                                                                <C theme={theme}>
                                                                                  <C theme={theme}>
                                                                                    <C
                                                                                      theme={theme}
                                                                                    >
                                                                                      <C
                                                                                        theme={
                                                                                          theme
                                                                                        }
                                                                                      >
                                                                                        <C
                                                                                          theme={
                                                                                            theme
                                                                                          }
                                                                                        >
                                                                                          <C
                                                                                            theme={
                                                                                              theme
                                                                                            }
                                                                                          >
                                                                                            <C
                                                                                              theme={
                                                                                                theme
                                                                                              }
                                                                                            >
                                                                                              <C
                                                                                                theme={
                                                                                                  theme
                                                                                                }
                                                                                              >
                                                                                                <C
                                                                                                  theme={
                                                                                                    theme
                                                                                                  }
                                                                                                >
                                                                                                  <div />
                                                                                                </C>
                                                                                              </C>
                                                                                            </C>
                                                                                          </C>
                                                                                        </C>
                                                                                      </C>
                                                                                    </C>
                                                                                  </C>
                                                                                </C>
                                                                              </C>
                                                                            </C>
                                                                          </C>
                                                                        </C>
                                                                      </C>
                                                                    </C>
                                                                  </C>
                                                                </C>
                                                              </C>
                                                            </C>
                                                          </C>
                                                        </C>
                                                      </C>
                                                    </C>
                                                  </C>
                                                </C>
                                              </C>
                                            </C>
                                          </C>
                                        </C>
                                      </C>
                                    </C>
                                  </C>
                                </C>
                              </C>
                            </C>
                          </C>
                        </C>
                      </C>
                    </C>
                  </C>
                </C>
              </C>
            </C>
          </C>
        </C>
      </C>
    )}
  </ThemeContext.Consumer>
)

export default ContextPropNestingPerf
