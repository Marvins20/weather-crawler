import express from "express"
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (error)=> {
    console.error("erro de conexão", error);
})

conexao.once("open", ()=> {
    console.log("Conexão feita com o banco com suceso!");
})

const app = express();
routes(app);


app.delete("/livros/:id", (req, res) => {
    const index = livros.findIndex((livro)=>livro.id==Number(req.params.id));
    livros.splice(index,1);
    res.status(200).json(livros);
})

export default app;

