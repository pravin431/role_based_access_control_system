import { Role, Permission } from '../models/index.js';

export const listRoles = async (req, res) => {
  const roles = await Role.findAll({ include: Permission });
  res.json(roles);
};

export const createRole = async (req, res) => {
  const role = await Role.create(req.body);
  res.status(201).json(role);
};

export const updateRole = async (req, res) => {
  await Role.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Role updated' });
};

export const deleteRole = async (req, res) => {
  await Role.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Role deleted' });
};