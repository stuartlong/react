import * as React from 'react'
import {
  childrenExist,
  createShorthandFactory,
  UIComponentProps,
  ContentComponentProps,
  ChildrenComponentProps,
  commonPropTypes,
  rtlTextContainer,
} from '../../lib'
import createComponent, { CreateComponentReturnType } from '../../lib/createComponent'
import { ReactProps } from '../../types'

export interface BoxProps
  extends UIComponentProps<BoxProps>,
    ContentComponentProps,
    ChildrenComponentProps {}

/**
 * A Box is a basic component (no default styles)
 */
const Box: CreateComponentReturnType<ReactProps<BoxProps>> = createComponent<BoxProps>({
  displayName: 'Box',

  className: 'ui-box',

  propTypes: {
    ...commonPropTypes.createCommon(),
  },

  render(config, props) {
    const { ElementType, classes, unhandledProps } = config
    const { children, content } = props

    // TODO: Heads up!  This assumes a single renderm, we're trying to count "mount"...
    window.componentCount.TOTAL++
    window.componentCount.Box = (window.componentCount.Box || 0) + 1

    return (
      <ElementType
        {...rtlTextContainer.getAttributes({ forElements: [children, content] })}
        {...unhandledProps}
        className={classes.root}
      >
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  },
})

Box.create = createShorthandFactory(Box)

export default Box
