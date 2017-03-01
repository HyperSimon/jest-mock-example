/**
 * Created by simon on 2017/3/1.
 */

declare var jest, describe, it, expect

// from jest doc
// When you need to recreate a complex behavior of a mock function such that
// multiple function calls produce different results, use the mockImplementationOnce
// method:
const myMockFn = jest.fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false))


describe('function mock', () => {
  it('should true first then false', () => {
    myMockFn((error, value) => expect(value).toEqual(true))
    myMockFn((error, value) => expect(value).toEqual(false))
  })
})

