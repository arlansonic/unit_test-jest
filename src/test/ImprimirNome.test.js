import Soma from '../index'

test('Deve retornar a soma dos valores', () =>{
    const esperado = 3
    const result = Soma(1,2)
    

    expect(result).toBe(esperado)
})


