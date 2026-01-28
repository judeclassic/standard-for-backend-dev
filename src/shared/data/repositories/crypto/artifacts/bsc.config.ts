import { ethers } from "ethers";
import { loadConfig } from "@/utils/helpers/helper";

import {
  BSC_LOCAL_FORWARD_CONTRACT_ABI,
  BSC_LOCAL_FORWARD_CONTRACT_BYTE_CODE
} from "./config/bsc_local.forwarder";
import {
  BSC_PROD_FORWARD_CONTRACT_ABI,
  BSC_PROD_FORWARD_CONTRACT_BYTE_CODE
} from "./config/bsc_prod.forwarder";

import {
  PAYOUT_PROD_CONTRACT_ABI,
  PAYOUT_PROD_CONTRACT_BYTE_CODE
} from "./config/bsc_prod.payout";
import {
  PAYOUT_LOCAL_CONTRACT_ABI,
  PAYOUT_LOCAL_CONTRACT_BYTE_CODE
} from "./config/bsc_local.payout";

loadConfig();
const isProd = process.env.ENV === "production";

export const BSC_CONFIG = {
  FORWARDER_ABI: isProd ? BSC_PROD_FORWARD_CONTRACT_ABI : BSC_LOCAL_FORWARD_CONTRACT_ABI,
  FORWARDER_BYTE_CODE: isProd ? BSC_PROD_FORWARD_CONTRACT_BYTE_CODE : BSC_LOCAL_FORWARD_CONTRACT_BYTE_CODE,
  FORWARDER_CONTRACT: isProd ? process.env.BSC_USDT_FORWARDER_CONTRACT_ADDRESS! : process.env.BSC_USDT_TEST_FORWARDER_CONTRACT_ADDRESS!,
  FORWARDER_FEE: isProd ? BigInt(process.env.BSC_FEE_AMOUNT!) : BigInt(process.env.BSC_TEST_FEE_AMOUNT!),
  
  PAYOUT_ABI: isProd ? PAYOUT_PROD_CONTRACT_ABI : PAYOUT_LOCAL_CONTRACT_ABI,
  PAYOUT_BYTE_CODE: isProd ? PAYOUT_PROD_CONTRACT_BYTE_CODE : PAYOUT_LOCAL_CONTRACT_BYTE_CODE,
  PAYOUT_CONTRACT: isProd ? process.env.BSC_USDT_PAYOUT_CONTRACT_ADDRESS! : process.env.BSC_USDT_TEST_PAYOUT_CONTRACT_ADDRESS!,

  USDT_CONTRACT: isProd ? process.env.BSC_USDT_CONTRACT_ADDRESS! : process.env.BSC_USDT_TEST_CONTRACT_ADDRESS!,
  USDT_ABI: [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function transfer(address to, uint256 value) returns (bool)",
    "function transferFrom(address from, address to, uint256 value) returns (bool)",
    "function approve(address spender, uint256 value) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)"
  ],
  DECIMALS: 6,

  RPC_URL: isProd ? process.env.BSC_RPC_URL! : process.env.BSC_TEST_RPC_URL!,
  DEPLOYER_KEY: process.env.BSC_DEPLOYER_PRIVATE_KEY!,
  DEVELOPER_WALLET: process.env.BSC_DEVELOPER_WALLET_ADDRESS!,
};

export const bscProvider = new ethers.JsonRpcProvider(BSC_CONFIG.RPC_URL);

export const bscSigner = new ethers.Wallet(BSC_CONFIG.DEPLOYER_KEY, bscProvider);

export const usdtContract = new ethers.Contract(
  BSC_CONFIG.USDT_CONTRACT,
  BSC_CONFIG.USDT_ABI,
  bscProvider
);