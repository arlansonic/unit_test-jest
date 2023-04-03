import { SomaHorasExtras, calculoDescontos } from "../index.js";

describe('Testes dos Calculos de Filha', () => {
    it('Deve retornar a soma das horas extras', () => {
        const esperado = 2500;
        const retornado = SomaHorasExtras(2000, 500);

        expect(retornado).toBe(esperado);
    })

    it('Deve retornar o valor do desconto', () => {
        const esperado = 2300
        const retornado = calculoDescontos(2500, 200)

        expect(retornado).toBe(esperado)
    })
})
