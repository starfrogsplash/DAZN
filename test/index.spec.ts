import request from "supertest";
import {app}from '../src/app'

it('checks default', async()=> {
    const res1 = await request(app).get('/user1')
    expect(res1.body).toEqual('Success! able to watch stream')
})

it('checks default endpoint', async()=> {
    const resData = await Promise.all([
        request(app).get('/user1'),
        request(app).get('/user1'),
        request(app).get('/user1'),
        request(app).get('/user1')
      ])

    const [res1, res2, res3, res4] = resData
    expect(res4.body).toEqual('Too many cuncurrent streams')
})


it('checks default endpoint 2nd user', async()=> {
    const resData = await Promise.all([
        request(app).get('/user1'),
        request(app).get('/user2'),
        request(app).get('/user1'),
        request(app).get('/user2'),
        request(app).get('/user2')
      ])

    const [res1, res2, res3, res4, res5] = resData
    expect(res5.body).toEqual('Success! able to watch stream')
})
