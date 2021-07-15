import request from "supertest";
import { app } from '../src/app'
import { UserStreams } from '../src/database/index'
import { mocked } from 'ts-jest/utils'

jest.mock('../src/database/index')

const mockedDatabase = mocked(UserStreams, true)

it('returns success message when checking for a user with no existing concurrent streams running', async () => {
  mockedDatabase.prototype.getUserStreamCount.mockReturnValue(1)

  const response = await request(app).get('/user1')

  expect(response.status).toEqual(200)
  expect(response.body).toEqual('Success! able to watch stream')
})

it('returns success message when checking for a user with no existing concurrent streams running', async () => {
  mockedDatabase.prototype.getUserStreamCount.mockReturnValue(2)

  const response = await request(app).get('/user1')

  expect(response.status).toEqual(200)
  expect(response.body).toEqual('Success! able to watch stream')
})

it('returns error message when checking for a user with more than 3 existing concurrent streams running', async () => {
  mockedDatabase.prototype.getUserStreamCount.mockReturnValue(3)

  const response = await request(app).get('/user1')
  
  expect(response.status).toEqual(403)
  expect(response.body).toEqual('Forbidden: Too many cuncurrent streams')
})
