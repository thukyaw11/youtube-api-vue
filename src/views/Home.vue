<template>
  <div id="app">
    <md-toolbar class="md-transparent" md-elevation="0">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">
        <img src="../assets/logo.png" alt="logo" width="28" height="15" style="margin-right: 10px" />
        YouTube
      </span>

      <div class="md-toolbar-section-end">
        <router-link to="/search">
          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>
        </router-link>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">
          <img
            src="../assets/logo.png"
            alt="logo"
            width="28"
            height="15"
            style="margin-right: 10px"
          />
          YouTube
        </span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-content>
      <DefaultResult/>

    </md-content>
  </div>
</template>
<script>
/* eslint-disable no-console */
import DefaultResult from '../components/DefaultResult';


export default {
  components : {
    DefaultResult
  },
  data() {
    return {
      showNavigation: false,
    };
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
