import app from "./app.js";
import conexion from "./credentials.js";
app.listen(conexion.port, conexion.hostname, () => console.log(`http://${conexion.hostname}:${conexion.port}`));