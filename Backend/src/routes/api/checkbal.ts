import { Router } from "express";
import { check } from "express-validator";
import { getETHBal } from "../../controller";

const router = Router();

router.post("/checkbalance", getETHBal);

module.exports = router;
