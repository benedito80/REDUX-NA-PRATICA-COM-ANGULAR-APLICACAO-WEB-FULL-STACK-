const express = require("express");
const router = express.Router();
const usuario = require("../controllers/Usuario.controller");

router.get("", usuario.getAll);
router.post("", usuario.post);
router.get("/:id", usuario.getById);
router.get("/cns/:cns", usuario.getByCns);
router.put("/:id", usuario.put);
router.delete("/:id", usuario.delete);

usuario

module.exports = router;
