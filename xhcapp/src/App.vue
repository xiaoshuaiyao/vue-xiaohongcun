<template>
  <div id="app">
    <Header/>
    <Home/>
    <Video/>
    <Footer/> 
    
  </div>
</template>
<script>
import Video from './views/video'
import Footer from './components/common/footer'
import Header from './components/common/header'
import Home from "./views/Home"
import Reset from '../public/css/reset.css'
export default {
  name: "app",
  components: {
    Home,
    Reset,
    Header,
    Footer,
    Video
  }
};
</script>
<style lang="scss">

</style>
