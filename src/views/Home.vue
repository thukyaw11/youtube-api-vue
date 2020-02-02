<template>
  <div id="app">
    <Header />
    <SearchForm v-on:search="search" />
    <SearchResults 
    v-if="videos.length > 0"
    v-bind:videos="videos" 
    v-bind:reformattedSearchString="reformattedSearchString" />
  </div>
</template>
<script>
/* eslint-disable no-console */
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Header from "../components/Header";
import axios from "axios";

export default {
  components: {
    Header,
    SearchForm,
    SearchResults
  },
  data() {
    return {
      videos: [],
      reformattedSearchString: "",
      api: {
        base_url: "https://www.googleapis.com/youtube/v3/search?",
        api_key: "AIzaSyCxD2yWrD1h_a4lG0kWEdDGchJtItuyl74",
        part: "snippet",
        type: "video",
        order: "viewCount",
        q: "vuejs+tutorial",
        maxResults: 50  
      }
    };
  },
  methods: {
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(" ");

      this.api.q = searchParams.join("+");

      console.log(this.api.q);
      const { base_url, api_key, part, type, order, q, maxResults } = this.api;
      const api_url = `${base_url}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${api_key}`;
      this.getVideos(api_url);
    },
    getVideos(api_url) {
      axios
        .get(api_url)
        .then(res => {
          this.videos = res.data.items;
          console.log(this.videos);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
/* eslint-enable no-console */
/* eslint-disable */
</script>

<style>
#nav {
  padding: 0;
}
</style>