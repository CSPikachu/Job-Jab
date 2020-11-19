const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe("Route: '/' ", () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect(200)
          .expect('Content-Type', /text\/html/);
      });
    });
  });
  describe("Route: '/test' Catch all", () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/test')
          .expect(200)
          .expect('Content-Type', /text\/html/);
      });
    });
  });
  describe("Route: '/jobapps'", () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/jobapps')
          .expect(200)
          .expect('Content-Type', /application\/json/);
      });
    });
    // describe('POST', () => {
    //   it('responds with 201 status', () => {
    //     return request(server).post('/jobapps').expect(201);
    //   });
    // });
  });
});
