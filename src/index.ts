import express, { Application } from "express";
import getEnv from "./config/envLoad";

const app:Application = express();
const { PORT } = getEnv();

app.use(express.json());

app.get("/", (_req, res) => {
	res.send("Hello, World!");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});