/**
 * An array of routes that accessible to the public
 * These routes do not require authentication
 */
export const publicRoutes = [
  "/",
  "/new-verification",
  "/sport",
  "/music",
  "/recently-added",
];

/**
 * An array of routes that are used for authentiacation
 * These routes will redirect logged in users to "/settings"
 */
export const authRoutes = [
  "/signin",
  "/signup",
  "/error",
  "/reset",
  "/new-password"
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging
 */
export const DEFAULT_SIGNIN_REDIRECT = "/home"