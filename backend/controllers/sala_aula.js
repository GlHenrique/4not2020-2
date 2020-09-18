const SalaAula = require('../models/SalaAula');

const controller = {};

controller.novo = async (req, res) => {
  try {
    await SalaAula.create(req.body);
    // HTTP 201: Created
    res.status(201).end();
  } catch (erro) {
    console.log(erro);
    // HTTP 500: Internal Server Error
    res.status(500).send(erro);
  }
};

controller.listar = async (req, res) => {
  try {
    const dados = await SalaAula.find();
    res.send(dados);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.listarUm = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await SalaAula.findById(id);
    if (dados) {
      res.send(dados);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.editar = async (req, res) => {
  const { id } = req.params;
  const {
    nome, ementa, carga_horaria, nivel, valor_SalaAula,
  } = req.body;
  try {
    const dados = await SalaAula.findOneAndUpdate(id, {
      nome, ementa, carga_horaria, nivel, valor_SalaAula,
    });
    if (dados) {
      res.send(204);
    } else {
      res.status(400).json({
        error: 'Id not found',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.excluir = async (req, res) => {
  const { id } = req.body;
  try {
    const dados = await SalaAula.findByIdAndDelete(id);
    if (dados) {
      res.send(204);
    } else {
      res.status(400).json({
        error: 'Id not found',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = controller;
