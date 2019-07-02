const express = require('express');
const router = express.Router();
const Artista = require('../models/artistas');

router.get("/", (req, res) =>
    Artista.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        }));

        router.get("/:id", (req, res) => {
            Artista.findOne({
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
    var query = `%${req.query.nomeArtista}%`;

    console.log(query)
    Artista.findAll({where: {nomeArtista: { [Op.like]: query } } })
    .then(artistas => res.json(artistas))
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
    Artista.destroy({
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
    Artista.create(req.body)
    .then(result => res.json(result))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
});

router.put('/', (req, res) => {
    Artista.update(req.body, {
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