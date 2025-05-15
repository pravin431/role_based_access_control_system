import { Enterprise } from '../models/index.js';

export const listEnterprises = async (req, res) => {
  const list = await Enterprise.findAll();
  res.json(list);
};

export const createEnterprise = async (req, res) => {
  const ent = await Enterprise.create(req.body);
  res.status(201).json(ent);
};

export const updateEnterprise = async (req, res) => {
  await Enterprise.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Enterprise updated' });
};

export const deleteEnterprise = async (req, res) => {
  await Enterprise.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Enterprise deleted' });
};