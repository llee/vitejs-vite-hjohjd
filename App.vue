<script>
import { VueLive } from 'vue-live';
import 'vue-live/lib/vue-live.esm.css';

export default {
  components: {
    VueLive,
  },
};
</script>

<template>
  <div>
    <p>App</p>
    <VueLive :code="`<template>'yo'</template>`"></VueLive>
  </div>
</template>
