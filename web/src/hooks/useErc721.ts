import { BigNumber, Contract, ethers } from "ethers"
import { useSignerStore } from "../stores/signer";
import { info, abi } from "../../../abi/BasicsNft.json";
import { ElMessage } from "element-plus";

export const createErc721Contract = async (address:string):Promise<Contract> => {
    const signerStore = useSignerStore();
    const signer = signerStore.getSigner;
    return new ethers.Contract(address, abi, signer);
}

// create NFT 
export const useCreateNft = async (address:string):Promise<void> => {
    const erc721 = await createErc721Contract(info.address);
    try {
        const tx = await erc721.safeMint(address)
        await tx.wait()
    } catch (error:any) {
        ElMessage (error.reason || error.data?.message || error.message);
    }
}

// get balance
export const useGetErc721Balanceof = async (address: string):Promise<any> => {
    const erc721 = await createErc721Contract(info.address);
    let res = {
        code: "200",
        balance:"0.0"
    };
    try {
        res.balance = await erc721.balanceOf(address);
        
    } catch (error:any) {
        res.code = "500";
        return ElMessage.error (error.reason || error.data?.message || error.message);
    }
    return res;
}

//  user all 
export const uerGetAllErc721 = async (address:string):Promise<Array<any>> => {
    const erc721 = await createErc721Contract(info.address);
    const allErc721:any = [];
    const total = await erc721.totalSupply()
    for (let i = 0; i < total; i++) {
        try {
            const id = await erc721.tokenOfOwnerByIndex(address,i);
            const uri = await erc721.tokenURI(id);
            allErc721.push(uri);
        } catch (error:any) {
            // console.log(error)
            // ElMessage.error (error.reason || error.data?.message || error.message);
        }
    }
    return allErc721
   
}