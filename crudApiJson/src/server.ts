import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const PORT = process.env.PORT || 3000;

//Iniciar servidor
app.listen(PORT, () => console.log(`listening at port: ${PORT}`));