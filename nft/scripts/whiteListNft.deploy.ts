import { ethers } from "hardhat"

const deployWhiteListNft = async () => {
    const WhiteList = await ethers.getContractFactory("WhiteListNft");
    const whiettList = await WhiteList.deploy();
    await whiettList.deployed();
    console.log(whiettList);
}


deployWhiteListNft()
    .catch(err =>{
        console.log(err);
        process.exit(1);
    })