import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sign } from "jsonwebtoken";
import { config } from "../config";
import { User } from "../model";
import { IUser } from "../types";

//Get a specific user by their address
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user?.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }
    return res.json({ user, success: true });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).send("internal server error");
  }
};

//Authenticate user and get session token
export const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { phonenumber } = req.body;
  try {
    const user = await User.findOne({ phonenumber });
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }
    const payload: IUser = {
      id: user.id,
      username: user.username,
      phonenumber: user.phonenumber,
      email: user.email,
      walletAddress: user.walletAddress,
      password: user.password,
    };
    sign(
      payload,
      config.JWT_SECRET,
      {
        expiresIn: config.JWT_TOKEN_EXPIRES_IN,
      },
      (err, token) => {
        if (err) throw err;
        return res.json({ token, success: true });
      }
    );
    return res.status(400).send("bad request");
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).send("Internal server error");
  }
};
