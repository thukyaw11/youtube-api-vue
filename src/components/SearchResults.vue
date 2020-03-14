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
        <div class="player">
        <youtube
          :video-id="video.id.videoId"
          id="youtube_vd"
          player-width="100%"

        ></youtube>
        </div>

         <div class="card-body">
          <!-- <h5 class="card-title">{{ video.snippet.title }}</h5>
          <h6
            class="card-subtitle mb-2 text-muted"
          >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6> -->
          <p class="card-text">{{ video.snippet.description }}</p>
        </div>
      </div>
    </div>


   
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: ["videos", "videos_statistic", "reformattedSearchString"],
  filters: {
    formatDate: function(date) {
      return Date.parse(date);
    }
  }
};
</script>

<style>
.searchResultTitle {
  font-size: 20px;
}
#youtube_vd {
  width: 100%;
  height: 100%;
}
iframe{
  height: 1000px;
}
.card{
  border: none;
}
.player{
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
}
</style>
