<template>
  <div id="app" class="container-fluid">
    <div class="col-12 mt-3">
    <a-input-search placeholder="Search or Chill ..." v-model="searchString" @keydown.13.prevent="parseSearchString"
    class="searchForm"/>
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

.col-12 {
  display: flex;
}
</style>