import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import { JWT_SECRET } from '../dbConfig.js';

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = await User.findByPk(payload.id, { include: 'Role' });
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};