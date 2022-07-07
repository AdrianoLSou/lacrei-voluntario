import { Request, Response, NextFunction } from "express";
import ENV from "../infra/config/env";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
}

const authMiddleware = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
      const data = jwt.verify(token, ENV.SECRET);
      const { id, name, email } = data as TokenPayload;
      req.userId = id;
      req.userName = name;
      req.userEmail = email;
      return next();
    }
    catch (error) {
      return res.status(401).json({ error: "Não autorizado" });
    }
  }
}

export default authMiddleware;
