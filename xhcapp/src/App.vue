<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/common/footer'
import Header from './components/common/header'
import Home from "./views/Home";
import Common from '../public/css/common.css'
export default {
  name: "app",
  components: {
    Home,
    Common,
    Header,
    Footer
  }
};
</script>
<style lang="scss">
</style>
