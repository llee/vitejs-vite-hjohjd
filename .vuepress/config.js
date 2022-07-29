const { defaultTheme } = require('@vuepress/theme-default');
const vuepressPluginLive = require('./vuepress-plugin-live/index.js');

const title = 'Vuetensils';

module.exports = {
  title: title,
  theme: defaultTheme({
    navbar: [{ text: 'Home', link: '/' }],
  }),
  plugins: [vuepressPluginLive],
};
