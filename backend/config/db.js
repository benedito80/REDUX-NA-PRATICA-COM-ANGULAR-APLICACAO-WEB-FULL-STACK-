const mongoose = require("mongoose");
 
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (!err) {
    console.log("Conexão do MongoDB com sucesso.");
  } else {
    console.log(
      "Erro na conexão do MongoDB : " + JSON.stringify(err, undefined, 2)
    );
  }
});
