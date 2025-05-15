import bcrypt from 'bcryptjs';
import { User } from '../models/index.js';

export const listUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const createUser = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  const user = await User.create({ ...req.body, password_hash: hash });
  res.status(201).json(user);
};

export const updateUser = async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'User updated' });
};

export const deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: 'User deleted' });
};