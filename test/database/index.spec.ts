import { UserStreams } from '../../src/database/index'

it('stream count starts at 0', () => {
    const response = new UserStreams()
    expect(response.getUserStreamCount('abc1')).toBe(0)
})

it('stream count starts at 3', () => {
    const response = new UserStreams()

    response.addUserStream('abc1').addUserStream('abc1').addUserStream('abc1')
    expect(response.getUserStreamCount('abc1')).toBe(3)
})





