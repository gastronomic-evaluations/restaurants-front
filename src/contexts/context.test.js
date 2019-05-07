import { FormikContext, RouteContext } from './contexts'

describe('Contexts', () => {
  test('FormikContext is a react context', () => {
    expect(typeof FormikContext).toEqual('object')
    expect(FormikContext.hasOwnProperty('Provider')).toBeTruthy()
  })

  test('RouteContext is a react context', () => {
    expect(typeof RouteContext).toEqual('object')
    expect(RouteContext.hasOwnProperty('Provider')).toBeTruthy()
  })
})
