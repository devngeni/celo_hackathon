import Web3 from "web3";
import { Request, Response } from "express";
import { newKitFromWeb3 } from "@celo/contractkit";
import "dotenv/config";
import { User } from "../model";

const celoProvider = process.env.ALFAJORES_RPC!;

//connect to celo https://docs.celo.org/blog/developer-guide/start/hellocelo
const web3 = new Web3(celoProvider);

const kit = newKitFromWeb3(web3 as any);

//hard coded values
// let recipientAddress = "0xF17fcF91DF7038021CDe4DDE7e656163be308b96";
let anAddress = "0xC8AafcfE085C141475897Bb10a3ce36fe31173b7";

//send cUSD to another wallet address
export const swapCrypto = async (req: Request, res: Response) => {
  const { phonenumber, amount } = req.body;
  const user = await User.findOne({phonenumber})
  let recipientAddress = user?.walletAddress
  let privatekey =
    "0xeda4164c50e7ff4c4ab849bb06e7ba6f78860b53f8bedc7c84faca4fbbe8d18a";
  kit.connection.addAccount(privatekey);

  let celotoken = await kit.contracts.getGoldToken();
  try {
    let celotx = await celotoken
      .transfer(recipientAddress!, amount)
      .send({ from: anAddress });

    let celoReceipt = await celotx.waitReceipt();

    console.log("celo receipt", celoReceipt);
    let txhash = celoReceipt.transactionHash;
    console.log("txhash", txhash);

    return res.status(201).json({ msg: "transaction successfull", txhash });
  } catch (error) {
    console.log(error);
  }
};
