import { Router } from "express";
import { validateToken } from "../../middleware";
import {
  login,
  getCurrentUser,
  importAddressFromMnemonic,
} from "../../controller";

const router = Router();

router.get("/", validateToken, getCurrentUser);

router.post("/login", login);
router.post("/importwallet", importAddressFromMnemonic);

module.exports = router;
