import { Router } from "express";
import { getETHBal, getErc20Bal } from "../../controller";
import { validateToken } from "../../middleware";

const router = Router();

router.post("/checkETHbal", validateToken, getETHBal);
router.post("/checkERC20bal", validateToken, getErc20Bal);

module.exports = router;
