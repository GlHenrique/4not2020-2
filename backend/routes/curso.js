const express = require('express');
const controller = require('../controllers/curso');

const router = express.Router();

router.post('/', controller.novo);
router.get('/', controller.listar);
router.get('/:id', controller.listarUm);
router.put('/:id', controller.editar);
router.delete('/:id', controller.excluir);

module.exports = router;