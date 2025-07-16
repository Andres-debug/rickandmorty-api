const db = require('../models');
const bcrypt = require('bcrypt');

const User = db.User;

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await User.findOne({ where: { username } });
    if (exists) return res.status(400).json({ error: 'Usuario ya existe' });

    const newUser = await User.create({ username, password });
    res.status(201).json({ message: 'Usuario registrado', user: { id: newUser.id, username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Contraseña incorrecta' });

    res.status(200).json({ message: 'Login exitoso', user: { id: user.id, username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};