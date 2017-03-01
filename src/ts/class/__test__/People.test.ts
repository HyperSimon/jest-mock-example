declare var jest, describe, it, expect

jest.mock('', () => ({ isMock: true }))
import People from "../class/People";

describe('people use mock', () => {
  it('should be true', () => {
    const people = new People()
    expect(people).toEqual({ isMock: true })
  })
})
