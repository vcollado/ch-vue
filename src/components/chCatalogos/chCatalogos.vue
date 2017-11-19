<template>
  <div>
    <el-row>
      <el-col 
        :xs="{ span: 24 }"
        :sm="{ span: 6, push: 18 }">
        <el-input
          placeholder="Nombre"
          autofocus
          size="small"
          prefix-icon="el-icon-search"
          v-model="chCatalogosFilters.nombre"
          @change="searchChCatalogos">
        </el-input>
      </el-col>
    </el-row>
    <el-row class="total-results">
      <el-col :xs="{ span:24 }" v-show="chCatalogos.length">
        Resultados totales: <el-badge :value="chCatalogos.length" :max="99" class="item"/>        
      </el-col>
    </el-row>
    <el-row class="results" v-loading="loading">
      <el-col :xs="{ span:24 }">
        <div v-for="chCatalogo in chCatalogos" :key="chCatalogo.CODCNH">
          <ch-catalogo :chCatalogo="chCatalogo"  />                       
          <hr/>
        </div>          
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueTidyRoutes from 'vue-tidyroutes';
import { mapMutations, mapActions, mapState } from 'vuex';
import chCatalogo from './chCatalogo';

const chCatalogos = {
  computed: {
    ...mapState([
      'chCatalogos',
      'chCatalogosFilters',
      'loading',
    ]),
  },
  methods: {
    ...mapMutations([
      'setChCatalogosFilter',
    ]),
    ...mapActions([
      'searchChCatalogos',
    ]),
  },
  mounted() {
  },
  components: {
    chCatalogo,
  },
};

VueTidyRoutes.route('/ch-catalogos', {
  name: 'chCatalogos',
  component: chCatalogos,
});

export default chCatalogos;

</script>

<style lang="scss" scoped>
  .total-results {    
    font-size: 12px;
    text-align: left;
    margin-bottom: 10px;
  }
  .results{
    text-align: left;
    font-size:13.5px;
  }
</style>
