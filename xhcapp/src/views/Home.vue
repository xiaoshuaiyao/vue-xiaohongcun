<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script>
import Header from '../components/common/header'
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
    Header
  }
}
</script>
