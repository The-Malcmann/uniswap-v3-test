import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "@uniswap/hardhat-v3-deploy";
import "./hardhat-v3-deploy";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
