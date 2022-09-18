import { ethers } from "ethers";
import { useSignerStore } from "../stores/signer";


export const connectMetamask = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = await provider.send("eth_requestAccounts",[]);
    const signer = await provider.getSigner();

    const signerStore = useSignerStore();
    signerStore.setAccount(account[0]);
    signerStore.setSigner(signer);
    // TODO： 账号切换
}



// on change accounts
export const useAccountsChanged = async () => {
    window.ethereum.on("accountsChanged",()=>{
        window.location.reload();
    })
}

// on change networks
export const useChainChanged = async () => {
    window.ethereum.on("chainChanged",()=>{
        console.log("net")
        window.location.reload();
    })
}