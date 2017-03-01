/**
 * Created by simon on 2017/3/1.
 *
 * Mock functions are also very effective in code that uses a functional continuation
 * -passing style. Code written in this style helps avoid the need for complicated stubs
 * that recreate behavior of the real component they're standing in for, in favor of injecting
 * values directly into the test right before they're used.
 *
 */

declare var jest, describe, it, expect

const bools = jest.fn()
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)

// Make the mock return `true` for the first call,
// and `false` for the second call
const result = [1, 2, 4].filter(bools)

describe('function mock', () => {
  it('true(1), false(2), true(4)', () => {
    expect(result).toEqual([1, 4])
  })
})

