<!--
 * @author: Tonya
 * @email: yu.tang02@hand-china.com
 * @Date: 2019-08-17 16:25:17
 * @LastEditTime: 2019-08-17 17:06:38
 -->

<template>
    <div class="box">
        <span class="border-1px-one">1像素边框问题（通过transform+伪类）</span>
        <span class="border-1px-two">1像素边框问题（通过box-shadow）</span>
        <span class="border-1px-three">1像素边框问题（通过border-image）</span>
        <span class="border-1px-four">1像素边框问题（通过background-image）</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.box{
    width 100%;
    min-height 100vw
    display flex
    flex-direction column
    justify-content space-around
    align-items center
}
.border-1px-one{
    position: relative;
    padding 10px
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        border:1px solid red;
        color: red;
        height: 200%;
        -webkit-transform-origin: left top;
        transform-origin: left top; // 一个元素变形的点
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        pointer-events: none; /* 防止点击触发，指示该元素不是鼠标事件的目标 */
        box-sizing: border-box;
        @media screen and (min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3){
        width: 300%;
        height: 300%;
        -webkit-transform: scale(0.33);
        transform: scale(0.33);
        }
  }
}
.border-1px-two{
    padding 10px
    box-shadow: 0px 0px 1px 0px red inset;
  }
.border-1px-three{
    padding 10px
    border: 1px solid transparent;
    border-image: url('../../assets/border.png') 2 repeat;
}
.border-1px-four{
    padding 10px
    background: url(../../assets/border.png) repeat-x left bottom;
    -webkit-background-size: 100% 1px;
    background-size: 100% 1px;
}
</style>