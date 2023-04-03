const SomaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculoDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
    const assercoes = {
        ehExatamenteIgualA(esperado) {
            if (valor !== esperado) {
                throw new Error(`O valor ${valor} é diferente do esperado ${esperado}`)
            }
        }
    }
    return assercoes
}

const teste = (titulo, funcaoDeTeste) => {
    try {
        funcaoDeTeste();
        console.log(`${titulo} passou no teste`)
    } catch (error) {
        console.error(`${titulo} não passou no teste`)
    }
}

teste('SomaHorasExtras', () => {
    const esperado = 2500;
    const retornado = SomaHorasExtras(2000, 500);
    verifiqueSe(retornado).ehExatamenteIgualA(esperado);
})

teste('CalculoDesconto', () => {
    const esperado = 2300
    const retornado = calculoDescontos(2500, 200)
    verifiqueSe(retornado).ehExatamenteIgualA(esperado)
})