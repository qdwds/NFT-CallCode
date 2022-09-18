<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>


<script lang="ts">
import { onMounted } from "vue";
import { connectMetamask, useAccountsChanged, useChainChanged } from "./hooks/useMetamask";
export default {
   setup () {
     onMounted(async()=>{
      await connectMetamask();
     })
     useAccountsChanged();
     useChainChanged();
    return {}
  }
}
</script>

