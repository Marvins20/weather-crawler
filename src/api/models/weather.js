import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    city: { type: String, required: true},
    region: { type: String },
    country: { type: String },
    tz_id: { type: String },
    data: { type: Date },
    maxtemp_c: { type: Number },
    maxtemp_f: { type: Number },
    mintemp_c: { type: Number },
    mintemp_f: { type: Number },
    avgtemp_c: { type: Number },
    avgtemp_f: { type: Number },
    avghumidity: { type: Number },
    totalprecip_mm: { type: Number },
    totalprecip_in: { type: Number },
    totalsnow_cm: { type: Number },
    maxwind_mph: { type: Number },
    maxwind_kph: { type: Number },
}, {versionKey: false});


const weather = mongoose.model("weather", weatherSchema);

export default weather;