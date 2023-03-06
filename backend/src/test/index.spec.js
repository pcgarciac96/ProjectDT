import app from "../app"
import { request } from "supertest"

describe('GET /login', () =>{
    test('Responde código con estodo 200', async () => {
        const response = await request(app).get('/login').send();
        console.log(response);
        // expect(response.status);
    })
})