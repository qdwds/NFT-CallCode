<template>
    <div class="layout">
        <el-container>
            <el-header>
                <Suspense>
                    <Header></Header>
                </Suspense>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu v-for="r in menus.routes" :default-active="active" router @select="handleOpen">
                        <el-menu-item :index="r.path"> {{r.meta?.title}} </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>


</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from "./header.vue";

const route = useRoute()
const router = useRouter();

const menus = reactive({
    routes:router.options.routes[0].children,
});
const active = ref(route.path);
const handleOpen = (key: string, keyPath: string[]) => {
    active.value = key;
}
</script>
  
<style lang="scss" scoped>
    .layout{
        height: 100vh;
    }
    .el-menu{
        border-right: none;
    }
    .el-aside{
        height: 100vh;
        border-right: solid 1px var(--el-menu-border-color);
    }
    .el-header{
        border-bottom:  solid 1px var(--el-menu-border-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>