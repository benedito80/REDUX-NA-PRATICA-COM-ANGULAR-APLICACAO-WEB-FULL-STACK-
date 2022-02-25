"use strict";
require("../models/Usuario.model");
const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario");

//FUNÇÃO POST
exports.post = async (req, res, next) => {
  const bodyData = req.body; 

  try {
    const data = { ...bodyData };
    const newObject = await Usuario.create(data);

    return res.status(200).json(newObject);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    var data = await Usuario.find();

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    var data = await Usuario.findById(id);

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.getByCns = async (req, res, next) => {
  const { cns } = req.params;

  try {
    var data = await Usuario.find({ cns: cns });

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.put = async (req, res, next) => {
  const { id } = req.params;
  const bodyData = req.body;
  try {
    const updateUsuario = await Usuario.findByIdAndUpdate(id, bodyData, {
      new: true,
    });

    return res.status(200).json(updateUsuario);
  } catch (e) {
    return res.status(400).json(e);
  }
};

//FUNÇÃO DELETE
exports.delete = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteUsuario = await Usuario.findByIdAndDelete(id);
    return res.status(200).json(deleteUsuario);
  } catch (e) {
    return res.status(400).json(e);
  }
};
