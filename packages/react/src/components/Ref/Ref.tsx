import * as PropTypes from 'prop-types'
import * as React from 'react'
import { isForwardRef } from 'react-is'

import { ChildrenComponentProps, customPropTypes } from '../../lib'
import { ReactPropsStrict } from '../../types'
import RefFindNode from './RefFindNode'
import RefForward from './RefForward'

export interface RefProps extends ChildrenComponentProps<React.ReactElement<any>> {
  /**
   * Called when a child component will be mounted or updated.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef?: React.Ref<any>
}

const Ref: React.SFC<ReactPropsStrict<RefProps>> = props => {
  const { children, innerRef } = props

  const child = React.Children.only(children)
  const ElementType = isForwardRef(child) ? RefForward : RefFindNode

  // TODO: Heads up!  This assumes a single renderm, we're trying to count "mount"...
  window.componentCount.TOTAL++
  window.componentCount.Ref = (window.componentCount.Ref || 0) + 1

  return <ElementType innerRef={innerRef}>{child}</ElementType>
}

Ref.displayName = 'Ref'
Ref.propTypes = {
  children: PropTypes.element.isRequired,
  innerRef: customPropTypes.ref as PropTypes.Requireable<any>,
}

export default Ref
