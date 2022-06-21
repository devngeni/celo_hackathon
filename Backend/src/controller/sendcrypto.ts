import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import "dotenv/config";
import { User } from "../model";

const celoProvider = process.env.ALFAJORES_RPC!;

//connect to celo https://docs.celo.org/blog/developer-guide/start/hellocelo
const web3 = new Web3(celoProvider);

const kit = newKitFromWeb3(web3 as any);

//hard coded values
let amount = 1000000;
let recipientAddress = "0xF17fcF91DF7038021CDe4DDE7e656163be308b96";
let phonenumber: string = "0758445391";


//check wallet address balance
export const getBal = async () => {
  const user = await User.findOne({ phonenumber });
  const walletAddress = user?.walletAddress;
  console.log("user1", walletAddress);

  let cUSDtoken = await kit.contracts.getStableToken();
  let cUSDbal = await cUSDtoken.balanceOf(walletAddress!);
  console.log("cUSDbal", cUSDbal.toNumber());
  return cUSDbal;
};

//send cUSD to another wallet address
export const swapCrypto = async () => {
  const user = await User.findOne({ phonenumber });
  const walletAddress = user?.walletAddress;

  kit.connection.addAccount(user?.privateKey!);
  let cUSDtoken = await kit.contracts.getStableToken();

  let celoTx = await cUSDtoken
    .transfer(recipientAddress, amount)
    .send({ from: walletAddress! });
  let celoReceipt = await celoTx.waitReceipt();
  let txhash = celoReceipt.transactionHash;
  console.log("txhash", txhash);
  return txhash;
};
