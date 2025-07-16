require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./models')
const authRoutes = require('./routes/auth.routes')

app.use(express.json())
app.use('/api/auth',authRoutes);

db.sequelize.sync({force:false}).then(()=>{
    console.log('Base de Datos Conectada');
    app.listen(PORT,()=>console.log(`Servidor corriendo
        en http://localhost:${PORT}`))
})