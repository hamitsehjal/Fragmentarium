// src/response.js

/**
 * A successful response looks like:
 *
 * {https://typescript-eslint.io/rules/no-explicit-any
 *   "status": "ok",
 *   ...
 * }
 */
export function createSuccessResponse(data: any) {
  return {
    status: "ok",
    // Using the spread operator to clone the `data` into our object
    ...data,
  };
}

/**
 * An error response looks like:
 *
 * {
 *   "status": "error",
 *   "error": {
 *     "code": 400,
 *     "message": "invalid request, missing ...",
 *   }
 * }
 */
export function createErrorResponse(errCode: number, msg: string) {
  return {
    status: "error",
    error: {
      "code": errCode,
      "message": msg,
    }
  }
}

