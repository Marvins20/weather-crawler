import express from "express"
import weatherRoutes from "./weather-routes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Weather Crawler"))

    app.use(express.json(), weatherRoutes)
};

export default routes;