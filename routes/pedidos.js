const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET dentro da rota de pedidos'
    });
});

router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };
    res.status(201).send({
        mensagem: 'Usando o Post dentro da rota de pedidos',
        pedidoCriado: pedido
    })
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    res.status(200).send({
        mensagem: 'Usando GET dentro da rota de pedidos',
        id: id
    });
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de pedidos'
    })
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de pedidos'
    })
});

module.exports = router;