import request from "supertest";
import {app} from '../app';

describe ('Test Coffee Controller API endpoint request', () => {
  test ('Get should return correct message', async () =>{
    const res = await request(app).get('/coffeelover');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('I like coffee!');
  });
})