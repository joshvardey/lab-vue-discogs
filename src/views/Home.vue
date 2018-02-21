<template>
  <div class="home">
    <Navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import api from "../api";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>
