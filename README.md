# Express & Mongoose API Boilerplate (TypeScript Edition)

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-18.x-339933.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-4.x-000000.svg" alt="Express.js">
  <img src="https://img.shields.io/badge/Mongoose-8.x-880000.svg" alt="Mongoose">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
</p>

<p align="center">
  <i>"Clean Code, Strong Foundation, Easy Scaling"</i>
</p>

A robust and scalable boilerplate for building RESTful APIs using Node.js, Express, and Mongoose, now with the power and safety of TypeScript. It comes pre-configured with JWT-based authentication, validation, role-based access, and a structured, type-safe project layout to kickstart your next project.

---

## ✨ Core Features

* **Type Safety:** Fully written in TypeScript for improved developer experience and reduced runtime errors.
* **RESTful API Structure:** Logically organized API endpoints for resources.
* **JWT Authentication:** Secure auth flow using short-lived Access Tokens and long-lived Refresh Tokens (stored in `httpOnly` cookies).
* **Middleware Protection:** Pre-built middleware to protect routes based on user authentication.
* **Role-Based Access Control (RBAC):** Structure for defining user roles (`user`, `admin`) and restricting endpoint access.
* **Environment-Based Configuration:** Manage application settings easily using `.env` files.
* **Centralized Error Handling:** A single, robust mechanism for handling application errors.
* **Ready to Build:** Includes scripts for compiling TypeScript to JavaScript for production deployment.

---

## 🛠️ Tech Stack & Tools

### Core Technologies
| Technology | Description |
| :--- | :--- |
| **TypeScript** | Statically typed superset of JavaScript |
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Fast, unopinionated, minimalist web framework |
| **MongoDB** | NoSQL database for modern applications |
| **Mongoose** | Elegant MongoDB object modeling for Node.js |
| **jsonwebtoken** | For generating and verifying JSON Web Tokens |
| **bcryptjs** | For hashing passwords |

### Development Tools
| Tool | Description |
| :--- | :--- |
| **ts-node** | Execute TypeScript on Node.js without pre-compiling |
| **nodemon** | Automatically restart the server on file changes |
| **@types/* packages** | Type definitions for external libraries |

---

## ⚡ API Endpoints

(The API endpoints remain the same as the JavaScript version)

### 👤 User Management
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/users` | Get all users | `Admin` |
| `GET` | `/api/v1/users/:id` | Get a single user by ID | `Admin` |
| `PUT` | `/api/v1/users/:id` | Update user details | `Owner/Admin` |
| `DELETE` | `/api/v1/users/:id` | Delete a user | `Owner/Admin` |

### 🔐 Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Register a new account |
| `POST` | `/api/v1/auth/login` | Login with email & password |
| `POST` | `/api/v1/auth/logout` | Logout the current user |
| `POST` | `/api/v1/auth/refresh-token` | Get a new access token |
| `PATCH` | `/api/v1/auth/change-password`| Change the password |

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn
* MongoDB instance (local, or a cloud service like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/express-boilerplate-ts.git](https://github.com/your-username/express-boilerplate-ts.git)
    cd express-boilerplate-ts
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Now, open the `.env` file and add your configuration details (Database URI, JWT secrets, etc.).

4.  **Run the development server:**
    This command uses `nodemon` and `ts-node` to automatically restart the server on any file changes.
    ```bash
    npm run dev
    ```
    The API will be available at `http://localhost:8000` (or the `PORT` you specified).

### Building for Production

1.  **Compile the TypeScript code:**
    This command uses the TypeScript compiler (`tsc`) to transpile your `.ts` files into `.js` files in a `dist` directory.
    ```bash
    npm run build
    ```

2.  **Run the production server:**
    This command runs the compiled JavaScript code from the `dist` folder.
    ```bash
    npm run start
    ```
