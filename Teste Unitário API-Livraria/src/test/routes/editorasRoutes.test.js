import { afterEach, beforeEach, describe, expect, jest } from '@jest/globals';
import app from '../../app.js'
import request from 'supertest'

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port)
})

afterEach(() => {
    server.close();
})

describe('GET em /editoras', () => {
    it('Deve retornar uma lista de editorias', async () => {
        const resp = await request(app)
            .get('/editoras')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)

        expect(resp.body[0].email).toEqual('e@e.com')
    })
})

let idResposta
describe('POST em /editoras', () => {
    it('Deve adicionar uma nova editora', async () => {
        const resp = await request(app)
            .post('/editoras')
            .send({
                nome: 'Editora 1',
                cidade: 'Manaus',
                email: 's@s.com',
            })
            .expect(201)

        idResposta = resp.body.content.id
    })

    it('Deve não adicionar nada ao passar um body vazio', async () => {
        await request(app)
            .post('/editoras')
            .send({})
            .expect(400)
    })
})

describe('GET em /editoras/id', () => {
    it('Deve retornar o recurso selecionado', async () => {
        await request(app)
            .get(`/editoras/${idResposta}`)
            .expect(200)
    })
})

describe('PUT em /editoras/id', () => {
    test.each([
        ['Nome: ', { nome: 'Casa do Codigo' }],
        ['Cidade: ', { cidade: 'AM' }],
        ['Email: ', { email: 'arlan.marreiro@gmail.com' }],
    ])('Deve alterar o campo nome %s', async (chave, param) => {
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request')
        await requisicao.request(app)
            .put(`/editoras/${idResposta}`)
            .send(param)
            .expect(204)

        expect(spy).toHaveBeenCalled();
    })
})

describe('DELETE em /editoras', () => {
    it('Deletar o recurso adicionado', async () => {
        await request(app)
            .delete(`/editoras/${idResposta}`)
            .expect(200)
    })
})