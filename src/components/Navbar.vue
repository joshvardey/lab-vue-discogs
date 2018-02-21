<template>
  <div class="container">
    <h1>DISCODOGS ARTIST SEARCH</h1>
    <router-link to="/artist">Artist</router-link>
    <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <form @submit.prevent="searchArtist()">
    <input class="input" type="text" placeholder="Text input">
  <a class="button">Button</a>
  </form>
   </div>
</div>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      artist: {}
    };
  },

  created() {
    api.getArtist(this.$route.params.id).then(artist => {
      this.artist = artist;
    });
  },
  methods: {
    searchArtist() {
      this.$emit("submit", this.artist);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
