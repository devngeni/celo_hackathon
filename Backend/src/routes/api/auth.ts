import { Router } from "express";
import { validateToken } from "../../middleware";
import { login, getCurrentUser } from "../../controller";

const router = Router();

router.get("/", validateToken, getCurrentUser);

router.post("/login", login);

module.exports = router;
