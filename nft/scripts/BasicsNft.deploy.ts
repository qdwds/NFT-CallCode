import { ethers } from "hardhat";
import { createContractInfo } from "../utils/contractInfo";

export const main = async () => {
    const NAME = "BasicsNft";
    const BasicsNft = await ethers.getContractFactory(NAME);
    const basicsNft = await BasicsNft.deploy();
    await basicsNft.deployed();
    console.log("BasicsNft address", basicsNft.address);
    await createContractInfo(basicsNft.address, NAME);
}

main()
    .catch(err =>{
        console.log(err);
        process.exit(1);
    })