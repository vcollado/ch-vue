<template>
  <div>
      foo component
  </div>
</template>

<script>
import VueTidyRoutes from 'vue-tidyroutes';

const foo = {
  created() {
  },
};

VueTidyRoutes.route('/foo', {
  name: 'foo',
  component: foo,
});

export default foo;

</script>