import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect(process.env.MONGO_CONECTION_STRING);

    return mongoose.connection;
}

export default conectaNaDatabase;

