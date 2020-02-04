<template>
  <div id="app" class="container-fluid">
    <div class="col-12 mt-3">
    
        <a-input placeholder="Search..." v-model="searchString" class="searchForm"/>
    <a-button type="primary" @click="parseSearchString"  icon="search" id="searcn_btn"></a-button>
    
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