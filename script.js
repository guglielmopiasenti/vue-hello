console.log("VUE OK", Vue);

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      // data definition
      title: "Hello Vue",
      pic: "img/Logo-Vuejs.png",
    };
  },
});

app.mount("#root");
