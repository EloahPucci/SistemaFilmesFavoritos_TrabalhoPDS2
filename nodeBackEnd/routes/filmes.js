const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json(
        [
            {'codigo': 1, 'nomeFilme': 'Avengers - End Game', 'genero': 'Ação/Aventura', 'anoLancamento': 2019},
            {'codigo': 2, 'nomeFilme': 'Pretty woman', 'genero': 'Romance', 'anoLancamento': 1990}
        ]
    )
});

module.exports = router;