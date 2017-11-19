<template>
  <div>
    ch-catalogo component
  </div>
</template>

<script>
import VueTidyRoutes from 'vue-tidyroutes';

const chCatalogo = {
  created() {
  },
};

VueTidyRoutes.route('/ch-catalogo', {
  name: 'chCatalogo',
  component: chCatalogo,
});

export default chCatalogo;

</script>

<style scoped>

</style>


