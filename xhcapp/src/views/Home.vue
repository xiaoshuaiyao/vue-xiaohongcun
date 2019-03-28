<template>
  <div class="home">
    <Concent/>
  </div>
</template>

<script>
import Concent from '../components/home/concent'
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
      Concent
  }
}
</script>
