<div align="center">

# 🔥 Express.js Authentication Boilerplate 🔥

**A ready-to-use, secure, and scalable boilerplate for new Node.js & Express.js server projects.**

This project is designed to help you skip the repetitive setup process. It comes pre-configured with a complete **Authentication & Authorization** system, so you can start building your core application logic immediately.

<p>
  <a href="https://github.com/[YOUR-USERNAME]/[YOUR-REPO]/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/[YOUR-USERNAME]/[YOUR-REPO]/[YOUR-WORKFLOW-FILE.yml]?style=for-the-badge&logo=githubactions&logoColor=white&label=Build" alt="Build Status">
  </a>
  <a href="https://github.com/[YOUR-USERNAME]/[YOUR-REPO]/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/[YOUR-USERNAME]/[YOUR-REPO]?style=for-the-badge&color=blue&label=License" alt="License">
  </a>
  <a href="https://github.com/[YOUR-USERNAME]/[YOUR-REPO]/issues">
    <img src="https://img.shields.io/github/issues/[YOUR-USERNAME]/[YOUR-REPO]?style=for-the-badge&color=brightgreen" alt="Issues">
  </a>
</p>
</div>

---

## 🚀 Features Included

This boilerplate comes packed with essential features:

* **🔐 Secure Authentication:** Full JWT (Access & Refresh Tokens) flow for user login and registration.
* **🛡️ Password Hashing:** Uses `bcrypt` for securely hashing and comparing passwords.
* **🔒 Route Protection:** Pre-built middleware to easily protect routes based on user roles or login status.
* **📦 TypeScript Ready:** Built with TypeScript for a type-safe, scalable, and maintainable codebase.
* **⚙️ Environment Variables:** All configurations are loaded from `.env` files using `dotenv`.
* **✨ Linting & Formatting:** Pre-configured `ESLint` and `Prettier` for clean, consistent code.
* **🔄 Development Server:** Uses `ts-node-dev` (or similar) for automatic server restarts on file changes.
* **🛡️ Robust Validation:** Ready for `Zod` or `Joi` to validate incoming request bodies.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Backend** | `Express.js` |
| **Language** | `TypeScript` |
| **Database** | `[MongoDB (Mongoose)]` or `[PostgreSQL (Prisma)]` |
| **Authentication** | `jsonwebtoken` (JWT), `bcrypt` |
| **Validation** | `[Zod / Joi / express-validator]` |
| **Config** | `dotenv` |
| **Dev Tools** | `ts-node-dev`, `eslint`, `prettier` |

---

## 🏁 How to Use This Boilerplate

Follow these steps to start your new project *using* this boilerplate.

### Step 1: Get the Code

You have two options:

**Option 1 (Recommended): Use as a GitHub Template**
1.  Click the green **"Use this template"** button at the top of this repository page.
2.  Choose **"Create a new repository"**.
3.  Give your new repository a name (e.g., `my-new-api-server`).
4.  Clone your newly created repository:
    ```sh
    git clone [https://github.com/](https://github.com/)[YOUR-USERNAME]/[YOUR-NEW-REPO-NAME].git
    cd [YOUR-NEW-REPO-NAME]
    ```

**Option 2: Clone Manually**
1.  Clone this boilerplate repository:
    ```sh
    git clone [https://github.com/](https://github.com/)[YOUR-USERNAME]/[THIS-BOILERPLATE-REPO].git
    cd [THIS-BOILERPLATE-REPO]
    ```
2.  Remove the existing Git history to start fresh:
    ```sh
    rm -rf .git
    git init
    ```

### Step 2: Install Dependencies

Install all the necessary packages.
```sh
npm install
