import express from "express"
import LivroController from "../api/controllers/livroController.js"

const routes = express.Router();

routes.get("/weather", LivroController.listarLivros);
// routes.get("/forecast", LivroController.getForecast);
routes.get("/weather/:id", LivroController.listarLivroPorId);
routes.post("/weather", LivroController.cadastrarLivro);
routes.put("/weather/:id", LivroController.atualizarLivroPorId);
routes.delete("/weather/:id", LivroController.excluirLivroPorId);

export default routes;