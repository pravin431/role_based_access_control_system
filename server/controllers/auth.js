import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, Role } from '../models/index.js';
import { JWT_SECRET } from '../dbConfig.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username }, include: Role });
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};