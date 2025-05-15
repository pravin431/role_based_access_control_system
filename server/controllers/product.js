import { Product } from '../models/index.js';

export const listProducts = async (req, res) => {
  const prods = await Product.findAll();
  res.json(prods);
};

export const createProduct = async (req, res) => {
  const prod = await Product.create(req.body);
  res.status(201).json(prod);
};

export const updateProduct = async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Product updated' });
};

export const deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Product deleted' });
};