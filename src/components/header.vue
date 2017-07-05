<template>
    <div class="top_bar">
        <div class="abs_m">
            <span class="title">今日头条</span>
            <i class="iconfont">&#xe69a;</i>
        </div>
        <div class="abs_l">
            <i class="iconfont">&#xe607;</i>
        </div>
        <div class="abs_r">
            <i class="iconfont">&#xe6d1;</i>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .top_bar {
        position: relative;
        background: #d43d3d;
        height: 90px;
        i.iconfont {
            font-size: 0.583333rem;
            color: #fff;
        }
        .abs_m {
            width: 100%;
            text-align: center;
            line-height: 90px;
            .title {
                font-size: 0.583333rem;
                font-weight: bold;
                color: #fff;
            }
        }
        .abs_l {
            position: absolute;
            top: 50%;
            left: 20px;
            margin-top: -0.291667rem;
            z-index: 1;
        }
        .abs_r {
            position: absolute;
            top: 50%;
            right: 20px;
            margin-top: -0.291667rem;
            z-index: 1;
        }
    }
</style>
