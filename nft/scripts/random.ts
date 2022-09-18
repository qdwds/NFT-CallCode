import { parseEther, parseUnits } from "@ethersproject/units";
import { BigNumber } from "ethers";
import { deployments, ethers, getNamedAccounts } from "hardhat";
import { mainModule } from "process";

const baseFee = parseUnits("0.1");
const gasPriceLink = parseUnits("1" ,"gwei");
// const main  = async () => {
// const { deploy} = deployments;
//     const{ deployer } = await getNamedAccounts();
    
//     deploy("VRFCoordinatorV2Mock",{
//         from: deployer,
//         args:[
//             baseFee,    //  节点收费
//             gasPriceLink          //  gasprice
//         ],
//         log:true,
//     })
// }


const main = async () =>{
    const VRFCoordinatorV2Mock = await ethers.getContractFactory("VRFCoordinatorV2Mock");
    const mock = await VRFCoordinatorV2Mock.deploy(baseFee, gasPriceLink);
    mock.deployed();

    // 获取地址和subid
    const tx =  await mock.createSubscription();
    const txReceipt = await tx.wait(1);
    const subId = BigNumber.from(await txReceipt.events[0].topics[1]);
    const vrfCoordinatorAddr = mock.address;
    
    // 充值
    await mock.fundSubscription(subId, parseUnits("10"));

    const ChainlinkVRFDemo = await ethers.getContractFactory("ChainlinkVRFDemo");
    const demo = await ChainlinkVRFDemo.deploy(vrfCoordinatorAddr, subId);
    demo.deployed();
    console.log(demo.address)

    const restx =  await demo.requestRandomWords();
    const a = await restx.wait(1);
    console.log(a.events[0].topics);
    

}
main()
    .catch(err =>{
        console.log(err);
        process.exit(1);
    })