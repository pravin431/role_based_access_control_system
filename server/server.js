import dotenv from 'dotenv';
import express from 'express';
import { sequelize } from './models/index.js';
import authRoutes from './routes/auth.js';
import roleRoutes from './routes/role.js';
import permissionRoutes from './routes/permission.js';
import userRoutes from './routes/user.js';
import enterpriseRoutes from './routes/enterprise.js';
import employeeRoutes from './routes/employee.js';
import productRoutes from './routes/product.js';
import { PORT } from './dbConfig.js';
dotenv.config();
const app = express();//server instance created
app.use(express.json());

// Public
app.use('/api/auth', authRoutes);

// Protected via route-level middleware
app.use('/api/roles', roleRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/enterprises', enterpriseRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// first sync the database and then start the server
// This ensures that the database is ready before the server starts accepting requests
// and that the models are in sync with the database schema
sequelize.sync({alter:false}).then(() => {
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
