<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div class="container">
        <a class="navbar-brand" href="#">
          <a-icon type="youtube" />
          <span class="ml-3">MTK Tube</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
i {
  vertical-align: middle;
  color: red;
  font-size: 30px;
}

i + span {
  vertical-align: middle;
}
</style>