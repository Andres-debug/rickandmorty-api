import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import db from './models/index.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

db.sequelize.sync({ force: false }).then(() => {
    console.log('Base de Datos Conectada');
    app.listen(PORT, () => console.log(`Servidor corriendo\n        en http://localhost:${PORT}`));
});