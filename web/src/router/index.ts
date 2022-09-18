import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Layout',
			redirect:"/basicsnft",
			component: () => import("@/layouts/main.vue"),
			children:[
				{
					path:"/basicsnft",
					name:"BasicsNft",
					component:()=> import ("@/views/basicsNft.vue"),
					meta:{
						title:"基础NFT",
					}
				},
				{
					path:"/blackandwhitelist",
					name:"BlackAndWhiteList",
					component:()=> import ("@/views/blackAndWhiteList.vue"),
					meta:{
						title:"黑白名单NFT"
					}
				},
				// custom
				{
					path:"/paidmint",
					name:"PaidMint",
					component:()=> import ("@/views/paidMint.vue"),
					meta:{
						title:"付费mint"
					}
				},
				{
					path:"/openseanft",
					name:"OpenseaNft",
					component:()=> import ("@/views/openseaNft.vue"),
					meta:{
						title:"openseaNft"
					}
				},
				{
					path:"/oknft",
					name:"PkNft",
					component:()=> import ("@/views/pkNft.vue"),
					meta:{
						title:"nft对战"
					}
				},
				{
					path:"/randomnft",
					name:"RandomNft",
					component:()=> import ("@/views/randomNft.vue"),
					meta:{
						title:"nft盲盒"
					}
				},
				{
					path:"/nftstore",
					name:"NftStore",
					component:()=> import ("@/views/nftStore.vue"),
					meta:{
						title:"nft商店"
					}
				},
			]
		},
	]
})

export default router
