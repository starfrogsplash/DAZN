import request from "supertest";
import {app}from '../src/app'

it('returns success message when checking for a user with no existing concurrent streams running', async()=> {
    const res1 = await request(app).get('/user1')
    expect(res1.status).toEqual(200)
    expect(res1.body).toEqual('Success! able to watch stream')
})

it('returns error message when checking for a user with more than 3 existing concurrent streams running', async()=> {
    const resData = await Promise.all([
        request(app).get('/user1'),
        request(app).get('/user1'),
        request(app).get('/user1'),
        request(app).get('/user1')
      ])

    const [res1, res2, res3, res4] = resData
    expect(res4.status).toEqual(403)
    expect(res4.body).toEqual('Forbidden: Too many cuncurrent streams')
})


it('returns success response for user2 profile', async()=> {
    const resData = await Promise.all([
        request(app).get('/user1'),
        request(app).get('/user2'),
        request(app).get('/user1'),
        request(app).get('/user2'),
        request(app).get('/user2')
      ])

    const [res1, res2, res3, res4, res5] = resData
    expect(res5.status).toEqual(200)
    expect(res5.body).toEqual('Success! able to watch stream')
})
