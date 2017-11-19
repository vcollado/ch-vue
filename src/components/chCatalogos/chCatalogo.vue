<template>
  <div>
      <el-row>
          <el-col>
              <b>{{ chCatalogo.NOMBRE }}</b>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              {{chCatalogo.DIRECCION}} {{chCatalogo.CH_MUNICIPIOS.municipio}} {{chCatalogo.CODPOSTAL}}
          </el-col>
      </el-row>      
      <el-row>
          <el-col>
              {{chCatalogo.CH_MUNICIPIOS.CH_PROVINCIAS.NOMBRE}}, {{chCatalogo.CH_MUNICIPIOS.CH_PROVINCIAS.CH_CCAA.AUTONOMIA}}
          </el-col>
      </el-row>    
      <el-row>
          <el-col>
            <span v-if="chCatalogo.TELEFONO">
                <b>Tlf </b>{{chCatalogo.TELEFONO}}
            </span>                              
            <span v-if="chCatalogo.TELEFONO2 && (chCatalogo.TELEFONO2 !== chCatalogo.TELEFONO)">
                <b>Tlf </b>{{chCatalogo.TELEFONO}}
            </span>                              
            <span v-if="chCatalogo.TELEFAX">
                <b>Fax </b>{{chCatalogo.telefax}}
            </span>                              
          </el-col>          
      </el-row>          
  </div>
</template>

<script>
export default {
  props: ['chCatalogo'],
};
</script>

<style lang="scss" scoped>

</style>


