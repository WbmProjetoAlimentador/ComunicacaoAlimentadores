import express from "express";
import cors from "cors";
import ModuloMestreRouter from "./src/routes/moduloMestreRouter.js";
import RouterWS from "./src/routes/webSocketRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/moduloMestre", ModuloMestreRouter);

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor Rodando em http://localhost:${PORT}`);
});

RouterWS(server);
