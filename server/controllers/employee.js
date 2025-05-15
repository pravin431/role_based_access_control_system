import { Employee } from '../models/index.js';

export const listEmployees = async (req, res) => {
  const emps = await Employee.findAll();
  res.json(emps);
};

export const createEmployee = async (req, res) => {
  const emp = await Employee.create(req.body);
  res.status(201).json(emp);
};

export const updateEmployee = async (req, res) => {
  await Employee.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Employee updated' });
};

export const deleteEmployee = async (req, res) => {
  await Employee.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Employee deleted' });
};