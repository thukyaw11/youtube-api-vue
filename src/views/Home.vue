<template>
  <div id="app">
  
    <SearchForm v-on:search="search" />
    <SearchKeyword/>
    <SearchResults 
    v-if="videos.length > 0"
    v-bind:videos="videos" 
    v-bind:reformattedSearchString="reformattedSearchString" />
    <img src="./video-player.png" width="200px" height="200px" alt="image" id="no-item" v-else>
  <br><br>
    <span slot="description" id="descri"> All your favourite is here</span>
  </div>
</template>
<script>
/* eslint-disable no-console */
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import SearchKeyword from "../components/SearchKeyword";

import axios from "axios";

export default {
  components: {
    SearchForm,
    SearchResults,
    SearchKeyword
  },
  data() {
    return {
      videos: [],
      reformattedSearchString: "",
      keyword_storage: localStorage.getItem('keyword') ? JSON.parse(localStorage.getItem('keyword')) : [],
      api: {
        base_url: "https://www.googleapis.com/youtube/v3/search?",
        api_key: "AIzaSyCZ0cCbdc-ZRRqhUVabz8BgRBPm1BT94Vk",
        part: "snippet",
        type: "video",
        order: "viewCount",
        q: "",
        maxResults: 50  
      }
    };
  },
  methods: {
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(" ");
      this.addKeyword(this.reformattedSearchString);
      this.api.q = searchParams.join("+");

      
      const { base_url, api_key, part, type, order, q, maxResults } = this.api;
      const api_url = `${base_url}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${api_key}`;
      console.log(api_url);
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
    },
    addKeyword(keyword){
      this.keyword_storage.push(keyword);
      localStorage.setItem('keyword',JSON.stringify(this.keyword_storage));
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
#no-item{
  margin-top: 200px;
  opacity: 0.7;
}
#descri{
  opacity: 0.8;
  font-size: 25px;
}
</style>