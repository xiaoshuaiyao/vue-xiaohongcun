<template>
  <div class="header">
        <div class="header_left">
            <img :src="img" />
        </div>
        <div class="header_center"><a href=""></a></div>
        <div></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{
        img:"https://wicdn.xiaohongchun.com/xhc-plat/1481701402617_XFWMrRySem.png"
      }
  }
}
</script>


<style scoped lang="scss">
        .header{
           width: 100%;
           height: 44.8px;
           padding: 0 15px;
           z-index: 10;
           position: fixed;
           left: 0;
           top: 0;
           right: 0;
           background: #fff;
           display: flex;
           justify-content: space-between;
           align-items: center;
        }
        .header_left>img{
          margin-top: 15px;
          width: 68.5px;
          height: 15.8px;
        }
        .header_center{
          width: 162px;
          height: 27px;
          background: #f5f5f5;
        
        }
        .header_center>a{
            color: gray;
            line-height: 27px;
            margin-left:35px;
        }
</style>
