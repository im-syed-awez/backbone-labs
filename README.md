# Backbone Labs

Welcome to my backend development learning repository. This repo tracks my journey from low-level native modules to building full-scale applications.

## 📂 Repository Structure

*   [backend-1](./backend-1/) — Native Node.js Server & Core HTTP Module
*   [backend-2](./backend-2/) — Intro to Express.js, API, REST-api, Basic Routing, and Env Management
*   [backend-3](./backend-3/) — Intro to MVC (Model-View-Controller) and MongoDB Integration 
*   [backend-4](./backend-4/) — Complete Product CRUD Operations


---

## Lab Breakdown

### 1. Backend-1: Native Node.js Server
An exploration of how web servers were built using native **Node.js** before frameworks like Express.js became the standard.

#### What I Did:
*   **Explored Native Node.js Modules:** Used the built-in `http` module to handle networking without external dependencies.
*   **Created a Core Server:** Initialized a server using `http.createServer()` to listen for incoming network requests.
*   **Handled Requests & Responses:** Logged incoming connections to the terminal and returned a basic text response (`"Hello from Server"`).

#### How to Run:
```bash
cd backend-1
node index.js
```

---

### 2. Backend-2: Introduction to Express.js & Environment Variables
Migrated from native modules to the Express.js framework to build a structured, routing-capable environment.

#### Core Concepts Learned:
*   **Express.js:** A minimal, flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*   **API (Application Programming Interface):** A software intermediary that allows two applications to talk to each other.
*   **REST API:** An API architectural style that uses HTTP requests (GET, POST, PUT, DELETE) to access and manipulate data using standard, stateless operations.

#### What I Did:
*   **Framework Setup:** Initialized the project layout using `express-generator` alongside manual configuration (`npm init -y`).
*   **Basic Routing:** Created clean GET routes (`/home`, `/about`, `/service`, `/project`) to serve HTML content dynamically using standard HTTP methods.
*   **Environment Configuration:** Integrated the `dotenv` package inside a central configuration file (`config/env.js`) to securely load variables (like `PORT`) from a hidden `.env` file.
*   **Development Tooling:** Installed `nodemon` as a development dependency to automatically restart the application server on file changes.

#### How to Run:
```bash
cd backend-2
npm install
npm run dev
```
---

### 3. Backend-3: MVC Architecture & MongoDB Integration
Implemented an industry-standard MVC (Model-View-Controller) folder structure to connect an Express application to MongoDB and handle resource creation.

#### Core Concepts Learned:
*   **MVC Architecture:** A design pattern that separates an application into three main components: Models (data structure), Views (user interface/responses), and Controllers (business logic).
*   **Mongoose ODM:** An Object Data Modeling library for MongoDB and Node.js that manages data relationships, provides schema validation, and translates between code objects and database documents.

#### What I Did:
*   **Database Connectivity (`config/db.js`):** Set up a secure, asynchronous connection utility to link the application with a MongoDB instance using environmental URI variables.
*   **Data Modeling (`model/account.model.js`):** Structured an `accountSchema` defining data rules for system users (`name`, `email`, `phone`, `password`) and compiled it into a usable Mongoose model.
*   **Business Logic Layer (`controller/account.controller.js`):** Developed an asynchronous `createAccount` handler implementing robust `try/catch` blocks to parse, store, and return JSON responses for new user requests.
*   **Routing System (`routes/account.route.js`):** Configured modular Express routing using an explicit HTTP `POST` method mapped to the creation controller logic.
*   **Server Bootstrapping (`app.js`):** Structured the primary entry point using global JSON parsing middleware (`express.json()`), initialized version-controlled API prefixes (`/api/v1/accounts`), and triggered the database handshake alongside port bindings.

#### How to Run:
```bash
cd backend-3
npm install
npm run dev
```
---
### 4. Backend-4: Complete Product CRUD Operations
Expanded the MVC backend structure to perform full Create, Read, Update, and Delete (CRUD) operations for a product inventory using MongoDB.

#### Core Concepts Learned:
*   **CRUD Operations:** The four basic functions of persistent storage: Create, Read, Update, and Delete.
*   **Dynamic Route Parameters (`req.params`):** Extracting unique identifiers (like a product ID) directly from the URL to look up or modify a specific database item.
*   **Mongoose Query Methods:** Built-in helper functions (`find()`, `findById()`, `findByIdAndUpdate()`, `findByIdAndDelete()`) used to simplify database interactions.

#### What I Did:
*   **Created Product Schema (`model/product.model.js`):** Defined the structure for product entries including name, price, details, and category.
*   **Fetched All Products (`handleGetAllProducts`):** Used `Product.find()` to pull every item from the database and return them in a single JSON response.
*   **Fetched Single Product (`handleGetProductById`):** Extracted the ID from the URL (`req.params.id`) to look up and return one specific product.
*   **Updated Product Details (`handleUpdateById`):** Combined URL IDs with incoming body data to find a product, overwrite its fields, and save the changes.
*   **Deleted Products (`handleDeleteById`):** Removed specific items permanently from the database using their unique ID.

#### How to Run:
```bash
cd backend-4
npm install
npm run dev
```



