import { Router } from "express";
import { transferETH, transferErc20Token } from "../../controller";
import { validateToken } from "../../middleware";

const router = Router();

router.post("/sendETH", validateToken, transferETH);
router.post("/sendERC20", validateToken, transferErc20Token);

module.exports = router;
