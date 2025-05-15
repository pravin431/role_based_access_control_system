import { Router } from 'express';
import { listPermissions, createPermission, updatePermission, deletePermission } from '../controllers/permission.js';
import { verifyToken } from '../middleware/auth.js';
import rbac from '../middleware/rbac.js';

const router = Router();

router.get(
  '/',
  verifyToken,
  rbac({ module: 'Permission', action: 'can_read' }),
  listPermissions
);
router.post(
  '/',
  verifyToken,
  rbac({ module: 'Permission', action: 'can_create' }),
  createPermission
);
router.put(
  '/:id',
  verifyToken,
  rbac({ module: 'Permission', action: 'can_update' }),
  updatePermission
);
router.delete(
  '/:id',
  verifyToken,
  rbac({ module: 'Permission', action: 'can_delete' }),
  deletePermission
);

export default router;