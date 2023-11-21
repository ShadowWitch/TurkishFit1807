import type { NextFunction, Request, Response } from "express";

import jwt, { Jwt, JwtPayload } from "jsonwebtoken";
import { enviromentAuth } from "../helpers/enviromentAuth.helper";
import { IPayload, RespDB } from "../types/typesPayloadUser.types";

export interface IRequestPayload extends Request {
  usuario: RespDB;
}

export const validarJWT = (
  req: IRequestPayload,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ").at(-1); // Guardar el token
    }

    if (!token) {
      return res.status(200).json({
        ok: false,
        message: "No autenticado.",
      });
    }

    const { respDB } = jwt.verify(
      token,
      enviromentAuth.jwtSecretToken
    ) as IPayload;

    req.usuario = { ...respDB };
  } catch (error) {
    return res.status(200).json({
      ok: false,
      msg: "Not valid token.",
    });
  }
  next();
};
