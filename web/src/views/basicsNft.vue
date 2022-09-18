<template>
    <div>
        <div class="cre">
            <el-input class="cre_inp" clearable v-model="nft.address" placeholder="Please input" />
            <el-button type="primary" :loading="nft.loading" @click="createNft">创建NFT</el-button>
            <el-button @click="getAllErc721">更新我的NFT数量</el-button>
        </div>
        <div>
            
        </div>
        <el-empty v-if="nft.nfts.length < 1" :image-size="400" />
        <template v-else>
            <el-card  shadow="hover" v-for="n in nft.nfts"> 
                <img class="nft_img" :src="n" alt="" srcset="">
            </el-card>
        </template>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useCreateNft, uerGetAllErc721 } from "../hooks/useErc721";
import { ElMessage } from 'element-plus'
import { useSignerStore } from "../stores/signer";


const nft = reactive({
    address:"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    loading:false,
    nfts:[]
})

// create nft 
const createNft = async () => {
    if(!nft.address) ElMessage.error("请输入需要给那个地址创建nft");
    nft.loading = true;
    await useCreateNft(nft.address);
    nft.loading = false;
    getAllErc721();
}

const getAllErc721 = async () => {
    const signerStore = useSignerStore();
    const account = signerStore.getAccount;
    const nfts = await uerGetAllErc721(account);
    nft.nfts = [];
    for (const ipfs of nfts) {
        nft.nfts.push(`http://127.0.0.1:8888${ipfs}`);
    }
    // const a = await axios("https://ipfs.io/ipfs/QmbjdQKzqVUwBRZDjLA1hLS9HveGAXBGWdWe19DF2V4YKA/1.json");
    
}
</script>

<style scoped>
.cre {
    margin-bottom: 36px;
    display: flex;
}
:deep(.cre_inp){
    width: 340px;
    margin-right: 24px;
}

:deep(.el-card) {
    width: 240px;
    height: 240px;
    float: left;
    margin-right: 24px;
    margin-bottom: 24px;
}
.nft_img{
    width:100%;
    height:100%;
}
</style>