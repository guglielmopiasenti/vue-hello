console.log("VUE OK", Vue);

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      // data definition
      title: "Hello Vue",
      pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpositivethinking.tech%2Finsights%2Fvue-js-as-an-enterprise-solution%2F&psig=AOvVaw3n3xh9yUKeAOMTqowD7wrn&ust=1687008363564000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLC0qYTyx_8CFQAAAAAdAAAAABAE",
    };
  },
});

app.mount("#root");
