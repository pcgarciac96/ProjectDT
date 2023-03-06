// import router from "../routes/userRouter"
// import { Router } from "express";
// import { request } from "supertest"
const request = require('supertest');
const express = require('express');
const app = express();
// app.get.
describe('GET /login', () =>{
    test('Responde código con estodo 200', async () => {
        const response = await request(app).post('/login').send();
        console.log(response);
        expect(response.status);
    })
})