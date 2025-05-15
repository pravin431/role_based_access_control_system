import { Router } from 'express';
import { listProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.js';
import { verifyToken } from '../middleware/auth.js';
import rbac from '../middleware/rbac.js';

const router = Router();

router.get(
  '/',
  verifyToken,
  rbac({ module: 'Product', action: 'can_read' }),
  listProducts
);
router.post(
  '/',
  verifyToken,
  rbac({ module: 'Product', action: 'can_create' }),
  createProduct
);
router.put(
  '/:id',
  verifyToken,
  rbac({ module: 'Product', action: 'can_update' }),
  updateProduct
);
router.delete(
  '/:id',
  verifyToken,
  rbac({ module: 'Product', action: 'can_delete' }),
  deleteProduct
);

export default router;