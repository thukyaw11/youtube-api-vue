<template>
    <div class="card-columns">
      <div class="card" v-bind:key="video.id.videoId" v-for="video in videos">
        <div class="default-player">
        <youtube
          :video-id="video.id.videoId"
          id="youtube_vd"
          player-width="100%"
          player-height="500"

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


</template>

<script>
/* eslint-disable no-console */
import axios from "axios";

export default {
  name: "DefaultResult",
  data() {
    return {
      videos: [],
      api: {
        base_url: "https://www.googleapis.com/youtube/v3/search?",
        api_key: "AIzaSyBetQk4ei8yZMHgs6Ll-gfbIRf328oeVwM",
        part: "snippet",
        type: "video",
        order: "viewCount",
        q: "ifinity shwe htoo",
        maxResults: 10
      }
    };
  },
  created()  {
      this.pepareURL()
  },
  methods: {
    pepareURL() {
        console.log('hello');
      const { base_url, api_key, part, type, order, q, maxResults } = this.api;
      const api_url = `${base_url}showinfo=0&modestbranding=0&part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${api_key}`;
      this.getDefaultVideos(api_url);
    },
    async getDefaultVideos(api_url) {
      await axios
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
</script>