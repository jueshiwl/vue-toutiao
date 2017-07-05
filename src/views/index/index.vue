<template>
    <div>
        <t-header></t-header>
        <t-nav></t-nav>
    </div>
</template>
<script>
import Getinfo from '@/services/index.js'
import Nav from '@/components/nav'
import Header from '@/components/header'
export default {
    components: {
        't-nav': Nav,
        't-header': Header
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
