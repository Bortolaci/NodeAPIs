import router from './routes/userRouter';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

//Iniciar servidor
router.listen(PORT, () => console.log(`listening at port: ${PORT}`));