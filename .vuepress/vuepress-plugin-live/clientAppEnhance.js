import { defineClientConfig } from '@vuepress/client';
import { VueLive } from 'vue-live';
import 'vue-live/lib/vue-live.esm.css';
import { h as importedH } from 'vue';

// import layout from "vuepress-plugin-live/live-layout";

// const comp = {
//   template: '<ClientOnly><slot /></ClientOnly>',
// };

export default defineClientConfig({
  enhance({ app }) {
    console.log(app);
    app.component('VueLive', {
      render(h, context) {
        h = typeof h === 'function' ? h : importedH;
        const props = { ...context.props };
        return h(VueLive, { props });
        // return h(comp, h(VueLive, { props }));
      },
    });
  },
});
