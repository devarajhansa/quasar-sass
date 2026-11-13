
import { defineBoot } from '#q-app';


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default defineBoot(async ({ app }/* { store, app, router, ... } */) => {
  // something to do

  app.config.globalProperties.$window = window;


});