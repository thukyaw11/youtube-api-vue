<template>
  <div id="app" class="container">
    <div class="col-12">
      <a-input placeholder="Search..." v-model="searchString" class="searchForm" />
      <a-icon type="search" @click="parseSearchString" class="searchBtn" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    parseSearchString() {
      const trimedSearchString = this.searchString.trim();
      if (trimedSearchString !== null) {
        const searchParams = trimedSearchString.split(/\s+/);
        this.$emit("search", searchParams);
      }
    }
  }
};
</script>
<style>
.searchForm {
  float: left;
}
.searchBtn {
  float: right;
  font-size: 27px;
  padding-left: 10px;
}
.col-12 {
  display: flex;
}
</style>