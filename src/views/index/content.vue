<template>
    <div class="content">
        
    </div>
</template>
<script>
import Getinfo from '@/services/index.js'

export default {
    components: {

    },
    data: function () {
        return {
            listData: []
        }
    },
    mounted () {
        // this._getNewsList()
    },
    methods: {
        _getNewsList () {
            let self = this
            Getinfo.getNewsList().then(res => {
                self.listData = self.listData.concat(res.data)
            })
        }
    }
}
</script>
<style lang="sass">

</style>
