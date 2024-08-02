import express from 'express'

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

