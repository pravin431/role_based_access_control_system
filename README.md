# RBAC Backend System

A modular and secure **Role-Based Access Control (RBAC)** backend system built using **Node.js**, **Express**, **Sequelize**, and **MySQL**. It enforces granular permissions on both API and (eventually) UI level access.

## 🔐 Key Features

- **Authentication** using JWT tokens.
- **Role & Permission management** with fine-grained access control.
- Full **CRUD APIs** for:
  - Users
  - Roles
  - Permissions
  - Enterprises
  - Employees
  - Products
- Middleware-based **RBAC enforcement** on protected routes.
- Uses **Sequelize ORM** with MySQL.
- Clean folder structure following MVC pattern.

---

## 🛠️ Technologies Used

- **Node.js**, **Express.js**
- **ES6 Modules** (`type: module`)
- **Sequelize ORM**
- **MySQL** (DB)
- **JWT** for Authentication
- **Postman** for API testing

---

## 📁 Project Structure

├── controllers/
│ ├── auth.js
│ ├── role.js
│ ├── permission.js
│ ├── user.js
│ ├── enterprise.js
│ ├── employee.js
│ └── product.js
├── middleware/
│ ├── auth.js ← Verifies JWT
│ └── rbac.js ← Permission check middleware
├── models/
│ ├── index.js ← Initializes Sequelize + associations
│ ├── Role.js
│ ├── Permission.js
│ ├── role_permissions.js
│ ├── User.js
│ ├── Enterprise.js
│ ├── Employee.js
│ └── Product.js
├── routes/
│ ├── auth.js
│ ├── roles.js
│ ├── permissions.js
│ ├── users.js
│ ├── enterprises.js
│ ├── employees.js
│ └── products.js
├── .env
├── server.js


---

## 🚀 Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/pravin431/role_based_access_control_system.git
cd role_based_access_control_system
npm install
```
### 2. Database Setup
2. Configure Environment
Create a .env file:
```bash
# .env  
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=rbacdb
JWT_SECRET=your_secret_key
JWT_EXPIRATION=1h
```
3. Run the Server
```bash
npm run dev                     # Runs using nodemon
```