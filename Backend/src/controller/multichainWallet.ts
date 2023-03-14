import { Request, Response } from "express";
import * as multichainWallet from "multichain-crypto-wallet";
import { User } from "../model";

//generate wallet address, private key and mnemonic
export const createMultiChainWallet = () => {
  const wallet = multichainWallet.createWallet({
    derivationPath: "m/44'/60'/0'/0/0",
    network: "ethereum",
  });
  console.log(wallet);

  return wallet;
};

//import an ethereum wallet address from a mnemonic
export const importAddressFromMnemonic = async (
  req: Request,
  res: Response
) => {
  const { mnemonic } = req.body;
  try {
    const wallet = multichainWallet.generateWalletFromMnemonic({
      mnemonic: mnemonic,
      derivationPath: "m/44'/60'/0'/0/0",
      network: "ethereum",
    });
    console.log(wallet);
    res
      .status(200)
      .json({ msg: "import Address From Mnemonic Success", wallet: wallet });
  } catch (error: any) {
    res.status(500).json({
      msg: "Error importing Address From Mnemonic",
      error: error.message,
    });
  }
};

//check Eth balance of a wallet address
export const getETHBal = async (req: Request, res: Response) => {
  const { phonenumber } = req.body;

  try {
    const user = await User.findOne({ phonenumber });
    const walletAddress = user?.walletAddress;

    const balance = multichainWallet.getBalance({
      address: walletAddress!,
      network: "ethereum",
      rpcUrl: process.env.ETH_RPC!,
    });
    res.status(200).json({ msg: "Eth Bal Success", balance: balance });
  } catch (error: any) {
    res
      .status(500)
      .json({ msg: "Error getting Eth Bal", error: error.message });
  }
};

//check erc20 token balance of a wallet address
export const getErc20Bal = (req: Request, res: Response) => {
  const { walletAddress, tokenAddress } = req.body;
  try {
    const erc20bal = multichainWallet.getBalance({
      address: walletAddress,
      network: "ethereum",
      rpcUrl: process.env.ETH_RPC!,
      tokenAddress: tokenAddress,
    });
    res.status(200).json({ msg: "erc20 Bal Success", balance: erc20bal });
  } catch (error: any) {
    res
      .status(500)
      .json({ msg: "Error getting Eth Bal", error: error.message });
  }
};

//transfer eth from one wallet address to another
export const transferETH = async (req: Request, res: Response) => {
  const { recipientAddress, amount } = req.body;
  try {
    const transfer = await multichainWallet.transfer({
      recipientAddress: recipientAddress,
      amount: amount,
      network: "ethereum",
      rpcUrl: process.env.ETH_RPC!,
      privateKey: process.env.ETH_PRIVATE_KEY!,
      nonce: 0,
    });
    res.status(200).json({ msg: "Eth transfer Success", transfer: transfer });
  } catch (error: any) {
    res
      .status(500)
      .json({ msg: "Error transferring Eth", error: error.message });
  }
};

//transfer erc20 token from one wallet address to another
export const transferErc20Token = (req: Request, res: Response) => {
  const { recipientAddress, tokenAddress, amount } = req.body;
  try {
    const transfer = multichainWallet.transfer({
      recipientAddress: recipientAddress,
      amount: amount,
      network: "ethereum",
      rpcUrl: process.env.ETH_RPC!,
      privateKey: process.env.ETH_PRIVATE_KEY!,
      tokenAddress: tokenAddress,
      nonce: 0,
    });
    res
      .status(200)
      .json({ msg: "Erc20Token transfer Success", transfer: transfer });
  } catch (error: any) {
    res
      .status(500)
      .json({ msg: "Error transferring Erc20Token", error: error.message });
  }
};
