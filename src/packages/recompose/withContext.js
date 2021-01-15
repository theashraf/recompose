import { Component, createElement } from 'react'
import setDisplayName from './setDisplayName'
import wrapDisplayName from './wrapDisplayName'

const withContext = (childContextTypes, getChildContext) => BaseComponent => {
  class WithContext extends Component {
    getChildContext = () => getChildContext(this.props)

    render() {
      return createElement(BaseComponent, this.props)
    }
  }

  WithContext.childContextTypes = childContextTypes

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(
      WithContext
    )
  }
  return WithContext
}

export default withContext
