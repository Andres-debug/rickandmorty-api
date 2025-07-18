import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// import authRoutes from './routes/auth.routes.js';
import characterRoutes from './routes/characters.routes.js'
import { sequelize } from './config/db.config.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use('/api/auth', authRoutes);
app.use('/api/character', characterRoutes);

try{
    await sequelize.authenticate();
    console.log('BD Conectada');
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Servidor corriendo\n        en http://localhost:${PORT}`));

}catch(error){
    console.error('DB Error',error)
}
