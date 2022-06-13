import { Router } from "express";
import { check } from "express-validator";
import { validateToken } from "../../middleware";
import { login, getCurrentUser } from "../../controller";

const router = Router();

router.get("/", validateToken, getCurrentUser);

router.post(
  "/login",
  [check("phonenumber", "please provide phone number").not().isEmpty()],
  [check("password", "please provide password").not().isEmpty()],
  login
);

module.exports = router;
