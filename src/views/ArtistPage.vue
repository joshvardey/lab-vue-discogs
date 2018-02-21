<template>
  <div>
    {{artist}}
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
  }
};
</script>