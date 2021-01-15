import { createElement } from 'react'
import setDisplayName from './setDisplayName'
import wrapDisplayName from './wrapDisplayName'

const fromRenderProps = (
  RenderPropsComponent,
  propsMapper,
  renderPropName = 'children'
) => BaseComponent => {
  const FromRenderProps = ownerProps =>
    createElement(RenderPropsComponent, {
      [renderPropName]: (...props) =>
        createElement(BaseComponent, {
          ...ownerProps,
          ...propsMapper(...props),
        }),
    })

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'fromRenderProps'))(
      FromRenderProps
    )
  }

  return FromRenderProps
}

export default fromRenderProps
