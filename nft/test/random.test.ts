import { expect } from "chai";
import { deployments, ethers } from "hardhat"

describe("t",async () => {
    let mock;
    let demo;
    beforeEach(async () => {
        await deployments.fixture(["VRFCoordinatorV2Mock", "ChainlinkVRFDemo"]);
        mock = await ethers.getContract("VRFCoordinatorV2Mock");
        demo = await ethers.getContract("VRFCoordinatorV2Mock");
    })

    it("",async () => {
        expect( demo.requestRandomWords()).to.emit(mock,"RandomWordsRequested")
    })
})