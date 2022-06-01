const request = require('supertest')

const app = require('./../src/server')

describe("Create User", () =>{
    it("create a new user on database", async () => {
        const response = await request(app).post("/users").send({
            email: 'teste@domain.com',
            password: '1234', 
            access: 'clients'
        })
        expect(response.status).toBe(200)
    })
})
describe("Create Client", () =>{
    it("create a new client on database", async () => {
        const response = await request(app).post("/clients").send({
            name:"Client 001",
            password:"123456",
            email:"client001@domain.com",
	        cpf:"000.000.000-00",
	        street:"Rua Exemple",
	        city:"City Exemple",
	        uf:"AA"
        })
        expect(response.status).toBe(200)
    })
})
describe("Create Employees", () =>{
    it("create a new Employ on database", async () => {
        const response = await request(app).post("/employees").send({
            name:"Employ 001",
            email:"employ001@domain.com",
            password:"123456",
	        street:"Rua Exemple",
	        city:"City Exemple",
	        uf:"AA"
        })
        expect(response.status).toBe(200)
    })
})
describe("Create Products", () =>{
    it("create a new Product on database", async () => {
        const response = await request(app).post("/products").send({
            description: "Product001",
            amount: 15,
            value: 5.5
        })
        expect(response.status).toBe(200)
    })
})