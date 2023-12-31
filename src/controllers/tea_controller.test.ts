import request from "supertest";
import {app} from '../app';

test('GET /tea should return correct object', async () => {
  const res = await request(app).get('/tea').query({teaName: 'Lipton' });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
      drinkType: 'Tea',
      name: 'Lipton',
  });
});