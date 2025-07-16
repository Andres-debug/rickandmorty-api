require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./models')

app.use(express.json())

db.sequelize.sync({force:false}).then(()=>{
    console.log('Base de Datos Conectada');
    app.listen(PORT,()=>console.log(`Servidor corriendo
        en http://localhost:${PORT}`))
})