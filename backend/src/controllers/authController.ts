import { Request, Response,NextFunction } from "express";
import Users from '../models/userModel';
import responseMessage from "../utils/responseMessage";
import { createToken, createTokenResetPass } from "../utils/token";
import { IPayload } from "../interfaces/token.interfaces";
import IUsers from '../interfaces/userInterfaces';
import bcrypt from "bcryptjs";


async function login(req: Request, res: Response) {
  try {
    const user = await Users.findOne({
      email: req.body.email,
    });
    if (!user) return res.status(404).json({ message: "El usuario no existe" });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(401).send({ message: "Password incorrecta" });
    const payload: IPayload = { rowId: user.id };
    const accessToken = await createToken(payload);
    return res
      .status(200)
      .json({ message: "Bienvenido", accessToken: accessToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json(responseMessage.errorServer);
  }
}

async function addUser(req: Request, res: Response, next: NextFunction) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 15);
    const user = req.body;
    const newUser: IUsers = new Users(user);
    await newUser.save();
    return res.status(200).json(responseMessage.addSuccess);
  } catch (error) {
    console.log(error);
    return res.status(200).json(responseMessage.errorServer);
  }
}
async function getUser(req: Request, res: Response, next: NextFunction) {
 try {
    const user = await Users.findById(req.params._id);
    res.status(200).json(user);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
}

export default {
  login,
  addUser,
  getUser

};
