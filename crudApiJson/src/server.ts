import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const PORT = process.env.PORT || 5000;

//Iniciar servidor
app.listen(PORT, () => console.log(`listening at port: ${PORT}`));