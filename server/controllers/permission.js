import { Permission } from '../models/index.js';

export const listPermissions = async (req, res) => {
  const perms = await Permission.findAll();
  res.json(perms);
};

export const createPermission = async (req, res) => {
  const perm = await Permission.create(req.body);
  res.status(201).json(perm);
};

export const updatePermission = async (req, res) => {
  await Permission.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Permission updated' });
};

export const deletePermission = async (req, res) => {
  await Permission.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Permission deleted' });
};