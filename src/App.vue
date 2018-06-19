<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from "@/components/basic/header/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style src="./assets/scss/index.scss" lang="scss">
</style>
