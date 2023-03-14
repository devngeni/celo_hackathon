import { Router } from "express";
import { check } from "express-validator";
import { register } from "../../controller";

const router = Router();

router.post("/register", register);

module.exports = router;
