<template>
    <div class="nav">
        <ul class="nav-list" v-if="navList.length">
            <li 
            class="nav-item" 
            :class="{'cur': item.channel === nowChoose}"
            v-for="(item,index) of navList" 
            :data-channel="item.channel"
            :key="index"
            >
            {{item.name}}</li>
        </ul>
        <div class="more-btn">+</div>
    </div>
</template>
<script>
const defaultNavList = [
    {name: '推荐', channel: '__all__'},
    {name: '视频', channel: 'video'},
    {name: '热点', channel: 'news_hot'},
    {name: '社会', channel: 'news_society'},
    {name: '娱乐', channel: 'news_entertainment'},
    {name: '军事', channel: 'news_military'},
    {name: '科技', channel: 'news_tech'},
    {name: '汽车', channel: 'news_car'},
    {name: '体育', channel: 'news_sports'},
    {name: '财经', channel: 'news_finance'},
    {name: '国际', channel: 'news_world'},
    {name: '时尚', channel: 'news_fashion'}
]
export default {
    data: () => {
        return {
            navList: [],
            nowChoose: '__all__'
        }
    },
    mounted () {
        this._initNavList()
    },
    methods: {
        _initNavList () {
            let self = this
            let newNavList = localStorage.getItem('newNavList')
            if (newNavList) {
                self.navList = JSON.parse(newNavList)
            } else {
                localStorage.setItem('newNavList', JSON.stringify(defaultNavList))
                self.navList = defaultNavList
            }
        }
    }
}
</script>
<style lang="scss">
    .nav {
        position: relative;
        padding-right: 80px;
        background: #f4f5f6;
        .more-btn {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            line-height: 0.8rem;
            text-align: center;
            width: 80px;
            font-size: 0.583333rem;
            color: #f85959;
            background: #f4f5f6;
        }
        .nav-list {
            overflow: hidden;
            overflow-x: scroll;
            white-space: nowrap;
            font-size: 0;
            &::-webkit-scrollbar {
                display: none;
            }
            .nav-item {
                display: inline-block;
                margin: 10px 0 10px 10px;
                padding: 0 20px;
                font-size: 0.5rem;
                line-height: 52px;
                &.cur {
                    color: #f85959;
                }
            }
        }
    }
</style>
