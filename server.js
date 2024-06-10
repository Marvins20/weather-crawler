import "dotenv/config"
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/":"Curso de Node.js papi",
    "/biblioteca":"ai papi"
} 

app.listen(PORT, ()=> {
    console.log("servidor escutando");
})