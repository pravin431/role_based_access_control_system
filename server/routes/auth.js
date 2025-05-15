import { Router } from 'express';
import { login } from '../controllers/auth.js';

const router = Router();

// Public login
router.post('/login', login);

export default router;