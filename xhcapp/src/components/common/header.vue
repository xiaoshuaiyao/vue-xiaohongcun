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
           width: 100%;
           height: 0.896rem;
           padding: 0.3rem;
           z-index: 10;
           position: fixed;
           left: 0;
           top: 0;
           right: 0;
           background: #fff;
           display: flex;
           border-bottom: 1px solid #efefef;
           align-items: center;
        }
        .header_left{
          width:1.37rem;
          height: 0.896rem; 
        }
        .header_left>img{
          margin-top: .3rem;
          width: 1.37rem;
          height: .3rem;
        }
        .header_center{
          width: 3.24rem;
          height: .54rem;
          background: #f5f5f5;
         margin-left: .76rem;
         border-radius: .3rem;
         font-size: .24rem;
        }
        .header_center>a{
            color: gray;
            line-height: .53712rem;
            margin-left:0.7rem;
        }
        .header_right{
           width: 1.35rem;
           height: 0.896rem;
            display: flex;
            align-items: center;
        }
         .header_right>a{
            color:#ff3167;
            line-height: .54rem;
            margin-left:.7rem;
            font-size: .26rem;
        }
</style>
