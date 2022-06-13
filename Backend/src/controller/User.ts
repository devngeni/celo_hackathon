import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sign } from "jsonwebtoken";
import { config } from "../config";
import { User } from "../model";

export const register = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let _errors = errors.array().map((error) => {
      return {
        msg: error.msg,
        field: error.param,
        sucess: false,
      };
    });
    return res.status(400).json(_errors);
  }

  const { username, phonenumber, email, password } = req.body;

  if (await User.exists({ phonenumber })) {
    return res.status(400).json({ msg: "User already exists", success: false });
  }

  const user = new User({
    username,
    phonenumber,
    email,
    password,
  });
  try {
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    sign(
      payload,
      config.JWT_SECRET,
      {
        expiresIn: config.JWT_TOKEN_EXPIRES_IN,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token, success: true });
      }
    );
    return res.status(201).json({ msg: "user created successfully" });
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

export const getUserById = async (id: string) => {
  try {
    return await User.findById(id);
  } catch (err: any) {
    console.log(err.msg);
    return null;
  }
};
