const request = require('supertest')

const User = require('./../src/models/User')

const app = require('./../src/server')

describe("Create User", () =>{
    it("create a new user on database", async () => {
        const response = await request(app).post("/users").send({
            email: 'teste@ddomain.com',
            password: '1234', 
            access: 'clients'
        })
        expect(response.status).toBe(200)
    })
})