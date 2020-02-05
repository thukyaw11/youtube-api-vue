<template>
    <div class="container">
        <div class="row mt-2 ml-2">
            <div class="col-12">
                <div class="search_key" v-for="keyword in keywords" v-bind:key="keyword">
                    <span>{{keyword}}</span>
                </div>
                <p id="trash" @click="deleteKeyword"><a-icon type="delete"/></p>
  
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name : "SearchKeyword",
      data() {
    return {
      keywords : localStorage.getItem('keyword') ? JSON.parse(localStorage.getItem('keyword')) : []
    };
  },
  created() {
      this.keywords = JSON.parse(localStorage.getItem('keyword'));
      if(this.keywords){
      if(this.keywords.length > 5){
          this.keywords.shift();
      localStorage.setItem('keyword',JSON.stringify(this.keywords));

      }
      }
  },
  methods : {
      deleteKeyword(){
          localStorage.clear();
          location.reload();
      }
  }
}
</script>

<style>
    .search_key{
        border: 0.5px solid grey;
        border-radius: 3px;
        padding: 0px 6px 0px 6px;
        font-size: 12px;  
        margin-left: 3px; 
        float: left;
    }
    #trash{
        float: right;
        position: absolute;
        right: 0;
        margin-right: 30px;
        
    }
</style>