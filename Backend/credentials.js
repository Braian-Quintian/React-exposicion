import { config } from 'dotenv';
config();
const { CONFIG } = process.env;
const conexion = JSON.parse(CONFIG);
const credentials = {hostname: conexion.hostname,port: conexion.port}
export default credentials;