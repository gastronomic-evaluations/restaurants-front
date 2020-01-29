import formatDate from './formatDate'

describe('format date to DD/MM/YYYY', () => {
  test('when month is lower than 10', () => {
    expect(formatDate('2020-01-24T11:03:50.737Z')).toEqual('24/01/2020')
  })

  test('when day is lower than 10', () => {
    expect(formatDate('2019-11-04T17:42:46.499Z')).toEqual('04/11/2019')
  })

  test('when month and day is greater than 10', () => {
    expect(formatDate('2019-11-14T20:50:27.429Z')).toEqual('14/11/2019')
  })
})