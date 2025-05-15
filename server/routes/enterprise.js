import { Router } from 'express';
import { listEnterprises, createEnterprise, updateEnterprise, deleteEnterprise } from '../controllers/enterprise.js';
import { verifyToken } from '../middleware/auth.js';
import rbac from '../middleware/rbac.js';

const router = Router();

router.get(
  '/',
  verifyToken,
  rbac({ module: 'Enterprise', action: 'can_read' }),
  listEnterprises
);
router.post(
  '/',
  verifyToken,
  rbac({ module: 'Enterprise', action: 'can_create' }),
  createEnterprise
);
router.put(
  '/:id',
  verifyToken,
  rbac({ module: 'Enterprise', action: 'can_update' }),
  updateEnterprise
);
router.delete(
  '/:id',
  verifyToken,
  rbac({ module: 'Enterprise', action: 'can_delete' }),
  deleteEnterprise
);

export default router;