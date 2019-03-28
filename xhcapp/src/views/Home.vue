<template>
  <div class="home">

  </div>
</template>

<script>

import axios from 'axios'
export default {
  created(){
     axios.get("/api/video/349012/comment/topn?vid=349012")
     .then((data)=>{
            console.log(data);
     })
  },
  name: 'home',
  components: {
 
  }
}
</script>
