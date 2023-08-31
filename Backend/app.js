import express from 'express'; //Se importa express
import cors from 'cors'; // Se importa cors
const app = express(); // Se inicializa express
app.use(express.json()); // Estamos usando el middleware express.json() para permitir que Express parsee el cuerpo de las solicitudes POST como JSON. 

app.use('/public', cors(), (req,res) => { // Se crea el enpoint publico permitiendo el acceso desde cualquier origen
  console.log(req.body);
  res.json('Solicitud correcta');
});

app.post('/restricted', (req, res )=> {
  console.log(JSON.stringify(req.body));
  res.json({ message: 'Esta es una respuesta restringida solo a un origen permitido.' })
});
export default app;