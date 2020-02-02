<template>
  <div class="container mb-3">
    <div class="d-flex mb-3">
      <div class="mr-auto">
        <h3 class="searchResultTitle mt-3 mb-3">
          Search Results for
          <b>"{{ reformattedSearchString }}"</b>
        </h3>
      </div>
    </div>
    <div class="card-columns">
      <div class="card" v-bind:key="video.id.videoId" v-for="video in videos">
        <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank">
          <img
            class="card-img-top"
            :src="video.snippet.thumbnails.medium.url"
            alt="YouTube thumbnail"
          />
        </a>
        
        <div class="card-body">
          <h5 class="card-title">{{ video.snippet.title }}</h5>
          <h6
            class="card-subtitle mb-2 text-muted"
          >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
          <p class="card-text">{{ video.snippet.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: ["videos", "reformattedSearchString"]
};
</script>

<style>
.searchResultTitle {
  font-size: 20px;
}
</style>