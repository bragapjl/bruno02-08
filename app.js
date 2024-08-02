import express from 'express';
const servidor = express()

servidor.use(express.json())

servidor.get('/calcula/soma/:n1/:n2', (req,resp) => {

    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let soma = n1 + n2;

    resp.send({
        entradas: {
            numero1: n1,
            numero2: n2
        },
        soma: soma
    })
})

servidor.get('/calculadora/multiplica/:n1/:n2', (req, resp) => {
    let numero1 = Number(req.params.n1)
    let numero2 = Number(req.params.n2)
    let multiplica = numero1 * numero2

    resp.send({

        numerosDigitados: {
            PrimeiroNumero: numero1,
            SegundoNumero: numero2 
        },
        final: multiplica
    })
})





servidor.listen(
    5001,
     () => console.log('API SUBIU BOLADO NA PORTA 5001'))