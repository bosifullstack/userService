import jwt from "jsonwebtoken";

import { notSoSecret } from "../app";

export const verifyJWT = (req: any, res: any, next: any) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(token, notSoSecret, function (err: any, decoded: any) {
    if (err) {
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });
    }

    req.body.userId = decoded.id;
    next();
  });
};
