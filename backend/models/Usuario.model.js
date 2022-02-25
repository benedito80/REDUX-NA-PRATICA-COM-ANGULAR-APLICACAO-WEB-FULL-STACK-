const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  usuario: {
    type: String,
  },
  cns: {
    type: String,
    //required: true,
  },
  bairro: {
    type: String,
  },
  acs: {
    type: String,
  },
  hipertenso: {
    type: Boolean,
    default: false
  },
  diabete: {
    type: Boolean,
    default: false
  },
});
module.exports = mongoose.model("Usuario", Schema);
