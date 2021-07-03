import request from "supertest";
import {app}from '../src/app'
import {mocked} from 'ts-jest/utils'
import axios from 'axios'

jest.mock('axios')
const axiosMocked = mocked(axios, true)

it('checks default endpoint', async()=> {
    const res = await request(app).get('/')
    expect(res.body).toEqual('success')
})

it('returns data from axios res', async()=> {
    axiosMocked.get.mockResolvedValueOnce({data: {name: "Droid", films: ["url1", "url2"]}})
    const res = await request(app).get('/2')
    expect(res.body).toEqual({name: "Droid", films: ["url1", "url2"]})
})