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
           height: 2.8rem;
           padding: 0 .9375rem;
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
          width:4.28125rem;
          height: 2.8rem; 
        }
        .header_left>img{
          margin-top: .9375rem;
          width: 4.28125rem;
          height: .9875rem;
        }
        .header_center{
          width: 10.125rem;
          height: 1.6875rem;
          background: #f5f5f5;
         margin-left: 2.375rem;
         border-radius: .9375rem;
         font-size: .75rem;
        }
        .header_center>a{
            color: gray;
            line-height: 1.6875rem;
            margin-left:2.1875rem;
        }
        .header_right{
           width: 4.21875rem;
           height: 2.8rem;
            display: flex;
            align-items: center;
        }
         .header_right>a{
            color:#ff3167;
            line-height: 1.6875rem;
            margin-left:2.1875rem;
            font-size: .8125rem;
        }
</style>
