import jwt from "jsonwebtoken";
import config from "../config/config";
import { IPayload, IPayloadResetPass } from "../interfaces/token.interfaces";

export async function createToken(payload: IPayload): Promise<string> {
  return jwt.sign(payload, config.TOKEN_SECRET, {
    expiresIn: "4h",
  });
}

export async function createTokenResetPass(
  payload: IPayloadResetPass
): Promise<string> {
  return jwt.sign(payload, config.TOKEN_RESET_PASS, {
    expiresIn: "2m",
  });
}
