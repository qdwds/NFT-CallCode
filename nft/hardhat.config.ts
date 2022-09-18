import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork:"localhost",
  networks:{
    localhost:{
      from:"http://127.0.0.1:8545/"
    }
  },
  namedAccounts:{
    
    deployer:{
      default:0
    }
  }
};

export default config;
