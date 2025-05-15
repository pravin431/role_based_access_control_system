import { Router } from 'express';
import { listEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.js';
import { verifyToken } from '../middleware/auth.js';
import rbac from '../middleware/rbac.js';

const router = Router();

router.get(
  '/',
  verifyToken,
  rbac({ module: 'Employee', action: 'can_read' }),
  listEmployees
);
router.post(
  '/',
  verifyToken,
  rbac({ module: 'Employee', action: 'can_create' }),
  createEmployee
);
router.put(
  '/:id',
  verifyToken,
  rbac({ module: 'Employee', action: 'can_update' }),
  updateEmployee
);
router.delete(
  '/:id',
  verifyToken,
  rbac({ module: 'Employee', action: 'can_delete' }),
  deleteEmployee
);

export default router;