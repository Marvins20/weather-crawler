import express from "express"
import weatherRoutes from "./weather-routes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Weather Crawler"))
    console.log("Hello World")
    app.use(express.json(), weatherRoutes)
};

export default routes;