# Backbone Labs

Welcome to my backend development learning repository. This repo tracks my journey from low-level native modules to building full-scale applications.

## 📂 Repository Structure

*   [backend-1](./backend-1/) — Native Node.js Server & Core HTTP Module
*   [backend-2](./backend-2/) — Intro to Express.js, API, REST-api, Basic Routing, and Env Management

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

