import { Router } from "express";
import { authToken } from "../../controller/mpesaAuth";
import {
  callback,
  tx_timeout,
  tx_result,
} from "../../controller/mpesaCallback";
import { stk_push } from "../../controller/stk_push";

const router = Router();

router.post("/callback", callback);
router.post("/callback/timeout", tx_timeout);
router.post("/callback/result", tx_result);
router.post("/stk_push", authToken, stk_push);

module.exports = router;
