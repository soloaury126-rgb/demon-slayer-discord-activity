import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// serve i file statici (la nostra app quiz)
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.send("Server attivo, pronto per l'Activity!");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server in ascolto su http://0.0.0.0:${PORT}`);
});
