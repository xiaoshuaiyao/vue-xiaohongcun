<template>
  <div class="footer" v-if="flag">
        
         <img src="https://wicdn.xiaohongchun.com/xhc-plat/1532339694764_dMHA8NPGwb.png" style="display: block; width: 100%; height: 100%;">
        <div class="foot" @click.stop="handle($event)">
          
        </div>  
  </div>
  
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{   
          flag:true   
      }
  },
  methods:{
     handle(){
        this.flag = false;
     }
  }
}
</script>


<style scoped lang="scss">
      .footer{
          width: 7.5rem;
          height: 1.2rem;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
      }
      .footer>img{
          width: 100%;
          height: 100%;
      }
      .foot{
          z-index: 15;
        position: fixed;
        display: block;
        width: 1rem;
        height: 1rem;      
        right: .2rem;
        bottom: .2rem;
      }
           
</style>
