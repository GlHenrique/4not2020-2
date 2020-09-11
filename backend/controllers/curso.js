const Curso = require('../models/Curso');

const controller = {};

controller.novo = async (req, res) => {
  try {
    await Curso.create(req.body);
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
    const dados = await Curso.find();
    res.send(dados);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.listarUm = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Curso.findById(id);
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
  try {
    const { id } = req.params;
    const {
      nome, ementa, carga_horaria, nivel, valor_curso,
    } = req.body;

    await Curso.updateOne({ _id: id }, {
      $set: {
        nome, ementa, carga_horaria, nivel, valor_curso,
      },
    });
    res.send(204);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.excluir = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Curso.findByIdAndRemove(id);
    if (dados) {
      res.json(dados);
    } else {
      res.send(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = controller;
