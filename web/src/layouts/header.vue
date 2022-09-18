<template>
    <div>NFT项目实战开发</div>
    <div>{{account}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSignerStore } from "../stores/signer";
import { connectMetamask } from "../hooks/useMetamask";

await connectMetamask()

const signerStore = useSignerStore();
const account = ref<string>("");
account.value = signerStore.getAccount;
</script>

<style scoped>


</style>