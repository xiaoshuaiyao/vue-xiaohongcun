<template>
  <div class="header">
        <div class="header_left">
            <img :src="img" />
        </div>
        <div class="header_center"><a href="">{{val}}</a></div>
        <div class="header_right">
          <a href="">{{shop}}</a>
        </div>        
  </div>
  
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{
        img:"https://wicdn.xiaohongchun.com/xhc-plat/1481701402617_XFWMrRySem.png",
        val:"秋冬润唇膏大全",
        shop:"商城"

      }
  }
}
</script>


<style scoped lang="scss">
        .header{
           width: 345px;
           height: 44.8px;
           padding: 0 15px;
           z-index: 10;
           position: fixed;
           left: 0;
           top: 0;
           right: 0;
           background: #fff;
           display: flex;
           
           align-items: center;
        }
        .header_left{
          width:68.5px;
          height: 44.8px; 
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
         margin-left: 38px;
         border-radius: 15px;
         font-size: 12px;
        }
        .header_center>a{
            color: gray;
            line-height: 27px;
            margin-left:35px;
        }
        .header_right{
           width: 67.5px;
           height: 44.8px;
            display: flex;
            align-items: center;
        }
         .header_right>a{
            color:#ff3167;
            line-height: 27px;
            margin-left:35px;
            font-size: 13px;
        }
</style>
