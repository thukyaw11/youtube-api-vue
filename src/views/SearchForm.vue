<template>
  <div id="app" class="container-fluid">
    <div class="col-12 pt-3 p-0">
      <md-button class="md-icon-button md-dense md-primary">
        <router-link to="/">
          <a-icon type="arrow-left" :style="{ fontSize: '23px', color: 'red' }" />
        </router-link>
      </md-button>
      <a-input placeholder="Search YouTube" v-model="searchString" />
      <!-- <md-button class="md-raised md-primary">Search</md-button> -->
      <md-button class="md-icon-button md-dense md-raised md-accent" @click="search">
        <md-icon>search</md-icon>
      </md-button>
    </div>
    <hr />
        <SearchResults
        v-if="videos.length > 0"
        v-bind:videos="videos"
        v-bind:reformattedSearchString="reformattedSearchString"
      />
  </div>
</template>

<script>
/* eslint-disable no-console */
import SearchResults from "../components/SearchResults";

import axios from "axios";
export default {
  components : {
    SearchResults
  },
  name: "SearchForm",
  data() {
    return {
      searchString: "",
      reformattedSearchString: "",
      videos: [],

      keyword_storage: localStorage.getItem("keyword")
        ? JSON.parse(localStorage.getItem("keyword"))
        : [],
      api: {
        base_url: "https://www.googleapis.com/youtube/v3/search?",
        api_key: "AIzaSyBetQk4ei8yZMHgs6Ll-gfbIRf328oeVwM",
        part: "snippet",
        type: "video",
        order: "viewCount",
        q: "",
        maxResults: 10
      }
    };
  },
  methods: {
    search() {
      const trimedSearchString = this.searchString.trim();
      
      if (trimedSearchString != "") {
        const searchParams = trimedSearchString.split(/\s+/);
        this.reformattedSearchString = searchParams.join(" ");
        this.addKeyword(this.reformattedSearchString);
        this.api.q = searchParams.join("+");
        const {
          base_url,
          api_key,
          part,
          type,
          order,
          q,
          maxResults
        } = this.api;
        const api_url = `${base_url}showinfo=0&modestbranding=0&part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${api_key}`;
        this.getVideos(api_url);
      }
    },
    async getVideos(api_url) {
      await axios
        .get(api_url)
        .then(res => {
          this.videos = res.data.items;
          console.log(this.videos);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addKeyword(keyword) {
      this.keyword_storage.push(keyword);
      localStorage.setItem("keyword", JSON.stringify(this.keyword_storage));
    }
  }
};
/* eslint-enable no-console */

</script>
<style>
.col-12 {
  display: flex;
}
</style>