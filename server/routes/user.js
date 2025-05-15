import { Router } from 'express';
import { listUsers, createUser, updateUser, deleteUser } from '../controllers/user.js';
import { verifyToken } from '../middleware/auth.js';
import rbac from '../middleware/rbac.js';

const router = Router();

router.get(
  '/',
  verifyToken,
  rbac({ module: 'User', action: 'can_read' }),
  listUsers
);
router.post(
  '/',
  verifyToken,
  rbac({ module: 'User', action: 'can_create' }),
  createUser
);
router.put(
  '/:id',
  verifyToken,
  rbac({ module: 'User', action: 'can_update' }),
  updateUser
);
router.delete(
  '/:id',
  verifyToken,
  rbac({ module: 'User', action: 'can_delete' }),
  deleteUser
);

export default router;