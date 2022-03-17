<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" />
        <px-assets-table v-if="!isLoading" :assets="assets"/>
    </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable';
import BounceLoader from "vue-spinner/src/BounceLoader"


export default {
    name: "HomeView",

    components: {
        PxAssetsTable,
        BounceLoader 
    },

    data () {
        return {
            assets: [],
            isLoading: false,
        }
    },

    created () {

        this.isLoading = true;

        api.getAssets()
            .then(assets => (this.assets = assets))
            .finally(() => this.isLoading = false)
    }
}
</script>