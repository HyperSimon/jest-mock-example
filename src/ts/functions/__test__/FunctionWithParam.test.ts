/**
 * The mockImplementation method is useful when you need to define the
 * default implementation of a mock function that is created from another module:
 */

declare var jest, describe, it, expect
jest.mock('../FuncitonWithParam')
import functionWithParam from "../FuncitonWithParam";
functionWithParam.mockImplementation((param) => 'static string ' + param)

describe('function mock', () => {
  it('应该恒为 static string', () => {
    const p = 'wangzhen'
    expect(functionWithParam(p)).toEqual('static string ' + p)
  })
})

