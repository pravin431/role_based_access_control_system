import { Router } from 'express';
import { listRoles, createRole, updateRole, deleteRole } from '../controllers/role.js';
import { verifyToken } from '../middleware/auth.js';
import rbac from '../middleware/rbac.js';

const router = Router();

router.get(
  '/',
  verifyToken,
  rbac({ module: 'Role', action: 'can_read' }),
  listRoles
);
router.post(
  '/',
  verifyToken,
  rbac({ module: 'Role', action: 'can_create' }),
  createRole
);
router.put(
  '/:id',
  verifyToken,
  rbac({ module: 'Role', action: 'can_update' }),
  updateRole
);
router.delete(
  '/:id',
  verifyToken,
  rbac({ module: 'Role', action: 'can_delete' }),
  deleteRole
);

export default router;