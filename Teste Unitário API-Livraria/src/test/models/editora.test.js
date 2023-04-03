import { describe, expect, it, jest } from '@jest/globals';
import Editora from '../../models/editora';

describe('Testando o Modelo Editora', () => {
    const objetoEditora = {
        nome: 'CDC',
        cidade: 'Manaus',
        email: 'arlan.marreiro@gmail.com'
    };

    it('Deve criar um objeto Editora', () => {
        const editora = new Editora(objetoEditora);
        expect(editora).toEqual(expect.objectContaining(objetoEditora));
    })

    it.skip('Deve salvar Editora no Banco de Dados', async () => {
        const editora = new Editora(objetoEditora);
        const dados = await editora.salvar()
        const retornado = await Editora.pegarPeloId(dados.id)

        expect(retornado).toEqual(expect.objectContaining({
            id: expect.any(Number),
            ...objetoEditora,
            created_at: expect.any(String),
            updated_at: expect.any(String),
        }))
    });

    it('Deve fazer uma chamada simulada no Banco dados', async () => {
        const editora = new Editora(objetoEditora);

        editora.salvar = jest.fn().mockReturnValue({
            id: 1,
            nome: 'CDC',
            cidade: 'Manaus',
            email: 'arlan.marreiro@gmail.com',
            created_at: '2023-04-02T00:00:00.000Z',
            updated_at: '2023-04-02T00:00:00.000Z',
        })

        const retorno = editora.salvar()

        expect(retorno).toEqual(expect.objectContaining({
            id: expect.any(Number),
            ...objetoEditora,
            created_at: expect.any(String),
            updated_at: expect.any(String),
        }))
    })
});
