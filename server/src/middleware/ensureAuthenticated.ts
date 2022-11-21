import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");
  const hash = process.env.TOKEN_HASH as string;

  try {
    verify(token, hash);
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
