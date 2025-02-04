const request = require('supertest');

const app = require('../../../src/app');
// const { GenericContainer } = require("testcontainers");

// const databaseContainer = await new GenericContainer("postgres:12-alpine")
//   .withEnv("POSTGRES_USER", "test")
//   .withEnv("POSTGRES_PASSWORD", "test")
//   .withEnv("POSTGRES_DB", "test")
//   .start();


// Decided to go with docker-compose files, to avoid env management in tests & more flexibility

describe("authHandler module", () => {
  describe("/register", () => {

    // Both tests now are produces irrelevant results due to pool problems

    it("should create new user in database (posititve)", () => {
      return request(app)
        .post('/api/auth/register')
        .send({ username: "root", password: "1234", role: "admin" })
        .expect(200)
    })

    it("should check sign-in route", () => {
      return request(app)
        .post('/api/auth/sign-in')
        .send({ username: "root", password: "1234" })
        .expect(200)
    })

    it("should not create duplicates (negative)", () => {
      return request(app)
        .post('/api/auth/register')
        .send({ username: "root", password: "1234", role: "admin" })
        .expect(500)
    })
  })
})
