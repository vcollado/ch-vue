<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-view name="header"/>      
      </el-header>
      <el-main>
        <router-view/>      
      </el-main>
      <el-footer>
        <router-view name="footer"/>      
      </el-footer>
    </el-container>    
  </div>
</template>

<script>
// import chCatalogo from '@/components/ch-catalogo/ch-catalogo';
import components from './components';
import common from './common';

export default {
  name: 'app',
  components: {
    common,
    components,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
