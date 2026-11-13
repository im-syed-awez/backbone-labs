/*
catchAsyncErrors is a higher-order wrapper function used in Express.js to eliminate repetitive try...catch blocks in asynchronous route handlers. It automatically catches any rejected Promises (errors) and forwards them to Express's global error-handling middleware.

- Why Use It
• Cleaner Code: You do not have to wrap every single controller's logic inside try { ... } catch (err) { next(err); }.
• Prevents Server Crashes: In Express v4, unhandled Promise rejections inside async functions can hang the request or crash the Node.js process if not passed to next().
*/

export const catchAsyncError = (func) => {

    return function (req, res, next) {

        //Use Promise.resolve() to safely handle both async and synchronous functions
        Promise.resolve(func(req, res, next))
        .catch(err => next(err));
    }
}

/*
- How It Works Step-by-Step

• Takes a controller function (func). It accepts your asynchronous route handler (such as a function that queries a database) as an argument.

• Returns an Express middleware. It returns a standard function expecting (req, res, next) so that Express can execute it when a route is hit.

• Executes and monitors for errors. When a request arrives, it runs your func(req, res, next). Because func is an async function, it returns a Promise.

• Forwards rejected Promises to Express. If func throws an error or fails, .catch(err => next(err)) intercepts the rejection and passes the error directly to Express's next() function. This skips normal middleware and triggers your centralized error-handling middleware.
*/
