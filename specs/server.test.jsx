const request = require('supertest');

const port = 3017;

describe('/api/galleries/:id', () => {
  const id = Math.floor(Math.random() * (100 - 1) + 1);

  it('makes a succesful API get call', (done) => {
    request(`localhost:${port}`)
      .get(`/api/galleries/${id}`)
      .expect(200, done);
  });

  it('brings back the right data', (done) => {
    request(`localhost:${port}`)
      .get(`/api/galleries/${id}`)
      .send()
      .expect((res) => {
        res.body[0].id = id;
      })
      .expect(200, done);
  });
});
