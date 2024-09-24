import mongoose from "mongoose";
import nodemon from "nodemon";

async function conectaNaDatabase(){
    mongoose.connect(process.env.MONGO_CONECTION_STRING);dasd
    return mongoose.connection;
}



export default conectaNaDatabase;

