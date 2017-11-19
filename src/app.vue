<template>
  <div id="app">
    <el-container>
      <el-header :height="'63px'" class="header-wrapper">
        <router-view name="header"/>      
      </el-header>
      <el-main>
        <el-row>
          <el-col
            class="main"
            :lg="{ span: 16, push: 4, pull: 4 }">
            <router-view/>      
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <router-view name="footer"/>      
      </el-footer>
    </el-container>    
  </div>
</template>

<script>
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
body{
  margin: 0;
  padding: 0;  
}
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  background-color: #F2F2F2;
}
.header-wrapper{
  background-color: #424242;
}
.main{
  background-color: #FFFFFF;
  padding: 10px;
  border: 1px dashed #e9e9e9;
  background-color: white;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;  
  border-top-width: 0px;
  margin-left: -1px;
  margin-right: -1px;
  margin-top:-21px;
}
</style>
