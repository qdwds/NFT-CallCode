import { defineStore } from 'pinia'
import type { Signer, Wallet } from 'ethers'
import { toRaw } from 'vue';

interface ISigneStore {
	account:string,
	signer?: any
}
export const useSignerStore = defineStore("signer", {
	state: ():ISigneStore => ({
		account: "",
		signer: null
	}),
	getters: {
		getAccount():string{
			return this.account;
		},
		getSigner():Signer | Wallet{
			return toRaw(this.signer);
		}
	},
	actions:{
		setAccount(account:string):void{
			this.account = account;
		},
		setSigner(signer:Wallet|Signer):void{
			this.signer = signer;
		}
	}
})
