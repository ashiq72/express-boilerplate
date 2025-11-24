import { NextFunction, Response } from "express";
import { TErrorSources } from "../../interfaces/error";

const globalErrorHandeller = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errorSources,
    // stack: config.NODE_ENV == "development" ? err?.stack : null,
  });
};
export default globalErrorHandeller;
