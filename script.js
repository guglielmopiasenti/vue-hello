console.log("VUE OK", Vue);

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      // data definition
    };
  },
});

app.mount("#root");
