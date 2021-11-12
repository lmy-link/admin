<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <span class="size" @click="clickHandler">田田</span>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    clickHandler() {
      this.$api.default.login
        .loginByUsername("702241115", "C#2k$nB&17xpYs", "brain")
        .then((res) => {
          if (res.code === 200) {
            console.log(res);
          }
        });
    },
  },
};
</script>
<style>
.size {
  font-size: 16px;
}
</style>
