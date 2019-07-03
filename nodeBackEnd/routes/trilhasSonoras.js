const express = require('express');
const router = express.Router();
const TrilhasSonoras = require('../models/trilhasSonoras');

router.get("/", (req, res) =>
    TrilhasSonoras.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        }));

        router.get("/:id", (req, res) => {
            TrilhasSonoras.findOne({
                where: {
                    codigo: req.params.id,
                }
            }).then(result => {
                if(result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            }).catch(error => {
                res.status(412).json({msg: error.message});
            });
        })

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params', (req, res) => {
    var query = `%${req.query.nomeMusica}%`;

    console.log(query)
    TrilhasSonoras.findAll({where: {nomeMusica: { [Op.like]: query } } })
    .then(trilhasSonoras => res.json(trilhasSonoras))
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
    trilhasSonoras.destroy({
        where: {
            codigo: req.params.id
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    TrilhasSonoras.create(req.body)
    .then(result => res.json(result))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
});

router.put('/', (req, res) => {
    trilhasSonoras.update(req.body, {
        where: {
            codigo: req.body.codigo
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
});

    module.exports = router;