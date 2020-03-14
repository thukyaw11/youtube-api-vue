<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
     <div class="phone-viewport">
      <md-bottom-bar class="md-accent" md-sync-route>
        <md-bottom-bar-item to="/" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/search"
          md-label="Search"
          md-icon="search"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/components/bottom-bar/favorites"
          md-label="Favorites"
          md-icon="favorite"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
html {
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.phone-viewport{
  position: fixed;
  width: 100%;
  overflow: hidden;
  bottom: 0;
}
</style>
