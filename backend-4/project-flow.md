[ 1. Project Root Setup ]
       │
       ▼ (Creates config & connects DB)
[ 2. config/ ]  ───► env.js & db.js
       │
       ▼ (Defines data structures)
[ 3. models/ ]  ───► product.model.js
       │
       ▼ (Handles business logic)
[ 4. controllers/ ] ───► product.controller.js
       │
       ▼ (Maps endpoints to logic)
[ 5. routes/ ]  ───► product.routes.js
       │
       ▼ (Boots up & ties everything together)
[ 6. app.js ]

1. *Initialize Root First*: Run npm init to create package.json, then make your .env file.
2. *Config (config/)*: Set up env.js and db.js to establish your database connection first.
3. *Data Shape (models/)*: Code your product.model.js so the app knows what an product looks like.
4. *Logic (controllers/)*: Write functions in product.controller.js to handle creating or getting products.
5. *Endpoints (routes/)*: Link URLs (like /api/products) to your controller logic in product.routes.js.
6. *Entry Point (app.js)*: Bring everything into app.js to start listening for API traffic.